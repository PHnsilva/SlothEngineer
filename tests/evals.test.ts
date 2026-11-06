import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { validateGenerationCases } from '../src/evals/generation.js';

const fixture = JSON.parse(
  await readFile(new URL('../evals/generation/cases.public.json', import.meta.url), 'utf8'),
) as unknown;

test('generation protocol cases have both public partitions and adversarial coverage', () => {
  const cases = validateGenerationCases(fixture);
  assert.equal(cases.length, 6);
  assert.deepEqual(
    cases.reduce((counts, item) => ({ ...counts, [item.partition]: counts[item.partition] + 1 }), {
      development: 0,
      regression: 0,
    }),
    { development: 3, regression: 3 },
  );
  assert.ok(cases.some((item) => item.adversarial && item.risk === 'high'));
});

test('generation protocol rejects duplicate identifiers and missing adversarial coverage', () => {
  const cases = structuredClone(fixture) as Array<Record<string, unknown>>;
  cases[1] = { ...cases[1], id: cases[0]?.id };
  cases[3] = { ...cases[3], adversarial: false };
  assert.throws(() => validateGenerationCases(cases));
});
