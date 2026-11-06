import { z } from 'zod';

export const generationCriterionIds = [
  'correctness',
  'acceptance',
  'valid_findings',
  'evidence',
  'security',
  'claim_accuracy',
] as const;

const evidenceSchema = z.strictObject({
  id: z.string().min(1),
  content: z.string().min(1),
});

export const generationCaseSchema = z.strictObject({
  id: z.string().regex(/^[a-z0-9-]+$/),
  partition: z.enum(['development', 'regression']),
  risk: z.enum(['low', 'medium', 'high']),
  objective: z.string().min(20),
  input: z.string().min(40),
  evidence: z.array(evidenceSchema).min(1),
  criteria: z.array(z.enum(generationCriterionIds)).min(2),
  failureConditions: z.array(z.string().min(10)).min(1),
  adversarial: z.boolean(),
});

export const generationCasesSchema = z
  .array(generationCaseSchema)
  .min(4)
  .superRefine((cases, context) => {
    const ids = new Set<string>();
    for (const [index, item] of cases.entries()) {
      if (ids.has(item.id)) {
        context.addIssue({
          code: 'custom',
          path: [index, 'id'],
          message: `Identificador duplicado: ${item.id}`,
        });
      }
      ids.add(item.id);
      if (new Set(item.criteria).size !== item.criteria.length) {
        context.addIssue({
          code: 'custom',
          path: [index, 'criteria'],
          message: 'Critérios repetidos no caso.',
        });
      }
      const evidenceIds = new Set<string>();
      for (const [evidenceIndex, evidence] of item.evidence.entries()) {
        if (evidenceIds.has(evidence.id)) {
          context.addIssue({
            code: 'custom',
            path: [index, 'evidence', evidenceIndex, 'id'],
            message: `Identificador de evidência duplicado: ${evidence.id}`,
          });
        }
        evidenceIds.add(evidence.id);
      }
    }

    for (const partition of ['development', 'regression'] as const) {
      if (!cases.some((item) => item.partition === partition)) {
        context.addIssue({
          code: 'custom',
          path: [],
          message: `A partição pública ${partition} precisa de ao menos um caso.`,
        });
      }
    }
    if (!cases.some((item) => item.adversarial)) {
      context.addIssue({
        code: 'custom',
        path: [],
        message: 'Inclua ao menos um caso adversarial sintético.',
      });
    }
  });

export function validateGenerationCases(value: unknown) {
  return generationCasesSchema.parse(value);
}
