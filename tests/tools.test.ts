import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { getIntegrationCatalog, integrationSchema } from '../src/tools/catalog.js';

test('catálogo não transforma referências ou APIs candidatas em execução', async () => {
  const entries = await getIntegrationCatalog();
  assert.equal(entries.filter((entry) => entry.status === 'implemented').length, 1);
  assert.ok(
    entries
      .filter((entry) => entry.kind !== 'local-adapter')
      .every((entry) => entry.executionPolicy === 'none' && entry.mcpTool === undefined),
  );
  const reference = entries.find((entry) => entry.id === 'aramuni-plantuml-example')!;
  assert.equal(
    integrationSchema.safeParse({ ...reference, mcpTool: 'execute_original' }).success,
    false,
  );
  assert.equal(integrationSchema.safeParse({ ...reference, status: 'implemented' }).success, false);
});
test('cópia de referência preserva a licença e todos os hashes registrados', async () => {
  const base = new URL('../tools/plantuml/', import.meta.url);
  const manifest = JSON.parse(await readFile(new URL('reference-manifest.json', base), 'utf8')) as {
    executed_by_runtime: boolean;
    files: { path: string; sha256: string }[];
  };
  assert.equal(manifest.executed_by_runtime, false);
  const license = await readFile(new URL('upstream/LICENSE', base), 'utf8');
  assert.match(license, /MIT License/);
  for (const file of manifest.files) {
    const content = await readFile(new URL(`upstream/${file.path}`, base));
    assert.equal(createHash('sha256').update(content).digest('hex'), file.sha256, file.path);
  }
});
