import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const target = new URL('../.local/tools/plantuml-mit-1.2026.9.jar', import.meta.url);
const url =
  'https://github.com/plantuml/plantuml/releases/download/v1.2026.9/plantuml-mit-1.2026.9.jar';
const expected = '835b2f2eb1d756da3f03bffdbd0baf252b4b858547a741ac8e972958a09c7f91';
let data;
try {
  data = await readFile(target);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
if (!data) {
  const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`Download falhou: HTTP ${response.status}`);
  data = Buffer.from(await response.arrayBuffer());
}
if (createHash('sha256').update(data).digest('hex') !== expected)
  throw new Error('SHA-256 do renderizador não corresponde à versão fixada.');
await mkdir(new URL('../.local/tools/', import.meta.url), { recursive: true });
await writeFile(target, data);
console.log(
  'PlantUML MIT 1.2026.9 preparado localmente; SHA-256 verificado. Nenhum serviço foi contratado.',
);
