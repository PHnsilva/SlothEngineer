import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { validateGenerationCases } from '../src/evals/generation.js';

const fixture = JSON.parse(
  await readFile(new URL('../evals/generation/cases.public.json', import.meta.url), 'utf8'),
) as unknown;

test('generation protocol cases have both public partitions and adversarial coverage', () => {
  const cases = validateGenerationCases(fixture);
  assert.equal(cases.length, 24);
  assert.deepEqual(
    cases.reduce((counts, item) => ({ ...counts, [item.partition]: counts[item.partition] + 1 }), {
      development: 0,
      regression: 0,
    }),
    { development: 12, regression: 12 },
  );
  assert.ok(cases.some((item) => item.adversarial && item.risk === 'high'));
  const coverage = new Map<string, number>();
  for (const item of cases) {
    for (const specialty of item.specialties) {
      coverage.set(specialty, (coverage.get(specialty) ?? 0) + 1);
    }
  }
  assert.equal(coverage.size, 23);
  assert.equal(coverage.get('devops'), 5);
  assert.ok(
    coverage.get('devops')! >
      Math.max(
        ...[...coverage.entries()].filter(([id]) => id !== 'devops').map(([, count]) => count),
      ),
  );
});

test('generation protocol rejects duplicate identifiers and missing adversarial coverage', () => {
  const cases = structuredClone(fixture) as Array<Record<string, unknown>>;
  cases[1] = { ...cases[1], id: cases[0]?.id };
  cases[3] = { ...cases[3], adversarial: false };
  assert.throws(() => validateGenerationCases(cases));
});

test('generation coverage rejects unknown or missing specialist profiles', () => {
  const unknown = structuredClone(fixture) as Array<Record<string, unknown>>;
  unknown[0] = { ...unknown[0], specialties: ['voice'] };
  assert.throws(() => validateGenerationCases(unknown));

  const missing = structuredClone(fixture) as Array<Record<string, unknown>>;
  const index = missing.findIndex(
    (item) => Array.isArray(item.specialties) && item.specialties.includes('game-engine'),
  );
  missing.splice(index, 1);
  assert.throws(() => validateGenerationCases(missing));
});
