import { z } from 'zod';
import { getSpecialist, specialists } from '../agents/catalog.js';

export const taskSchema = z.strictObject({
  objective: z.string().trim().min(5).max(4000),
  specialists: z.array(z.string().max(40)).max(3).default([]),
});

function words(text: string): Set<string> {
  return new Set(
    text
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .match(/[a-z0-9]+/g),
  );
}

export function planTask(input: unknown) {
  const task = taskSchema.parse(input);
  task.specialists.forEach(getSpecialist);
  const tokens = words(task.objective);
  const scored = specialists
    .map((agent, index) => ({
      agent,
      index,
      score: agent.keywords.filter((keyword) => tokens.has(keyword)).length,
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
  const matches = scored
    .filter((item) => item.score > 0)
    .slice(0, 3)
    .map((item) => item.agent.id);
  const workers = [
    ...new Set(task.specialists.length ? task.specialists : matches.length ? matches : ['product']),
  ];
  const reviewers = new Set(['qa']);
  if (['frontend', 'ux', 'visual-design', 'mobile', 'desktop'].some((id) => workers.includes(id)))
    reviewers.add('accessibility');
  if (
    ['backend', 'data', 'desktop', 'interoperability', 'ai', 'devops'].some((id) =>
      workers.includes(id),
    )
  )
    reviewers.add('security');
  // Revisores adicionais são funções a consultar depois, não processos iniciados aqui.
  for (const id of workers) reviewers.delete(id);
  return {
    status: 'planned' as const,
    objective: task.objective,
    orchestrator:
      'Inspecionar contexto, delimitar escopo, consultar especialistas e consolidar evidências.',
    workers,
    reviewers: [...reviewers],
    routing: task.specialists.length ? 'explicit' : 'keyword-heuristic',
    maxConcurrentModelCalls: 1,
    stages: ['inspecionar', 'definir aceite', 'propor', 'validar', 'revisar', 'submeter PR'],
    acceptance: [
      'Critérios ligados ao objetivo.',
      'Evidências reproduzíveis.',
      'Limitações e pendências explícitas.',
      'Revisão antes de promover conhecimento.',
    ],
    permissions: { shell: false, repositoryWrites: false, paidApis: false, remoteNetwork: false },
    executed: false,
  };
}
