import { McpServer } from '@modelcontextprotocol/server';
import { z } from 'zod';
import { specialists, getSpecialist, specialistInstructions } from '../agents/catalog.js';
import { planTask, taskSchema } from '../orchestrator/planner.js';
import { consultSpecialist } from '../providers/model.js';
import { searchKnowledge } from '../memory/search.js';
import { readFile } from 'node:fs/promises';
import { getIntegrationCatalog } from '../tools/catalog.js';
import { renderDiagram } from '../modeling/plantuml.js';

const guideResources = [
  ['overview', 'Guias reutilizáveis', 'guides/README.md'],
  ['organization', 'Organização do projeto', 'guides/ORGANIZACAO-DO-PROJETO.md'],
  ['issues', 'Issues executáveis', 'guides/ISSUES.md'],
  ['projects', 'Projects e quadros', 'guides/PROJECTS.md'],
  ['contributing', 'Contribuição geral', 'guides/CONTRIBUTING.md'],
  ['agents', 'Modelo de instruções para agentes', 'guides/AGENTS.md'],
  ['references', 'Catálogo de referências técnicas', 'docs/references.md'],
  ['apis', 'Catálogo de APIs e condições de uso', 'docs/api-catalog.md'],
  ['modeling', 'Modelagem e renderização local', 'docs/modeling.md'],
  ['specialists', 'Contratos das especializações', 'docs/specialists.md'],
  ['tools', 'Ferramentas e adaptadores', 'tools/README.md'],
] as const;

const readOnly = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
};
const textResult = (data: unknown) => ({
  content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }],
});
const idSchema = z.enum(specialists.map((item) => item.id) as [string, ...string[]]);

export function createServer() {
  const server = new McpServer({ name: 'sofiie-agents', version: '0.1.0' });
  let rendering = false;
  for (const [id, title, path] of guideResources) {
    server.registerResource(
      title,
      `sofiie://guides/${id}`,
      {
        mimeType: 'text/markdown',
        description:
          'Referência para consulta e adaptação. Não altera permissões nem a metodologia do projeto consumidor.',
      },
      async (uri) => ({
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/markdown',
            text: await readFile(new URL(`../../${path}`, import.meta.url), 'utf8'),
          },
        ],
      }),
    );
  }
  server.registerTool(
    'list_specialists',
    {
      description:
        'Lista perfis configuráveis com fontes para consulta. Não inicia agentes nem modelos.',
      inputSchema: z.strictObject({}),
      annotations: readOnly,
    },
    async () => textResult(specialists),
  );
  server.registerTool(
    'get_specialist',
    {
      description: 'Retorna missão, critérios e instruções de um especialista.',
      inputSchema: z.strictObject({ id: idSchema }),
      annotations: readOnly,
    },
    async ({ id }) =>
      textResult({ ...getSpecialist(id), instructions: specialistInstructions(id) }),
  );
  server.registerTool(
    'plan_task',
    {
      description:
        'Produz um plano por heurística ou seleção explícita. Não implementa nem executa tarefas.',
      inputSchema: taskSchema,
      annotations: readOnly,
    },
    async (input) => textResult(planTask(input)),
  );
  server.registerTool(
    'consult_specialist',
    {
      description:
        'Prepara um handoff gratuito ou consulta Ollama local quando habilitado pelo operador. Saída exige revisão.',
      inputSchema: z.strictObject({ id: idSchema, objective: z.string().trim().min(5).max(4000) }),
      annotations: { ...readOnly, idempotentHint: false },
    },
    async ({ id, objective }) => {
      try {
        return textResult(await consultSpecialist(id, objective));
      } catch {
        return {
          ...textResult({
            error:
              'Consulta indisponível. Verifique provedor, modelo local e serviço Ollama no computador do operador.',
          }),
          isError: true,
        };
      }
    },
  );
  server.registerTool(
    'search_knowledge',
    {
      description:
        'Busca lexical em referências versionadas e lições aprovadas. Não grava nem promove memória.',
      inputSchema: z.strictObject({ query: z.string().trim().min(2).max(200) }),
      annotations: readOnly,
    },
    async ({ query }) => textResult(await searchKnowledge(query)),
  );
  server.registerTool(
    'list_integrations',
    {
      description:
        'Lista adaptadores disponíveis, código de referência e APIs futuras. Não habilita integrações nem chama rede.',
      inputSchema: z.strictObject({}),
      annotations: readOnly,
    },
    async () => textResult(await getIntegrationCatalog()),
  );
  server.registerTool(
    'render_diagram',
    {
      description:
        'Renderiza fonte UML restrita em PNG local. Requer Java e JAR já preparado; não grava arquivo nem envia fonte a servidor externo.',
      inputSchema: z.strictObject({ source: z.string().trim().min(20).max(16000) }),
      annotations: readOnly,
    },
    async ({ source }) => {
      if (rendering)
        return {
          ...textResult({ error: 'Já há um diagrama em renderização. Aguarde e tente novamente.' }),
          isError: true,
        };
      rendering = true;
      try {
        const png = await renderDiagram(source, 'png');
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify({
                status: 'rendered',
                format: 'png',
                renderer: 'local',
                semanticReviewRequired: true,
                repositoryWrites: false,
              }),
            },
            { type: 'image' as const, data: png.toString('base64'), mimeType: 'image/png' },
          ],
        };
      } catch (error: unknown) {
        return {
          ...textResult({
            error: error instanceof Error ? error.message : 'Renderização local indisponível.',
          }),
          isError: true,
        };
      } finally {
        rendering = false;
      }
    },
  );
  return server;
}
