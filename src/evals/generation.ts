import { z } from 'zod';
import { specialists } from '../agents/catalog.js';

const specialistIds = new Set(specialists.map((specialist) => specialist.id));

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
  specialties: z.array(z.string().min(1)).min(1),
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
      if (new Set(item.specialties).size !== item.specialties.length) {
        context.addIssue({
          code: 'custom',
          path: [index, 'specialties'],
          message: 'Especialidades repetidas no caso.',
        });
      }
      for (const [specialtyIndex, specialty] of item.specialties.entries()) {
        if (!specialistIds.has(specialty)) {
          context.addIssue({
            code: 'custom',
            path: [index, 'specialties', specialtyIndex],
            message: `Especialidade fora do catálogo: ${specialty}`,
          });
        }
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

    const coverage = new Map<string, number>();
    for (const item of cases) {
      for (const specialty of new Set(item.specialties)) {
        coverage.set(specialty, (coverage.get(specialty) ?? 0) + 1);
      }
    }
    for (const specialty of specialistIds) {
      if (!coverage.has(specialty)) {
        context.addIssue({
          code: 'custom',
          path: [],
          message: `Sem caso público para a especialidade ${specialty}.`,
        });
      }
    }
    const devopsCases = coverage.get('devops') ?? 0;
    const maxOtherCoverage = Math.max(
      0,
      ...[...coverage.entries()]
        .filter(([specialty]) => specialty !== 'devops')
        .map(([, count]) => count),
    );
    if (devopsCases <= maxOtherCoverage) {
      context.addIssue({
        code: 'custom',
        path: [],
        message: 'A cobertura pública de DevOps deve superar a de qualquer outra especialidade.',
      });
    }
  });

export function validateGenerationCases(value: unknown) {
  return generationCasesSchema.parse(value);
}
