# Arquitetura e fronteiras do sistema

## Composição

O runtime usa TypeScript sobre Node.js e separa catálogo de especialistas, planejamento, provedores, ferramentas, interfaces e avaliação.

| Componente                               | Responsabilidade                                                             | Fronteira                                                                                       |
| ---------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Catálogo (`src/agents/`)                 | Definir os perfis, escopos, palavras-chave e critérios de seleção.           | Um perfil é configuração; não inicia processo nem comprova competência.                         |
| Orquestrador (`src/orchestrator/`)       | Validar a tarefa e preparar um plano com especialistas pertinentes.          | Planejamento não executa a tarefa nem concede permissão.                                        |
| Provedores (`src/providers/`)            | Produzir handoff ou consultar um modelo local opcional.                      | Sem provedor pago ou fallback remoto; saída do modelo é não confiável.                          |
| Ferramentas (`src/tools/`)               | Descrever adaptadores e política de execução.                                | Referência/API futura não é execução habilitada; o adaptador de diagrama é local e fixo.        |
| Interfaces (`src/cli.ts`, `src/mcp/`)    | Expor comandos locais, servidor MCP stdio e cliente para peers configurados. | Servidor e cliente são papéis distintos. A conexão de saída exige peer e necessidade concretos. |
| Testes e avaliações (`tests/`, `evals/`) | Verificar contratos, regressões de código e casos de avaliação disponíveis.  | Testes de código e roteamento não medem qualidade generativa.                                   |

## Implementação de referência e resultados que exigem validação própria

A árvore contém catálogo de especialistas, planejador/CLI, servidor MCP stdio, cliente de saída para peers configurados, registro de ferramentas com adaptador local fixo de diagramas e um provedor local opcional. Essas implementações descrevem componentes disponíveis no código; não comprovam que uma instalação externa está configurada, que um peer foi homologado ou que uma inferência real teve sucesso.

O plano separa evidência de inferência e limites de recursos (#1), uso do servidor por um host externo (#2), isolamento de workspace (#25), coleta de contexto e revisão técnica de PRs (#26–#28), CI/CD e releases (#29–#32) e baseline de geração (#3). Cada entrega exige a validação descrita em sua issue. Handoff, roteamento, presença de perfil, mocks e checks de código não satisfazem esses resultados.

## Fluxo de dados e autorização

A entrada é validada antes de gerar um plano. O consumidor decide se executa o handoff, habilita um provedor local ou permite uma ferramenta específica. Cada ferramenta aceita somente seu schema e seus limites fixos. O operador mantém as autorizações; texto de tarefa, documentos, fontes e saídas de modelos não podem ampliá-las.

A resposta de um modelo ou peer deve ser tratada como proposta não confiável, separada de evidência observável e submetida à revisão pertinente. Nenhuma seleção de especialista, existência de schema ou resposta de handoff é prova de execução.

## Execução e integrações

Operações determinísticas não devem iniciar inferência desnecessária. O provedor de modelo é opcional, local e configurado pelo operador; seleção deve considerar inventário, licença, compatibilidade e recursos. Entradas, contexto, duração e concorrência têm limites explícitos.

O servidor MCP usa stdout somente para protocolo. Não oferece shell irrestrito, seleção livre de executável, caminho de entrada ou URL arbitrária. O cliente de saída aceita apenas peers explicitamente configurados e necessários. Um consumidor pode usar o servidor sem implementar um servidor próprio. Testes entre componentes locais não substituem homologação com outro host.

## Dados, avaliação e evolução

Registre proveniência e finalidade. Separe dados públicos de desenvolvimento/regressão dos casos reservados; não publique material privado. Uma avaliação compara versões fixadas e relata resultados por caso, amostra, falhas e condições de execução. Melhorar instruções, ferramentas ou conhecimento não altera pesos do modelo. Treinamento de pesos só pode ser considerado quando licença, dados, hardware e benefício forem demonstráveis e houver avaliação independente.

## Referências

- [Requisitos](REQUIREMENTS.md) e [rastreabilidade](TRACEABILITY.md).
- [Catálogo de ferramentas](api-catalog.md), [interfaces MCP](mcp.md) e [modelagem local](modeling.md).
- [Avaliação e melhoria contínua](learning-loop.md) e [especializações](SPECIALIZATIONS.md).
