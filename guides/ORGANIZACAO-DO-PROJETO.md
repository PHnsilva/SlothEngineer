# Organização de projetos individuais e em equipe

## 1. Definir o contexto antes do processo

Registre problema, público, objetivo, escopo, restrições, critérios de sucesso e limites de custo. Identifique o que já existe e o que ainda depende de decisão. Escolha o processo de trabalho adequado ao contexto; este guia não prescreve Scrum, Kanban ou outra metodologia.

Defina onde vivem requisitos, decisões, contratos, planejamento e evidências. Evite duplicar uma regra em vários arquivos sem indicar a fonte oficial. Documentos explicam decisões; issues representam trabalho; PRs representam alterações concretas; o quadro mostra o fluxo dos mesmos itens.

## 2. Acordo local mínimo

| Decisão                      | O que registrar                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Responsáveis                 | Quem prioriza, executa, revisa, aceita e integra                                  |
| Planejamento                 | Como o projeto seleciona trabalho e revê prioridades                              |
| Trabalho pronto para começar | Informação, dependências e decisões mínimas necessárias                           |
| Trabalho concluído           | Aceite, integração, evidências e validação exigidos                               |
| Versionamento                | Branch padrão real, convenções de branch/commit e estratégia de merge             |
| Revisão                      | Quem pode aprovar, se aprovação fica inválida após novo push e quem pode integrar |
| Quadro                       | Status, campos, limites de trabalho simultâneo e automações efetivas              |
| Metadados                    | Tipos, labels e unidade de estimativa adotados                                    |
| Permissões                   | O que humanos e agentes podem fazer sem autorização adicional                     |
| Referências                  | Como consultar, atualizar e registrar fontes e licenças                           |

Não transforme campos desconhecidos em fatos. Se uma proteção ou campo não puder ser verificado, registre “não verificado” e a consequência prática.

## 3. Solo e equipe

Em equipe, reserve revisão independente conforme o acordo local, respeite autoria e não altere branch alheia sem autorização. Administrar um repositório não torna qualquer mudança pronta para merge.

Em projeto solo, a mesma pessoa pode executar e aceitar. Defina explicitamente o procedimento: revisão do diff, testes por risco, conferência do resultado e decisão de integração do proprietário. Não invente aprovação independente onde ela não existe. Um agente que gerou a alteração não representa outro responsável humano.

Agentes ajudam a executar trabalho autorizado. Não são responsáveis legais, não assumem compromissos pessoais e não podem ampliar as próprias permissões. A autorização de uso de IA não implica autorização de merge, implantação, gasto, captura de dados pessoais ou envio de mensagens.

## 4. Planejar por resultados e dependências

Use [issues](ISSUES.md) com resultado observável, escopo limitado e evidência de aceite. Primeiro descubra decisões e contratos que liberam trabalho; depois organize consumidores dessas entregas. Número, sprint, prioridade, área e ordem no quadro não substituem dependências.

Separe atividades que precisam de responsável, revisão, ambiente ou momento de execução próprio. Mantenha checklist somente para critérios e passos inseparáveis da mesma entrega. Um item agrupador ajuda na navegação; não é, por isso, um bloqueador técnico.

Marcos indicam capacidades ou entregas e não precisam ter datas inventadas. Se houver iterações, use as definidas pelo projeto. Não chame um marco de sprint apenas para preencher um campo.

## 5. Acompanhar e melhorar

Mantenha uma fonte oficial do fluxo, como o [Project](PROJECTS.md). Revise itens envelhecidos, bloqueios sem responsável e trabalho em excesso antes de iniciar mais tarefas. Meça somente quando a informação ajudar a decidir: tempo de entrega, itens concluídos, retrabalho, incidentes ou critérios de qualidade.

Não use número de commits, linhas, issues, PRs ou arquivos como prova isolada de produtividade, competência ou melhoria de IA. Registre o que mudou, por que mudou, como foi validado e o que continua pendente.

Faça retrospectivas ou revisões de processo no formato adotado pela equipe. Mude uma regra quando houver motivo e comunique o efeito, sem trocar silenciosamente a metodologia em vigor.
