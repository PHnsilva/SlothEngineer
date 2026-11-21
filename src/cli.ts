import { specialists } from './agents/catalog.js';
import { planTask } from './orchestrator/planner.js';
import { runTask } from './orchestrator/executor.js';
import { consultSpecialist } from './providers/model.js';
import { callPeerTool, loadPeer } from './mcp/peers.js';

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (command === 'agents') return specialists;
  if (command === 'plan') return planTask({ objective: args.join(' ') });
  if (command === 'run') {
    if (!args.length) throw new Error('Uso: npm run run -- "objetivo da tarefa"');
    if (args[0] === '--json-base64') {
      if (!args[1]) throw new Error('Informe JSON codificado em base64 após --json-base64.');
      return runTask(JSON.parse(Buffer.from(args[1], 'base64').toString('utf8')));
    }
    return runTask({ objective: args.join(' ') });
  }
  if (command === 'consult') return consultSpecialist(args[0] ?? '', args.slice(1).join(' '));
  if (command === 'peer') {
    const [id, tool, json = '{}'] = args;
    if (!id || !tool) throw new Error('Uso: npm run peer -- <peer-id> <tool> [JSON]');
    const input: unknown = JSON.parse(json);
    if (!input || typeof input !== 'object' || Array.isArray(input))
      throw new Error('Argumentos devem ser objeto JSON.');
    return callPeerTool(await loadPeer(id), tool, input as Record<string, unknown>);
  }
  throw new Error('Use agents, plan, run, consult ou peer. Consulte README.md.');
}

main()
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : 'Falha de execução.');
    process.exitCode = 1;
  });
