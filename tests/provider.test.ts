import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  consultSpecialist,
  getInferenceLimits,
  validateLocalModel,
} from '../src/providers/model.js';

test('handoff padrão funciona sem rede e informa que não executou inferência', async () => {
  const result = await consultSpecialist('backend', 'Revisar contrato HTTP', {}, async () => {
    throw new Error('Não deve chamar rede');
  });
  assert.equal(result.status, 'handoff');
  assert.equal(result.inferenceExecuted, false);
});
test('provedor pago e modelos cloud/remotos são bloqueados', async () => {
  await assert.rejects(
    consultSpecialist('backend', 'Revisar contrato HTTP', { SOFIIE_PROVIDER: 'paid' }),
  );
  for (const model of [undefined, 'model:cloud', 'https://example.com', 'org/model', 'foo cloud'])
    assert.throws(() => validateLocalModel(model));
});
test('limites locais têm defaults conservadores e configuração limitada', () => {
  assert.deepEqual(getInferenceLimits({}), {
    maxInputChars: 4000,
    maxModelBytes: 2_000_000_000,
    contextTokens: 4096,
    maxGenerationTokens: 256,
    timeoutMs: 60_000,
    maxConcurrentInferences: 1,
  });
  assert.deepEqual(
    getInferenceLimits({
      SOFIIE_MAX_INPUT_CHARS: '2000',
      SOFIIE_MAX_MODEL_BYTES: '6442450944',
      SOFIIE_CONTEXT_TOKENS: '2048',
      SOFIIE_MAX_GENERATION_TOKENS: '128',
      SOFIIE_TIMEOUT_MS: '120000',
      SOFIIE_MAX_CONCURRENT_INFERENCES: '2',
    }),
    {
      maxInputChars: 2000,
      maxModelBytes: 6_442_450_944,
      contextTokens: 2048,
      maxGenerationTokens: 128,
      timeoutMs: 120_000,
      maxConcurrentInferences: 2,
    },
  );
  for (const [name, value] of Object.entries({
    SOFIIE_MAX_INPUT_CHARS: '4001',
    SOFIIE_MAX_MODEL_BYTES: '-1',
    SOFIIE_CONTEXT_TOKENS: 'NaN',
    SOFIIE_MAX_GENERATION_TOKENS: '0',
    SOFIIE_TIMEOUT_MS: '120001',
    SOFIIE_MAX_CONCURRENT_INFERENCES: '5',
  })) {
    assert.throws(() => getInferenceLimits({ [name]: value }), new RegExp(name));
  }
});
test('modelo ausente não dispara geração nem fallback remoto', async () => {
  let calls = 0;
  await assert.rejects(
    consultSpecialist(
      'qa',
      'Revisar critérios de testes',
      { SOFIIE_PROVIDER: 'ollama', SOFIIE_MODEL: 'local:small' },
      async () => {
        calls++;
        return Response.json({ models: [] });
      },
    ),
    /não encontrado localmente/,
  );
  assert.equal(calls, 1);
});
test('adaptador usa somente loopback, sem redirects, e marca resposta não confiável', async () => {
  const requests: string[] = [];
  let requestOptions: RequestInit | undefined;
  const result = await consultSpecialist(
    'qa',
    'Revisar critérios de testes',
    { SOFIIE_PROVIDER: 'ollama', SOFIIE_MODEL: 'local:small' },
    async (url, options) => {
      requests.push(String(url));
      assert.equal(options?.redirect, 'error');
      if (String(url).endsWith('/api/tags'))
        return Response.json({ models: [{ name: 'local:small', size: 1_500_000_000 }] });
      requestOptions = options;
      return Response.json({ message: { content: 'Proposta de testes' }, done: true });
    },
  );
  assert.deepEqual(requests, [
    'http://127.0.0.1:11434/api/tags',
    'http://127.0.0.1:11434/api/chat',
  ]);
  assert.equal(result.status, 'generated');
  if (result.status === 'generated') assert.equal(result.trusted, false);
  assert.deepEqual(JSON.parse(String(requestOptions?.body)).options, {
    temperature: 0,
    num_predict: 256,
    num_ctx: 4096,
  });
});
test('tamanho máximo do modelo, entrada e configuração inválida falham antes de gerar', async () => {
  let generationCalls = 0;
  await assert.rejects(
    consultSpecialist(
      'qa',
      'Revisar critérios de testes',
      { SOFIIE_PROVIDER: 'ollama', SOFIIE_MODEL: 'local:large' },
      async (url) => {
        if (String(url).endsWith('/api/tags'))
          return Response.json({ models: [{ name: 'local:large', size: 2_000_000_001 }] });
        generationCalls++;
        return Response.json({ message: { content: 'Não deve gerar' }, done: true });
      },
    ),
    /limite configurado/,
  );
  await assert.rejects(
    consultSpecialist(
      'qa',
      'Este objetivo excede o limite de caracteres configurado.',
      {
        SOFIIE_PROVIDER: 'ollama',
        SOFIIE_MODEL: 'local:small',
        SOFIIE_MAX_INPUT_CHARS: '20',
      },
      async () => {
        generationCalls++;
        return Response.json({ models: [{ name: 'local:small', size: 1_000_000 }] });
      },
    ),
    /too_big/,
  );
  await assert.rejects(
    consultSpecialist(
      'qa',
      'Revisar critérios de testes',
      {
        SOFIIE_PROVIDER: 'ollama',
        SOFIIE_MODEL: 'local:small',
        SOFIIE_TIMEOUT_MS: '120001',
      },
      async () => {
        generationCalls++;
        return Response.json({ models: [{ name: 'local:small', size: 1_000_000 }] });
      },
    ),
    /SOFIIE_TIMEOUT_MS/,
  );
  assert.equal(generationCalls, 0);
});
test('respostas incompletas e HTTP inválido falham explicitamente', async () => {
  const env = { SOFIIE_PROVIDER: 'ollama', SOFIIE_MODEL: 'local:small' };
  await assert.rejects(
    consultSpecialist(
      'qa',
      'Revisar critérios de testes',
      env,
      async () => new Response(null, { status: 503 }),
    ),
  );
  await assert.rejects(
    consultSpecialist('qa', 'Revisar critérios de testes', env, async (url) =>
      String(url).endsWith('/api/tags')
        ? Response.json({ models: [{ name: 'local:small', size: 1_500_000_000 }] })
        : Response.json({ message: { content: 'Resposta parcial' }, done: false }),
    ),
  );
});
test('inferência simultânea é rejeitada e o limite é liberado após falha', async () => {
  const env = { SOFIIE_PROVIDER: 'ollama', SOFIIE_MODEL: 'local:small' };
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  const running = consultSpecialist('qa', 'Revisar critérios de testes', env, async () => {
    await gate;
    return new Response(null, { status: 503 });
  });
  await assert.rejects(consultSpecialist('qa', 'Revisar critérios de testes', env), /simultâneas/);
  release();
  await assert.rejects(running);
  assert.equal(
    (await consultSpecialist('qa', 'Revisar critérios de testes', {})).status,
    'handoff',
  );
  await assert.rejects(
    consultSpecialist(
      'qa',
      'Revisar critérios de testes',
      env,
      async () => new Response(null, { status: 503 }),
    ),
    /HTTP 503/,
  );
});
