# Fluxo do Kanban

O [Project #5](https://github.com/users/PHnsilva/projects/5/views/1) e as issues vinculadas são a fonte operacional do fluxo. Este documento define o significado dos estados, não um retrato do conteúdo atual do quadro.

## Estados

| Estado       | Critério                                                                           |
| ------------ | ---------------------------------------------------------------------------------- |
| Backlog      | Necessidade registrada; refinamento, dependência ou decisão pode estar pendente.   |
| Pronto       | Resultado, escopo, aceite e validação estão claros; pré-requisitos disponíveis.    |
| Em andamento | Uma entrega delimitada está sendo implementada.                                    |
| Em revisão   | Há um artefato e evidências concretas aguardando revisão independente.             |
| Em validação | A revisão foi concluída; falta verificar aceite ou comportamento no ambiente-alvo. |
| Concluído    | Critérios cumpridos, integração pertinente e aceite do mantenedor registrados.     |

## Dependências e campos

Registre dependências técnicas como consumidor → pré-requisito e associe bloqueio à condição concreta de liberação. Relação, agrupador e subissue não substituem dependência. Issues podem permanecer abertas durante execução ou revisão; fechamento não deve ser automatizado por vínculo de PR ou mudança de status.

Prioridade define ordem de valor, tamanho define esforço relativo, tipo define natureza, área identifica o domínio e milestone agrupa capacidade. Nenhum desses campos substitui sprint, dependência ou prazo. Use somente campos realmente configurados no Project e labels que existam no repositório.

## Revisão e evidência

A issue contém critérios de aceite e referência a evidências. O PR identifica o incremento, sua base, dependências, validações e limites. PR aberto, checks verdes, merge ou movimentação de cartão não equivalem isoladamente a aceite. O mantenedor registra a decisão de revisão e aceitação.

Para estrutura de contribuição, consulte [política](CONTRIBUTION_POLICY.md) e [fluxo de issues/PRs](AGENT_WORKFLOW.md).
