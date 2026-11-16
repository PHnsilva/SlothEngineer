# Fluxo de trabalho com issues e pull requests

Este documento descreve o fluxo de contribuição do repositório. O estado atual de cada trabalho reside na issue, no quadro e na proposta de alteração correspondentes; esta página não replica status transitório.

## Refinamento da issue

Uma issue pronta identifica:

- problema e evidência observável;
- resultado esperado e escopo delimitado;
- critérios de sucesso e erro;
- validação e evidências requeridas;
- dependências direcionais, responsável por resolvê-las e condição de desbloqueio;
- sprint, prioridade, área e tamanho coerentes com o trabalho restante.

Se uma decisão de produto, regra de negócio ou arquitetura alterar o escopo, resolva-a antes da implementação afetada. Agrupamento e subissues não substituem uma dependência técnica.

## Branch e implementação

Use uma branch por entrega. Continue a branch existente quando a issue já tiver um PR ativo. Preserve alterações locais, commits, autoria e configuração de ambiente. Uma proposta baseada em outra branch deve registrar os SHAs, a base e a ordem de integração; valide a árvore combinada quando a alteração depender de ambos os incrementos.

A implementação deve demonstrar o comportamento solicitado. Documentos, perfis, planos, roteamento e mocks não comprovam comportamento de integração ou qualidade de inferência.

## Validação e proposta

Escolha testes que cubram os critérios, incluindo falhas e limites. Registre versões, comandos, resultados, falhas, limitações e o que ainda requer homologação. Não use checks antigos como evidência de um commit novo.

O PR referencia a issue, explica o incremento exato e declara dependências. Não inclua alterações não relacionadas, segredos ou dados privados. A revisão independente e a aceitação são etapas distintas da implementação; a mudança só é aceita quando o mantenedor autorizado registrar essa decisão.

## Estado do trabalho

Use os estados do quadro para distinguir backlog, pronto, execução, revisão, validação e aceite. Abrir PR, concluir CI, integrar código ou fechar uma issue são eventos diferentes e não devem ser tratados como prova uns dos outros.
