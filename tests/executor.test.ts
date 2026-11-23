import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runTask } from '../src/orchestrator/executor.js';

const generated = (specialist: string, output: string) => ({
  status: 'generated' as const,
  specialist,
  inferenceExecuted: true,
  model: 'fixture:local',
  output,
  trusted: false as const,
  notice: 'fixture; não é inferência real',
});

test('execução direta chama uma capacidade e marca a simulação', async () => {
  const result = await runTask(
    { objective: 'Revisar pipeline DevOps', specialists: ['devops'] },
    { consult: async (specialist) => generated(specialist, 'proposta') },
  );
  assert.equal(result.status, 'completed');
  assert.equal(result.executed, true);
  assert.equal(result.subagents.count, 0);
  assert.deepEqual(
    result.stages.filter((stage) => stage.kind === 'worker').map((stage) => stage.mode),
    ['simulated'],
  );
});

test('execução composta consulta workers em sequência e mantém resultados separados', async () => {
  const order: string[] = [];
  const result = await runTask(
    { objective: 'Revisar pipeline', specialists: ['devops', 'security'], includeReviewers: false },
    {
      consult: async (specialist, objective) => {
        order.push(specialist);
        assert.equal(objective, 'Revisar pipeline');
        return generated(specialist, `resultado-${specialist}`);
      },
    },
  );
  assert.deepEqual(order, ['devops', 'security']);
  assert.deepEqual(
    result.results.map((item) => item.result.output),
    ['resultado-devops', 'resultado-security'],
  );
  assert.equal(result.status, 'completed');
});

test('handoff sem Ollama resulta em bloqueio explícito e não é geração', async () => {
  const result = await runTask({ objective: 'Revisar pipeline', specialists: ['devops'] });
  assert.equal(result.status, 'blocked');
  assert.equal(result.executed, false);
  assert.ok(result.missingDependencies.some((item) => item.includes('Ollama local')));
  assert.equal(result.results.length, 0);
  assert.equal(result.stages.find((stage) => stage.kind === 'worker')?.mode, 'handoff');
});

test('revisor recebe rascunho como dado não confiável e saída continua não confiável', async () => {
  const calls: Array<{ specialist: string; objective: string }> = [];
  const result = await runTask(
    { objective: 'Revisar pipeline DevOps', specialists: ['devops'], includeReviewers: true },
    {
      consult: async (specialist, objective) => {
        calls.push({ specialist, objective });
        return generated(specialist, specialist === 'devops' ? 'rascunho' : 'revisão');
      },
    },
  );
  assert.deepEqual(
    calls.map((item) => item.specialist),
    ['devops', 'qa', 'security'],
  );
  assert.match(calls[1]!.objective, /untrustedDrafts/);
  assert.match(calls[1]!.objective, /rascunho/);
  assert.equal(
    result.results.every((item) => item.result.trusted === false),
    true,
  );
});

test('limite de tentativas só repete erro explicitamente recuperável', async () => {
  let attempts = 0;
  const result = await runTask(
    { objective: 'Revisar pipeline', specialists: ['devops'], limits: { maxAttempts: 2 } },
    {
      consult: async (specialist) => {
        attempts += 1;
        if (attempts === 1) throw Object.assign(new Error('temporário'), { retryable: true });
        return generated(specialist, 'proposta');
      },
    },
  );
  assert.equal(result.status, 'completed');
  assert.equal(attempts, 2);
  assert.equal(result.stages.find((stage) => stage.kind === 'worker')?.attempts, 2);
});

test('cancelamento cooperativo deixa estado observável', async () => {
  const controller = new AbortController();
  const pending = runTask(
    { objective: 'Revisar pipeline', specialists: ['devops'] },
    {
      signal: controller.signal,
      consult: async (_specialist, _objective, signal) =>
        await new Promise<ReturnType<typeof generated>>((_resolve, reject) => {
          signal.addEventListener('abort', () => reject(signal.reason), { once: true });
        }),
    },
  );
  controller.abort(new DOMException('cancelled', 'AbortError'));
  const result = await pending;
  assert.equal(result.status, 'cancelled');
  assert.equal(result.stages.find((stage) => stage.kind === 'worker')?.status, 'cancelled');
});

