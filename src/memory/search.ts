import { readFile } from 'node:fs/promises';
import { z } from 'zod';
import { specialists } from '../agents/catalog.js';

const entrySchema = z.strictObject({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  status: z.enum(['reference', 'approved']),
  sources: z.array(z.string()).min(1),
});
const entriesSchema = z.array(entrySchema);

export async function searchKnowledge(query: string) {
  const text = z.string().trim().min(2).max(200).parse(query);
  const reference = entriesSchema.parse(
    JSON.parse(await readFile(new URL('../../knowledge/references.json', import.meta.url), 'utf8')),
  );
  const approved = entriesSchema.parse(
    JSON.parse(await readFile(new URL('../../knowledge/approved.json', import.meta.url), 'utf8')),
  );
  const tokens = text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .split(/\s+/);
  const profiles = specialists.map((agent) => ({
    id: `specialist-${agent.id}`,
    title: `Referências: ${agent.name}`,
    content: [agent.mission, ...agent.keywords, ...agent.checks].join(' '),
    status: 'reference' as const,
    sources: ['docs/references.md', ...agent.references],
  }));
  return [...reference, ...profiles, ...approved]
    .map((entry) => {
      const corpus = `${entry.title} ${entry.content} ${entry.sources.join(' ')}`
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase();
      return { ...entry, score: tokens.filter((token) => corpus.includes(token)).length };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
