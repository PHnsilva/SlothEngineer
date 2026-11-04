import { readFile } from 'node:fs/promises';
import { z } from 'zod';

export const integrationSchema = z
  .strictObject({
    id: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    kind: z.enum(['local-adapter', 'upstream-reference', 'external-api']),
    status: z.enum(['implemented', 'reference-only', 'planned']),
    summary: z.string().min(1),
    sources: z.array(z.url()).min(1),
    documentation: z.string().min(1),
    mcpTool: z.string().optional(),
    executionPolicy: z.enum(['fixed-local-adapter', 'none']),
    credentialRequirement: z.string(),
    costPolicy: z.string(),
  })
  .superRefine((entry, context) => {
    if (
      entry.kind !== 'local-adapter' &&
      (entry.status === 'implemented' ||
        entry.executionPolicy !== 'none' ||
        entry.mcpTool !== undefined)
    )
      context.addIssue({
        code: 'custom',
        message: 'Referência ou API futura não pode habilitar execução.',
      });
    if (
      entry.status === 'implemented' &&
      (!entry.mcpTool || entry.executionPolicy !== 'fixed-local-adapter')
    )
      context.addIssue({
        code: 'custom',
        message: 'Adaptador implementado precisa de contrato explícito.',
      });
  });

export async function getIntegrationCatalog() {
  const entries = z
    .array(integrationSchema)
    .parse(
      JSON.parse(await readFile(new URL('../../tools/catalog.json', import.meta.url), 'utf8')),
    );
  if (new Set(entries.map((entry) => entry.id)).size !== entries.length)
    throw new Error('IDs de ferramentas duplicados.');
  return entries;
}
