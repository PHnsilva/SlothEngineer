import { mkdir, readFile, realpath, writeFile } from 'node:fs/promises';
import { basename, extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderDiagram } from './plantuml.js';

async function main() {
  const root = await realpath(fileURLToPath(new URL('../../', import.meta.url)));
  const sourceArg = process.argv[2];
  const format = process.argv[3] ?? 'svg';
  if (!sourceArg) throw new Error('Uso: npm run diagram -- <arquivo.puml no projeto> [svg|png]');
  const sourcePath = await realpath(resolve(sourceArg));
  const rel = relative(root, sourcePath);
  if (
    isAbsolute(rel) ||
    rel === '..' ||
    rel.startsWith(`..${sep}`) ||
    extname(sourcePath) !== '.puml'
  )
    throw new Error('A fonte deve ser .puml e estar dentro deste projeto.');
  const output = await renderDiagram(await readFile(sourcePath, 'utf8'), format);
  const dir = resolve(root, 'docs/diagrams/generated');
  await mkdir(dir, { recursive: true });
  const outputDir = await realpath(dir);
  if (relative(root, outputDir).startsWith('..'))
    throw new Error('Diretório de saída fora do projeto.');
  const target = resolve(outputDir, `${basename(sourcePath, '.puml')}.${format}`);
  await writeFile(target, output, { flag: 'w' });
  console.log(
    JSON.stringify({
      file: target,
      format,
      bytes: output.length,
      renderer: 'local',
      semanticReviewRequired: true,
    }),
  );
}
main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : 'Falha de renderização.');
  process.exitCode = 1;
});
