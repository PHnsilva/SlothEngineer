import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const digest = '835b2f2eb1d756da3f03bffdbd0baf252b4b858547a741ac8e972958a09c7f91';
export const rendererPath = fileURLToPath(
  new URL('../../.local/tools/plantuml-mit-1.2026.9.jar', import.meta.url),
);

export function validateDiagramSource(input: unknown): string {
  const source = z.string().trim().min(20).max(16000).parse(input);
  if (source.split('\n').length > 200)
    throw new Error('Diagrama excede 200 linhas; divida por pergunta/nível.');
  if (
    !/^@startuml\s*\r?\n/.test(source) ||
    !/\r?\n@enduml$/.test(source) ||
    (source.match(/@startuml/g) ?? []).length !== 1 ||
    (source.match(/@enduml/g) ?? []).length !== 1
  )
    throw new Error('Forneça exatamente um bloco @startuml, sem nome de arquivo.');
  if (/!|%|<\s*img\b|<\s*image\b/i.test(source))
    throw new Error('Este adaptador não aceita pré-processamento, funções ou imagens externas.');
  return source;
}

export async function renderDiagram(input: unknown, outputFormat: unknown): Promise<Buffer> {
  const source = validateDiagramSource(input);
  const format = z.enum(['svg', 'png']).parse(outputFormat);
  const jar = await readFile(rendererPath).catch(() => {
    throw new Error(
      'Prepare o renderizador com npm run diagrams:setup. Java também deve estar disponível.',
    );
  });
  if (createHash('sha256').update(jar).digest('hex') !== digest)
    throw new Error('Renderizador local alterado ou com versão diferente.');
  return new Promise((resolve, reject) => {
    const child = spawn(
      'java',
      [
        '-Xmx256m',
        '-Djava.awt.headless=true',
        '-DPLANTUML_SECURITY_PROFILE=SANDBOX',
        '-jar',
        rendererPath,
        '-pipe',
        `-t${format}`,
        '-charset',
        'UTF-8',
        '-nometadata',
        '-Playout=smetana',
        '-failfast2',
      ],
      { shell: false, windowsHide: true, stdio: ['pipe', 'pipe', 'pipe'] },
    );
    const chunks: Buffer[] = [];
    let size = 0;
    let failure: Error | undefined;
    const stop = (message: string) => {
      failure ??= new Error(message);
      child.kill();
    };
    const timer = setTimeout(() => stop('Tempo limite de renderização excedido.'), 15000);
    child.stdout.on('data', (chunk: Buffer) => {
      size += chunk.length;
      if (size > 2000000) stop('Diagrama excede o limite de saída.');
      else chunks.push(chunk);
    });
    child.stderr.resume();
    child.stdin.on('error', () => {
      /* A saída/erro do processo define o resultado. */
    });
    child.on('error', () => {
      clearTimeout(timer);
      reject(new Error('Não foi possível executar Java localmente.'));
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      if (failure) return reject(failure);
      if (code !== 0)
        return reject(new Error('PlantUML rejeitou o diagrama. Revise a sintaxe da fonte.'));
      const result = Buffer.concat(chunks);
      const valid =
        format === 'png'
          ? result.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
          : /<svg\b/.test(result.toString('utf8'));
      if (!valid)
        return reject(new Error('O processo não retornou uma imagem no formato solicitado.'));
      resolve(result);
    });
    child.stdin.end(source, 'utf8');
  });
}
