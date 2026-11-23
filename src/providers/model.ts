import { z } from 'zod';
import { specialistInstructions, getSpecialist } from '../agents/catalog.js';

const responseSchema = z.object({
  message: z.object({ content: z.string().trim().min(1).max(32000) }),
  done: z.literal(true),
});
const tagsSchema = z.object({ models: z.array(z.object({ name: z.string() })) });
const LOCAL_OLLAMA = 'http://127.0.0.1:11434';
type Fetch = typeof fetch;
let inferenceInProgress = false;

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
  signal?: AbortSignal,
) {
  getSpecialist(id);
  const task = z.string().trim().min(5).max(4000).parse(objective);
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
  if (inferenceInProgress)
    throw new Error('Já existe uma inferência local em andamento. Aguarde a conclusão.');
  inferenceInProgress = true;
  try {
    const signalForRequest = () =>
      signal ? AbortSignal.any([AbortSignal.timeout(60000), signal]) : AbortSignal.timeout(60000);
    const options = { signal: signalForRequest(), redirect: 'error' as const };
    const tags = await request(`${LOCAL_OLLAMA}/api/tags`, options);
    if (!tags.ok) throw new Error(`Ollama indisponível: HTTP ${tags.status}.`);
    const installed = tagsSchema.parse(await tags.json());
    if (!installed.models.some((item) => item.name === model))
      throw new Error(
        'Modelo não encontrado localmente. Baixe e confira o nome antes de executar.',
      );
    const response = await request(`${LOCAL_OLLAMA}/api/chat`, {
      ...options,
      signal: signalForRequest(),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        stream: false,
        keep_alive: '0',
        options: { temperature: 0, num_predict: 1024, num_ctx: 4096 },
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
    inferenceInProgress = false;
  }
}
