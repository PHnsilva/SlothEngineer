# Retomada vigente

Ler [EXECUTION_PLAN.md](EXECUTION_PLAN.md), [DELIVERY_PLAN.md](DELIVERY_PLAN.md) e [WEEKLY_EXECUTION.md](WEEKLY_EXECUTION.md). Estas são as instruções atuais de execução e dependências, substituindo prioridades e armazenamento históricos abaixo.

# Retomada diária e fonte operacional

Leia AGENTS, REQUIREMENTS, ARCHITECTURE_PLAN, DELIVERY_PLAN, TRACEABILITY e a issue/PR atual. O quadro vivo, comentários e instruções mais recentes de Pedro prevalecem sobre fotografias antigas.

Meta mínima: 1 L equivalente (8 unidades) por dia deste projeto quando a rotina estiver ativa. Na rotina dos cinco agentes, a meta vale individualmente, totalizando 40 unidades; um projeto não compensa outro. Registrar bloqueios e continuar trabalho independente autorizado sem inventar progresso.

DevOps prioritário; conferir PR #22/#20 antes de repetir adequação dos 23 especialistas. Outros especialistas continuam evoluindo com menor prioridade. Contratos históricos #15/#16/#17 e A2A #7 foram identificados para reavaliação fora do ciclo; não fechar/descartar PRs por conta própria.

Uma implementação por projeto de cada vez. Usar issue definida e branch/PR; validar critérios e distinguir produzido, testado, integrado e aceito. Somente Pedro revisa/aprova PRs e aceita issues. Respeitar agenda efetiva do aplicativo e pausas. Este documento não cria/reativa rotina.

Tudo no C:, incluindo ferramentas, modelos, dependências, downloads, caches e artefatos; D: é biblioteca de jogos. Custos adicionais não estão autorizados. Não publicar dados pessoais, credenciais ou reserva privada.

SlothGeo é outro projeto com início só em 21/11/2026, não um sexto agente desta rotina. Não antecipar sua implementação/backlog de produto.

Execução semanal: ler [WEEKLY_EXECUTION.md](WEEKLY_EXECUTION.md). Espera de revisão/merge não deve impedir PRs dependentes sobre artefatos já disponíveis e tecnicamente validados, com base/ordem explícitas.

<details>
<summary>Registro anterior preservado — histórico, não operacional</summary>

# Plano diário — Sofiie Agents

## Objetivo do próximo ciclo

Preparar especializações consumíveis e avaliáveis para os dois produtos, começando pelos contratos e pela prontidão do ambiente. O objetivo não é aumentar o número de perfis: é tornar a contribuição útil e verificável.

## Fila inicial, revista com o estado vivo

