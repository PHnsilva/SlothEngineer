# Guia geral de contribuição

Adapte este documento às decisões locais antes de adotá-lo como regra. Confirme branch padrão, comandos, proteções e responsáveis reais. Não copie exceções administrativas ou convenções de outro repositório.

## Antes de trabalhar

Leia objetivo, escopo, requisitos, arquitetura/contratos existentes, instruções para agentes e a issue concreta. Confira alterações locais, base remota, PRs em andamento e dependências. Preserve autoria e trabalho que não fazem parte da entrega.

Use uma [issue executável](ISSUES.md). Se a necessidade ainda não existir, verifique se é nova entrega, decisão prévia ou parte inseparável de uma issue. Divida por resultado e dependência, sem esconder execução independente em checklist.

## Definição e refinamento da issue

Uma contribuição começa por um problema ou oportunidade confirmado, não por uma tecnologia que se queira inserir. Descreva contexto, fonte e estado atual; o resultado que muda; limites; critérios de aceite; validação e dependências. Anexe passos para reproduzir quando for defeito. Para investigação, defina a pergunta e o artefato que libera uma decisão, em vez de “estudar o assunto”.

O título deve expressar ação e resultado. “Manter a sessão após recarregar a página” é mais informativo que “Melhorar autenticação”. A numeração local, quando adotada, serve a rastreabilidade e não determina ordem de execução. Preserve a convenção vigente antes de renomear itens de outra equipe.

| Metadado       | Como preencher                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------- |
| Tipo           | Natureza real do trabalho, usando campo nativo quando disponível; fallback documentado quando não |
| Labels         | Categorias úteis e não contraditórias, como área/domínio/risco, conforme o vocabulário do projeto |
| Prioridade     | Impacto, urgência, risco e trabalho que a entrega desbloqueia                                     |
| Esforço        | Estimativa argumentada na unidade acordada, com incertezas; não confundir com prioridade          |
| Responsável    | Quem assumiu a execução; revisão e aceite precisam de responsáveis próprios quando exigidos       |
| Marco/iteração | Capacidade, versão ou cadência adotada; data somente quando realmente acordada                    |
| Estado         | Status do fluxo atual e suas condições; não duplicar manualmente em vários lugares                |

Inclua apenas os campos úteis e disponíveis. Um template vazio ou preenchido com instruções não é uma issue refinada. Automações não corrigem classificação inadequada nem demonstram que o aceite foi cumprido.

## Divisão, dependências e seleção

Separe entregas que podem ser aceitas isoladamente ou que precisam de execução/revisão/bloqueio próprios. O corte deve manter resultado verificável. Evite uma única issue com grandes tarefas escondidas, mas também não fragmente uma entrega em arquivos sem valor ou contrato testável.

Registre dependências na direção correta: a consumidora fica bloqueada pelo pré-requisito. Explique o artefato consumido, quem o entrega e como verificar que está disponível. Use relação nativa quando existir e descreva o motivo. “Relacionada a”, agrupador e subissue são organização, não bloqueio automático.

Selecione trabalho pronto para execução: aceite compreendido, decisões essenciais respondidas e dependências necessárias verificadas. Um item pode avançar parcialmente com contrato estável, desde que a parte entregue seja explícita e o aceite final continue aberto. Documente bloqueios com responsável, próxima ação e condição de liberação.

## Quadro e capacidade

Defina um fluxo proporcional ao projeto e à metodologia adotada. Estabeleça o que permite entrar/sair de cada estado, quem revisa/aceita e quanto trabalho simultâneo a equipe comporta. Um quadro de cartões não obriga a adotar uma metodologia específica.

Mantenha uma fonte oficial para o status. Use visões sobre os mesmos itens para backlog, prontos, responsáveis, bloqueios, revisão e marcos. Não duplique a entrega ao contar issue e PR como dois trabalhos concluídos. Inspecione automações: merge pode liberar uma etapa de validação em vez de mover diretamente para Done.

## Branches e commits

Trabalhe em branch própria a partir da base atualizada, conforme a política do repositório. Não presuma `main` ou `master`. Não force push em branch alheia e não descarte alterações para conseguir uma árvore limpa.

