import { test } from 'node:test';
import assert from 'node:assert/strict';
import { searchKnowledge } from '../src/memory/search.js';

test('recuperação retorna fontes e distingue referência de lição aprovada', async () => {
  const results = await searchKnowledge('MCP');
  assert.ok(results.some((entry) => entry.id === 'mcp-a2a'));
  assert.ok(results.every((entry) => entry.sources.length > 0 && entry.status === 'reference'));
});
test('consulta não recebe caminho de arquivo e limita a entrada', async () => {
  assert.deepEqual(await searchKnowledge('../../dados-cadastrais-privados.md'), []);
  await assert.rejects(searchKnowledge('x'.repeat(201)));
});
test('fontes dos especialistas estão disponíveis sem virar lições aprovadas', async () => {
  const results = await searchKnowledge('plantuml');
  assert.ok(
    results.some((entry) => entry.id === 'specialist-modeling' && entry.status === 'reference'),
  );
});
