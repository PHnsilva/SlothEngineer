import { readFile } from 'node:fs/promises';
import { z } from 'zod';
import { validateGenerationCases } from './generation.js';
import { planTask } from '../orchestrator/planner.js';

const cases = z
  .array(
    z.strictObject({
      id: z.string(),
      objective: z.string(),
      expected: z.string(),
      reviewer: z.string(),
    }),
  )
  .parse(JSON.parse(await readFile(new URL('../../evals/routing.json', import.meta.url), 'utf8')));
const generationCases = validateGenerationCases(
  JSON.parse(
    await readFile(new URL('../../evals/generation/cases.public.json', import.meta.url), 'utf8'),
  ),
);
const results = cases.map((item) => {
  const plan = planTask({ objective: item.objective });
  return {
    id: item.id,
    passed:
      plan.workers.includes(item.expected) &&
      plan.reviewers.includes(item.reviewer) &&
      !plan.executed,
  };
});
const passed = results.filter((item) => item.passed).length;
console.log(
  JSON.stringify(
    {
      suites: [
        {
          suite: 'routing-regression',
          passed,
          total: cases.length,
          results,
          limitation:
            'Casos públicos de regressão da heurística. Não medem inteligência, qualidade de geração ou aprendizado de modelo.',
        },
        {
          suite: 'generation-data-validation',
          passed: true,
          publicCases: generationCases.length,
          partitions: {
            development: generationCases.filter((item) => item.partition === 'development').length,
            regression: generationCases.filter((item) => item.partition === 'regression').length,
          },
          adversarialCases: generationCases.filter((item) => item.adversarial).length,
          limitation:
            'Valida somente a estrutura dos dados públicos. Não executa modelo, pontua respostas ou cria baseline; reserva privada não é carregada.',
        },
      ],
    },
    null,
    2,
  ),
);
if (passed !== cases.length) process.exitCode = 1;
