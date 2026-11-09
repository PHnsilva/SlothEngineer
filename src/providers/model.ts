import { z } from 'zod';
import { specialistInstructions, getSpecialist } from '../agents/catalog.js';

const responseSchema = z.object({
  message: z.object({ content: z.string().trim().min(1).max(32000) }),
  done: z.literal(true),
});
const tagsSchema = z.object({
  models: z.array(z.object({ name: z.string(), size: z.number().int().nonnegative() })),
});
const LOCAL_OLLAMA = 'http://127.0.0.1:11434';
type Fetch = typeof fetch;
let activeInferenceCount = 0;

export interface InferenceLimits {
  maxInputChars: number;
  maxModelBytes: number;
  contextTokens: number;
  maxGenerationTokens: number;
  timeoutMs: number;
  maxConcurrentInferences: number;
}

function boundedInteger(
  env: NodeJS.ProcessEnv,
  name: string,
  fallback: number,
  minimum: number,
  maximum: number,
): number {
  const raw = env[name];
  if (raw === undefined) return fallback;
  if (!/^\d+$/.test(raw))
    throw new Error(`${name} deve ser um número inteiro entre ${minimum} e ${maximum}.`);
  const value = Number(raw);
  if (!Number.isSafeInteger(value) || value < minimum || value > maximum)
    throw new Error(`${name} deve ser um número inteiro entre ${minimum} e ${maximum}.`);
  return value;
}

export function getInferenceLimits(env: NodeJS.ProcessEnv = process.env): InferenceLimits {
  return {
    maxInputChars: boundedInteger(env, 'SOFIIE_MAX_INPUT_CHARS', 4000, 5, 4000),
    maxModelBytes: boundedInteger(env, 'SOFIIE_MAX_MODEL_BYTES', 2_000_000_000, 1, 16_000_000_000),
    contextTokens: boundedInteger(env, 'SOFIIE_CONTEXT_TOKENS', 4096, 512, 8192),
    maxGenerationTokens: boundedInteger(env, 'SOFIIE_MAX_GENERATION_TOKENS', 256, 16, 1024),
    timeoutMs: boundedInteger(env, 'SOFIIE_TIMEOUT_MS', 60_000, 1_000, 120_000),
    maxConcurrentInferences: boundedInteger(env, 'SOFIIE_MAX_CONCURRENT_INFERENCES', 1, 1, 4),
  };
}

export function validateLocalModel(model: string | undefined): string {
  if (
    !model ||
    !/^[a-zA-Z0-9][a-zA-Z0-9._:/-]{0,119}$/.test(model) ||
    /cloud|https?:|\//i.test(model)
  ) {
    throw new Error(
      'Defina SOFIIE_MODEL com o nome exato de um modelo local, sem cloud, URL ou namespace remoto.',
    );
  }
  return model;
}

export async function consultSpecialist(
  id: string,
  objective: string,
  env: NodeJS.ProcessEnv = process.env,
  request: Fetch = fetch,
) {
  getSpecialist(id);
  const limits = getInferenceLimits(env);
  const task = z.string().trim().min(5).max(limits.maxInputChars).parse(objective);
  const instructions = specialistInstructions(id);
  const provider = env.SOFIIE_PROVIDER ?? 'handoff';
  if (provider === 'handoff')
    return {
      status: 'handoff' as const,
      specialist: id,
      inferenceExecuted: false,
      instructions,
      task,
      notice:
        'Entregue estas instruções ao assistente que você já utiliza. Nenhum modelo foi executado.',
    };
  if (provider !== 'ollama')
    throw new Error('Provedor permitido: handoff ou ollama. APIs pagas não estão implementadas.');
  const model = validateLocalModel(env.SOFIIE_MODEL);
  if (activeInferenceCount >= limits.maxConcurrentInferences)
    throw new Error('Limite configurado de inferências locais simultâneas atingido.');
  activeInferenceCount++;
  try {
    const options = { signal: AbortSignal.timeout(limits.timeoutMs), redirect: 'error' as const };
    const tags = await request(`${LOCAL_OLLAMA}/api/tags`, options);
    if (!tags.ok) throw new Error(`Ollama indisponível: HTTP ${tags.status}.`);
    const installed = tagsSchema.parse(await tags.json());
    const installedModel = installed.models.find((item) => item.name === model);
    if (!installedModel)
      throw new Error(
        'Modelo não encontrado localmente. Baixe e confira o nome antes de executar.',
      );
    if (installedModel.size > limits.maxModelBytes)
      throw new Error(`Modelo excede o limite configurado de ${limits.maxModelBytes} bytes.`);
    const response = await request(`${LOCAL_OLLAMA}/api/chat`, {
      ...options,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        stream: false,
        keep_alive: '0',
        options: {
          temperature: 0,
          num_predict: limits.maxGenerationTokens,
          num_ctx: limits.contextTokens,
        },
        messages: [
          { role: 'system', content: instructions },
          { role: 'user', content: JSON.stringify({ untrustedTask: task }) },
        ],
      }),
    });
    if (!response.ok) throw new Error(`Falha na inferência local: HTTP ${response.status}.`);
    const result = responseSchema.parse(await response.json());
    return {
      status: 'generated' as const,
      specialist: id,
      inferenceExecuted: true,
      model,
      output: result.message.content,
      trusted: false,
      notice: 'Proposta gerada. Implementação, testes e revisão continuam necessários.',
    };
  } finally {
    activeInferenceCount--;
  }
}