Quando o projeto não tiver convenção, uma opção é `tipo/numero-da-issue-resumo-curto`, como `fix/42-restaurar-sessao`. Tipos usuais: `feat`, `fix`, `docs`, `refactor`, `test` e `chore`. Não inclua sprint ou uma segunda sequência sem convenção explicitamente adotada.

Faça commits por mudança lógica. Mensagens precisam explicar a alteração. Se o projeto adotar Conventional Commits, use `tipo(escopo): resumo`, com escopo opcional. Registre motivo/impacto no corpo quando necessário. Não invente autoria, coautoria, testes ou números de issue.

## Validação

Escolha testes pelo risco e pelos critérios de aceite. Execute checks locais aplicáveis; interface exige estados reais, responsividade e acessibilidade; contratos exigem casos válidos e negativos; integrações exigem evidência de recebimento/processamento quando isso faz parte do aceite.

Documente ambiente e limitações. Diferencie mock, teste isolado, integração real e aceite. Testes escritos não equivalem a testes aprovados. Preserve evidências sanitizadas, sem segredos ou informações pessoais desnecessárias.

## Pull request e revisão

Explique problema, comportamento resultante, escopo, issue, dependências, validação e limites. PR parcial referencia a issue sem fechá-la; fechamento automático fica para a entrega final quando compatível com o procedimento local.

Prefira PR independente sobre a branch padrão. Se houver PRs empilhados, declare base, ordem e dependência; o diff deve mostrar somente o incremento. Após atualização, conflito resolvido ou novo push, confira o HEAD atual e repita as verificações afetadas.

Em equipe, obtenha a revisão independente exigida. Em projeto solo, siga a decisão documentada do proprietário para revisar e integrar. Não apresente revisão do próprio autor ou de seu agente como aprovação independente. Exceções precisam ser explícitas, limitadas e rastreáveis.

## Checklist de entrega do PR

- Problema, resultado e issue estão claros para quem não participou da conversa.
- Escopo e exclusões permitem distinguir incremento de pendência.
- Contratos de API, dados, configuração e permissões alterados são identificados quando aplicável.
- Dependências entre issues/PRs e ordem de integração estão explícitas.
- Testes executados têm comando, resultado e ambiente; mocks e verificações pendentes são identificados.
- Interface/documento/diagrama foi inspecionado no formato e ambiente que fazem parte do aceite.
- Riscos de regressão, recuperação e migração são tratados conforme a mudança.
- O estado atual do HEAD, comentários e conflitos foi conferido antes de solicitar revisão.

Essa lista é de verificação do mesmo artefato, não um substituto de issues independentes.

## Organização da documentação

Mantenha instruções de execução/configuração no README e detalhes de contratos/decisões no local adotado. Contribuição explica como colaborar; AGENTS orienta o comportamento de assistentes; issues descrevem entregas concretas; o Project representa o fluxo. Referencie a fonte oficial em vez de duplicar regras contraditórias.

Código, documentação e exemplos precisam evoluir juntos quando um contrato muda. Remova afirmações antigas ou marque seu caráter histórico. Diagramas mantêm fonte editável e versão renderizada quando útil, com revisão do significado e da legibilidade.

Ferramentas externas exigem avaliação de licença, dados, credenciais, custo, limites e tratamento de falhas. Referências educacionais ficam identificadas e separadas dos adaptadores executáveis. A decisão de adicionar um serviço ou arquitetura deve ser proporcional ao problema, não consequência de existir um exemplo pronto.

## Integração e aceite

Quem integra deve ter autorização e conferir critérios, diff atual, comentários, conflitos e checks. Merge não substitui homologação ou implantação quando exigidas. Não feche a issue nem mova para Done sem cumprir o aceite do projeto.

Agentes não fazem merge, autoaprovação, publicação, gasto ou ampliação de permissões por inferência a partir deste modelo geral. As autorizações específicas do proprietário e as regras locais definem essas ações.

Relatórios pessoais só podem registrar trabalho real informado ou comprovado. Cada pessoa mantém sua própria contribuição e autoria. Nunca invente reuniões, participação, datas, horas ou aceite.

Referências de convenções opcionais: [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow) e [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Não são uma metodologia de gestão universal.
