import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { callPeerTool, peerSchema } from '../src/mcp/peers.js';
import { specialists } from '../src/agents/catalog.js';
import { access } from 'node:fs/promises';
import { rendererPath } from '../src/modeling/plantuml.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const entry = fileURLToPath(new URL('../src/mcp/stdio.ts', import.meta.url));
const peer = {
  id: 'integration-fixture',
  command: process.execPath,
  args: ['--import', 'tsx', entry],
  cwd: root,
  allowTools: ['plan_task'],
};

test(
  'cliente conversa com processo MCP real e valida schema das ferramentas',
  { timeout: 30000 },
  async () => {
    const client = new Client({ name: 'integration-test', version: '0.1.0' });
    const transport = new StdioClientTransport({
      command: process.execPath,
      args: peer.args,
      cwd: root,
      env: { SOFIIE_PROVIDER: 'handoff' },
      stderr: 'ignore',
    });
    try {
      await client.connect(transport, { timeout: 10000 });
      const catalog = await client.listTools();
      assert.equal(catalog.tools.length, 7);
      const resources = await client.listResources();
      assert.equal(resources.resources.length, 11);
      for (const resource of resources.resources) {
        const document = await client.readResource({ uri: resource.uri });
        assert.ok(
          document.contents.some((content) => 'text' in content && content.text.startsWith('# ')),
        );
      }
      await assert.rejects(client.readResource({ uri: 'sofiie://guides/../../.env' }));
      const integrations = await client.callTool({ name: 'list_integrations', arguments: {} });
      assert.ok(
        integrations.content.some(
          (item) => item.type === 'text' && item.text.includes('reference-only'),
        ),
      );
      const unsafeDiagram = await client.callTool({
        name: 'render_diagram',
        arguments: { source: '@startuml\n!includeurl https://example.com/source\n@enduml' },
      });
      assert.equal(unsafeDiagram.isError, true);
      assert.ok(resources.resources.some((resource) => resource.uri === 'sofiie://guides/issues'));
      const guide = await client.readResource({ uri: 'sofiie://guides/issues' });
      assert.ok(
        guide.contents.some(
          (content) =>
            'text' in content && content.text.includes('Separação orientada a dependências'),
        ),
      );
      const listed = await client.callTool({ name: 'list_specialists', arguments: {} });
      const content = listed.content[0];
      assert.equal(content?.type, 'text');
      if (content?.type === 'text') {
        const profiles = JSON.parse(content.text);
        assert.equal(profiles.length, specialists.length);
        assert.ok(
          profiles.some(
            (profile: { id: string; references: string[] }) =>
              profile.id === 'modeling' && profile.references.length > 0,
          ),
        );
      }
      const invalid = await client.callTool({ name: 'plan_task', arguments: { objective: 'x' } });
      assert.equal(invalid.isError, true);
      const unknownField = await client.callTool({
        name: 'plan_task',
        arguments: { objective: 'Revisar projeto', shell: 'execute' },
      });
      assert.equal(unknownField.isError, true);
      const handoff = await client.callTool({
        name: 'consult_specialist',
        arguments: { id: 'accessibility', objective: 'Revisar navegação com teclado' },
      });
      assert.ok(
        handoff.content.some(
          (item) => item.type === 'text' && item.text.includes('"inferenceExecuted": false'),
        ),
      );
      const missing = await client.callTool({
        name: 'get_specialist',
        arguments: { id: 'unknown' },
      });
      assert.equal(missing.isError, true);
    } finally {
      await client.close();
      await transport.close();
    }
  },
);
test(
  'cliente outbound chama peer autorizado e identifica resultado não confiável',
  { timeout: 30000 },
  async () => {
    const result = await callPeerTool(peer, 'plan_task', {
      objective: 'Revisar backend com segurança',
    });
    assert.equal(result.trusted, false);
    assert.ok(
      result.result.content.some((item) => item.type === 'text' && item.text.includes('planned')),
    );
  },
);
test('allowlist, tamanho e executável relativo são rejeitados antes de spawn', async () => {
  await assert.rejects(callPeerTool(peer, 'delete_everything', {}), /allowlist/);
  await assert.rejects(callPeerTool(peer, 'plan_task', { objective: 'x'.repeat(17000) }), /limite/);
  assert.equal(peerSchema.safeParse({ ...peer, command: 'node' }).success, false);
});
const rendererAvailable = await access(rendererPath)
  .then(() => true)
  .catch(() => false);
test(
  'ferramenta MCP retorna imagem PNG de renderização local real',
  { skip: !rendererAvailable, timeout: 30000 },
  async () => {
    const client = new Client({ name: 'diagram-integration', version: '0.1.0' });
    const transport = new StdioClientTransport({
      command: process.execPath,
      args: peer.args,
      cwd: root,
      env: { SOFIIE_PROVIDER: 'handoff' },
      stderr: 'ignore',
    });
    try {
      await client.connect(transport, { timeout: 10000 });
      const result = await client.callTool({
        name: 'render_diagram',
        arguments: {
          source:
            '@startuml\nactor Pessoa\nPessoa -> Sistema : solicitar\nSistema --> Pessoa : resultado\n@enduml',
        },
      });
      assert.notEqual(result.isError, true);
      const image = result.content.find((item) => item.type === 'image');
      assert.ok(image && image.type === 'image');
      assert.equal(image.mimeType, 'image/png');
      assert.equal(Buffer.from(image.data, 'base64')[0], 137);
    } finally {
      await client.close();
      await transport.close();
    }
  },
);