test('checkpoint de chamada parcial retoma como dado não confiável', async () => {
  const first = await runTask(
    { objective: 'Revisar pipeline', specialists: ['devops'] },
    { consult: async (specialist) => generated(specialist, 'rascunho parcial') },
  );
  const resumed = await runTask(
    { objective: 'Revisar pipeline', specialists: ['devops'], resume: first.checkpoint },
    {
      consult: async () => {
        throw new Error('não deveria repetir etapa recuperável');
      },
    },
  );
  const worker = resumed.stages.find((stage) => stage.kind === 'worker');
  assert.equal(resumed.status, 'completed');
  assert.equal(worker?.mode, 'checkpoint_untrusted');
  assert.equal(worker?.result?.trusted, false);
  assert.equal(resumed.executed, false);
});

test('duas requisições simultâneas mantêm IDs e resultados isolados', async () => {
  const consult = async (_specialist: string, objective: string) => {
    await new Promise((resolve) => setTimeout(resolve, objective.includes('A') ? 15 : 1));
    return generated('devops', `resultado-${objective}`);
  };
  const [a, b] = await Promise.all([
    runTask({ objective: 'Revisar pipeline A', specialists: ['devops'] }, { consult }),
    runTask({ objective: 'Revisar pipeline B', specialists: ['devops'] }, { consult }),
  ]);
  assert.notEqual(a.taskId, b.taskId);
  assert.equal(
    a.results.find((item) => item.stageId === 'worker:devops')?.result.output,
    'resultado-Revisar pipeline A',
  );
  assert.equal(
    b.results.find((item) => item.stageId === 'worker:devops')?.result.output,
    'resultado-Revisar pipeline B',
  );
});

test('entrada desconhecida, contexto acima do teto e limite insuficiente falham fechados', async () => {
  await assert.rejects(runTask({ objective: 'Revisar pipeline', shell: 'whoami' }));
  const tooManyStages = await runTask({
    objective: 'Revisar pipeline',
    specialists: ['devops', 'security', 'qa'],
    includeReviewers: true,
    limits: { maxSteps: 2 },
  });
  assert.equal(tooManyStages.status, 'failed');
  assert.equal(tooManyStages.executed, false);
});

test('diagrama sintético é identificado como simulação; falta do renderizador bloqueia', async () => {
  const input = {
    objective: 'Renderizar diagrama UML local',
    capability: 'render-diagram' as const,
    diagramSource: '@startuml\nAlice -> Bob: ping\n@enduml',
  };
  const simulated = await runTask(input, { render: async () => Buffer.from('fixture') });
  assert.equal(simulated.status, 'completed');
  assert.equal(simulated.stages.find((stage) => stage.kind === 'tool')?.mode, 'simulated');
  const unavailable = await runTask(input);
  assert.equal(unavailable.status, 'blocked');
  assert.ok(unavailable.missingDependencies.length > 0);
});

test('timeout de tarefa cancela renderização cooperativa', async () => {
  const input = {
    objective: 'Renderizar diagrama UML local',
    capability: 'render-diagram' as const,
    diagramSource: '@startuml\nAlice -> Bob: ping\n@enduml',
    limits: { timeoutMs: 100 },
  };
  const result = await runTask(input, {
    render: async (_source, _format, signal) =>
      await new Promise<Buffer>((_resolve, reject) => {
        signal?.addEventListener('abort', () => reject(signal.reason), { once: true });
      }),
  });
  assert.equal(result.status, 'timed_out');
  assert.equal(result.stages.find((stage) => stage.kind === 'tool')?.status, 'cancelled');
});
