# Kanban do Sofiie Agents

[Abrir o quadro oficial](https://github.com/users/PHnsilva/projects/5/views/1) · [Issues](https://github.com/PHnsilva/sofiie-agents/issues)

## Estado conferido em 01/11/2026

O Project #5 foi vinculado a `PHnsilva/sofiie-agents` e recebeu 11 issues abertas reais, sem duplicar PRs como entregas. Foram salvos campos Status, Prioridade, Área e Bloqueio e visões de Kanban, backlog/dependências e revisão/validação. Issues e Project são a fonte operacional; esta documentação não replica seu estado em tempo real.

A GitHub CLI foi autenticada pelo proprietário no D: e permite operar o quadro em segundo plano. O MCP do GitHub atende às operações disponíveis de repositório/issues/PRs. Não depende de manter o Edge em primeiro plano.

## Objetivo e decisões de produto

Aprimorar diariamente as especializações atuais, definir melhor seus contratos e acrescentar outras quando houver necessidade e avaliação. Servir projetos atuais/futuros e colaborar com outros agentes. Instruções/perfis, inferência, qualidade medida e treinamento de pesos são capacidades distintas.

Escopos e sprints serão discutidos com Pedro um projeto por vez, com Velumbra por último. Nenhum compromisso semanal, prazo final, esforço ou atribuição humana foi inventado. Prioridades iniciais organizam o trabalho já conhecido e serão revisadas nessa conversa.

## Fluxo

| Fase         | Critério                                                              |
| ------------ | --------------------------------------------------------------------- |
| Backlog      | Necessidade registrada; podem faltar refinamento ou decisões.         |
| Pronto       | Escopo, aceite e validação claros; pré-requisitos disponíveis.        |
| Em andamento | Entrega selecionada; limite inicial de uma implementação por projeto. |
| Em revisão   | PR/artefato concreto e evidências disponíveis para Pedro revisar.     |
| Em validação | Revisão realizada; falta aceite no ambiente ou experiência alvo.      |
| Concluído    | Critérios, integração e aceite humano comprovados.                    |

Bloqueios preservam a fase e registram motivo, quem resolve, próxima ação e evidência de desbloqueio. O número da issue não define ordem técnica. Agrupamento/subissue não substitui dependência.

Automações de fechar issue, mover por vínculo de PR e mover por merge foram retiradas para preservar o fluxo de revisão/aceite. Fechamento manual de issue aceita pode atualizar o quadro; não usar movimento de cartão como prova de conclusão. Não há autoaprovação ou auto-merge.

## Contratos e dependências iniciais

| Issue                                                      | Pré-requisitos/decisões                                               |
| ---------------------------------------------------------- | --------------------------------------------------------------------- |
| [#1](https://github.com/PHnsilva/sofiie-agents/issues/1)   | Sem bloqueio técnico registrado; consultar o contrato atual da issue. |
| [#2](https://github.com/PHnsilva/sofiie-agents/issues/2)   | Escolher host externo e ambiente de homologação.                      |
| [#3](https://github.com/PHnsilva/sofiie-agents/issues/3)   | Bloqueada por #1, #10.                                                |
| [#4](https://github.com/PHnsilva/sofiie-agents/issues/4)   | Bloqueada por #3.                                                     |
| [#5](https://github.com/PHnsilva/sofiie-agents/issues/5)   | Bloqueada por #4.                                                     |
| [#6](https://github.com/PHnsilva/sofiie-agents/issues/6)   | Bloqueada por #4.                                                     |
| [#7](https://github.com/PHnsilva/sofiie-agents/issues/7)   | Bloqueada por #9.                                                     |
| [#8](https://github.com/PHnsilva/sofiie-agents/issues/8)   | Sem bloqueio técnico registrado; consultar o contrato atual da issue. |
| [#9](https://github.com/PHnsilva/sofiie-agents/issues/9)   | Escolher peer externo autorizado para o fluxo cliente.                |
| [#10](https://github.com/PHnsilva/sofiie-agents/issues/10) | PR #13 parcial; reserva privada e aceite do protocolo com Pedro.      |
| [#12](https://github.com/PHnsilva/sofiie-agents/issues/12) | Concluir configuração/importação e revisão do quadro.                 |

Dependências técnicas foram registradas nativamente no GitHub quando há consumo real de um pré-requisito. O campo Bloqueio destaca também decisões/impedimentos externos. As issues seguem contexto/evidência, resultado esperado, escopo, critérios de aceite, validação e dependências; o template ajuda na captura e não substitui refinamento.

Tipo usa a família `type:*` como alternativa explícita enquanto o tipo nativo não estiver configurado. Área, prioridade, tipo, marco e esforço têm propósitos distintos. Marcos existentes não são automaticamente sprints.

## MCP e retomada

MCP não exige outro repositório ou um servidor em cada aplicação. Um sistema consumidor pode usar apenas um cliente; expor ferramentas exige um servidor/adaptador somente quando houver capacidade e consumidor definidos. O Sofiie Agents já tem servidor stdio. A interface MCP fica na arquitetura do Sofiie Agents; sistemas consumidores usam cliente quando necessário. Não será criado servidor próprio no Sofiie/Velumbra nesta organização; os rascunhos separados de contexto do Sofiie/Velumbra foram retirados antes de publicação.

Consultar [AGENTS.md](../AGENTS.md) e [operação por MCP/CLI](AGENT_WORKFLOW.md). A cópia local fica em `D:\Dev\Projetos\sofiie-agents`; inventariar SDKs antes de baixar novamente e manter custo adicional zero.

Pedido de rotina: diariamente às 6h de America/Sao_Paulo, a partir de 02/11/2026, com avanço verificável, registro e PR para revisão no fim de semana. O cadastro dos novos chats e das automações é etapa posterior; este documento não o ativa.

## Bases de revisão preservadas

[PR #11](https://github.com/PHnsilva/sofiie-agents/pull/11) mantém os guias/contratos e [PR #13](https://github.com/PHnsilva/sofiie-agents/pull/13) prepara parte pública da avaliação. #10 ainda exige reserva privada e aceite do protocolo; #3 depende de #1 e #10 aceitas. Não medir qualidade de geração apenas com roteamento.

Nesta retomada o servidor existente foi exercitado por processo stdio real. O check teve 21 testes aprovados, 2 pulados por ausência de renderizador preparado e 13 casos de roteamento aprovados. Isso não comprova inferência local, aprendizado, baseline de geração ou homologação no ChatGPT.

## Decisão de integração MCP e foco das melhorias

Decisão do proprietário em 01/11/2026: Sofiie e Velumbra atuarão como hosts, cada um com seu cliente MCP, consumindo a interface servidora do Sofiie Agents. Não criar servidores próprios nem repositórios adicionais de MCP para esses dois consumidores nesta etapa.

O Sofiie Agents manterá seu servidor MCP como adaptador da própria arquitetura e também poderá atuar como host/cliente de servidores MCP externos quando uma tarefa exigir ferramentas ou recursos deles. Um agente futuro consumir as especializações do Agents usa o lado servidor do Agents; o cliente de saída só é necessário quando o Agents consome algo externo. Não ativar conexões externas sem consumidor, contrato e configuração definidos.

Priorizar nas melhorias diárias especializações com aplicação concreta nos dois produtos:

- Velumbra: interpretação contextual de perguntas e tiragens, conteúdo e diferenças entre tradições, coerência das respostas e avaliação de qualidade; complementar com interface, acessibilidade e testes.
- Sofiie: interpretação de intenções em português, diálogo por texto/voz, planejamento e seleção de ações estruturadas, integrações desktop/mobile/carro e validação de execução.
- Compartilhadas: contratos de ferramentas/MCP, QA, acessibilidade e avaliação de regressões.

Cada melhoria deve ter cenário de uso, entrada/saída, limites e evidência comparável. Especialistas novos exigem necessidade concreta; não ampliar o catálogo apenas por quantidade. Esta decisão orienta o backlog, não declara clientes integrados, inferência homologada ou rotinas agendadas.

## Próximas retomadas

[Plano diário e fila inicial](DAILY_PLAN.md). As novas issues de contrato e integração são somadas ao quadro sem redefinir estados escolhidos pelo proprietário.