1. [#15 Intenção e planejamento para Sofiie](https://github.com/PHnsilva/sofiie-agents/issues/15): mapear ai/desktop/interoperability e definir contrato de proposta de ação/diálogo, sem executar ações. Voz, áudio, STT/TTS e interação falada pertencem ao agente externo previsto; transcrição pode ser entrada textual, sem perfil ou integração interna de voz disponível.
2. [#16 Interpretação para Velumbra](https://github.com/PHnsilva/sofiie-agents/issues/16): contrato de pergunta, tradição, cartas/posições e interpretação, com conteúdo editorial identificado e sorteio fora do modelo.
3. [#10 Casos/rubricas](https://github.com/PHnsilva/sofiie-agents/issues/10): manter os casos já propostos no PR #13 e acrescentar os cenários dos consumidores conforme contratos. Reserva privada não deve ficar acessível ao agente otimizado.
4. [#1 Viabilidade local](https://github.com/PHnsilva/sofiie-agents/issues/1) e [#2 Host externo](https://github.com/PHnsilva/sofiie-agents/issues/2): inventariar recursos e homologar comunicação real; não baixar um modelo antes de selecionar tamanho/licença e compatibilidade.
5. [#3 Baseline](https://github.com/PHnsilva/sofiie-agents/issues/3) e [#4 Melhoria](https://github.com/PHnsilva/sofiie-agents/issues/4): só após seus pré-requisitos aceitos. Homologação outbound #9 continua condicional a peer e necessidade reais.

Essa é a seleção inicial aprovada por finalidade; respeitar alterações de Pedro no Kanban. Não impor dependência entre #15 e #16. Contrato e preparação de avaliação podem avançar sem modelo instalado; qualidade de geração não pode ser medida sem execução real e protocolo aceito.

## Saída do ciclo de preparação

Contratos dos dois consumidores versionados para revisão, matriz de perfis/lacunas e cenários rastreáveis à avaliação; estado do ambiente/homologação explícito. Aceitar esses artefatos libera o desenho das ferramentas especializadas e dos clientes; não equivale a consumidores integrados.

Os marcos M0–M5 continuam agrupando capacidades. As datas dos sprints e os compromissos de escopo serão definidos com Pedro, sem converter os marcos automaticamente em semanas. Interfaces, acessibilidade e QA são revisão transversal, não novos perfis por produto.

## Rotina acordada

Executar diariamente às 6h de America/Sao_Paulo, a partir de 02/11/2026, no mesmo chat do projeto. Hoje, 01/11, organizar e documentar; não antecipar implementação de produto. O registro deste arquivo não cria a automação: conferir o agendamento efetivo no aplicativo.

Cada retomada lê AGENTS, README, issue e PRs atuais, considera as mudanças de Pedro no Kanban e seleciona uma entrega pequena e desbloqueada. Preservar branches/autoria e trabalho em andamento. Preferir MCP do GitHub para operações suportadas e CLI para Projects, sem depender do Edge. Uma implementação por projeto de cada vez.

Progresso significa resultado novo e verificável: código/contrato/evidência que satisfaz um critério ou resolve uma decisão necessária. Registrar data/fuso, issue, branch/PR e SHA, o que mudou, como foi validado, limites, bloqueios e próximo passo. Não criar PR vazio nem repetir diagnóstico como avanço. Abrir PR quando houver alteração concreta; ao continuar uma entrega, preservar seu PR e documentar o incremento diário.

Revisão/aceite por Pedro no fim de semana, inclusive quando o dia da rotina cair no fim de semana. Não fazer autoaprovação, auto-merge ou deploy. Em PR empilhado declarar a base e a ordem; não trabalhar sobre dependência aberta como se estivesse aceita.

Trabalhar no D:, inventariar antes de baixar ferramentas/modelos, respeitar versões e registrar limitações do disco lento. Gasto adicional R$ 0. Não publicar chaves, conversas reais ou casos de reserva. Com bloqueio, registrar motivo, quem resolve, próxima ação e evidência de desbloqueio; avançar uma parte independente autorizada.

## Uso de especializações e MCP

Sofiie e Velumbra serão hosts com clientes MCP dentro de suas arquiteturas. Sofiie Agents mantém o servidor como adaptador de seu núcleo e o cliente de saída já existente; a conexão de saída só é usada com necessidade e peer definidos. Não criar novos servidores/repositórios para os consumidores, nem conectar o Agents a um servidor de produto inexistente.

O servidor atual do Agents usa stdio e o modo padrão handoff não executa inferência. Backend remoto do Sofiie/Vercel não alcança um processo no PC por stdio. A topologia e o transporte devem ser definidos/validados antes da integração final, sem contratar hospedagem. Um cliente de teste, SDK instalado ou PR aberto não comprova interpretação especializada em produção.

Priorizar especialistas e avaliações que ajudem nos dois produtos. Primeiro, contrato de entrada/saída, contexto, limites e rubrica; depois baseline real e melhoria comparada. Reutilizar perfis adequados e propor especialização nova apenas por lacuna demonstrada. Não chamar mudança de prompt, roteamento ou mock de treinamento de pesos ou ganho medido.

</details>
