import { test } from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { rendererPath, renderDiagram, validateDiagramSource } from '../src/modeling/plantuml.js';

const source =
  '@startuml\nactor Pessoa\nPessoa -> Sistema : solicitar\nSistema --> Pessoa : resultado\n@enduml';
test('adaptador rejeita includes, funções, nomes de saída e múltiplos blocos', () => {
  for (const invalid of [
    source.replace('actor Pessoa', '!includeurl https://example.com/source'),
    source.replace('actor Pessoa', 'note "%load_json(\"secret.json\")"'),
    source.replace('@startuml', '@startuml /tmp/out'),
    `${source}\n${source}`,
  ])
    assert.throws(() => validateDiagramSource(invalid));
  assert.equal(validateDiagramSource(source), source);
});
const available = await access(rendererPath)
  .then(() => true)
  .catch(() => false);
test(
  'renderizador real retorna SVG e PNG e falha em sintaxe inválida',
  { skip: !available, timeout: 45000 },
  async () => {
    const svg = await renderDiagram(source, 'svg');
    assert.match(svg.toString('utf8'), /<svg\b/);
    assert.match(svg.toString('utf8'), /resultado/);
    const png = await renderDiagram(source, 'png');
    assert.equal(png[0], 137);
    await assert.rejects(
      renderDiagram('@startuml\nthis is not a valid diagram ???\n@enduml', 'svg'),
      /rejeitou/,
    );
  },
);
