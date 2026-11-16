# SlothEngineer

SlothEngineer é um sistema extensível de engenharia de software. DevOps é a prioridade inicial de especialização, preservando a missão mais ampla de desenvolver, manter e revisar software.

O runtime reúne um catálogo de competências, planejamento de tarefas, handoff opcional, adaptador local de modelo e interfaces MCP. Perfis são instruções configuráveis: sua presença não representa treinamento de pesos ou qualidade comprovada. Handoff e roteamento também não comprovam geração. Consulte os limites e o estado de cada componente antes de usá-lo.

## Começar

Requisitos: Node.js `>=24 <25`, conforme `package.json`.

```powershell
npm ci
npm run check
```

O comando de validação executa formatação, verificação de tipos, testes, avaliações incluídas e build. A aprovação desses checks valida o código coberto; não comprova qualidade de respostas de modelo nem homologação de integrações externas.

Não é necessário contratar serviços. O provedor de modelo local é opcional e depende de instalação/configuração explícita pelo operador. Não existe fallback pago/remoto.

## Interfaces e ferramentas

- O servidor MCP usa stdio. Ele não é um endpoint público.
- O cliente MCP de saída só se conecta a peers autorizados e configurados.
- O catálogo de ferramentas distingue adaptadores implementados, referências e APIs futuras; sua presença não habilita rede ou credenciais.
- A ferramenta de diagramas usa um adaptador local fixo, sem shell, executável, caminho de entrada ou URL arbitrários.

Consulte [arquitetura](docs/ARCHITECTURE_PLAN.md), [ferramentas](docs/api-catalog.md), [MCP](docs/mcp.md), [modelagem](docs/modeling.md) e [custos](docs/costs.md).

## Documentação do projeto

- [Requisitos e limites](docs/REQUIREMENTS.md)
- [Arquitetura](docs/ARCHITECTURE_PLAN.md)
- [Plano de entregas](docs/DELIVERY_PLAN.md)
- [Rastreabilidade](docs/TRACEABILITY.md)
- [Especializações](docs/SPECIALIZATIONS.md) e [catálogo detalhado](docs/specialists.md)
- [Avaliação e melhoria contínua](docs/learning-loop.md)
- [Roadmap](docs/roadmap.md)
- [Contribuição](CONTRIBUTING.md) e [política de contribuição](docs/CONTRIBUTION_POLICY.md)
- [Fluxo de issues e PRs](docs/AGENT_WORKFLOW.md)
- [Modelo do Kanban](docs/KANBAN.md)
- [Dependências e integração incremental](docs/WEEKLY_EXECUTION.md)

## Estrutura

- `src/agents/`: catálogo e seleção de especialistas.
- `src/orchestrator/`: preparação de planos e handoff.
- `src/providers/`: adaptadores de modelo.
- `src/mcp/`: servidor stdio e cliente de peers configurados.
- `src/tools/`: catálogo e adaptadores de ferramentas.
- `tests/` e `evals/`: verificações de código e casos públicos.

Avaliações públicas e testes locais não substituem revisão humana, execução real de modelo nem casos privados de reserva.
