# Dependências técnicas e integração incremental

O fluxo pode desenvolver uma entrega dependente enquanto seu predecessor aguarda revisão humana, desde que o artefato necessário esteja disponível em um commit identificável e tenha validação técnica suficiente para o consumidor. Isso libera uso provisório; não representa aprovação, aceite ou integração final.

## Evidência necessária para consumir um predecessor

Antes de depender de outro PR ou branch:

1. Inspecione o diff, comentários, estado dos checks e HEAD atual do predecessor.
2. Confirme que o contrato ou comportamento requerido existe nesse commit e cobre a necessidade do consumidor.
3. Registre no PR dependente o SHA, a branch/base, a limitação do uso provisório e a ordem de integração.
4. Valide a árvore combinada no HEAD atual, além dos testes específicos do novo incremento.
5. Atualize a base do PR dependente após a integração do predecessor e repita os checks aplicáveis.

Um título, promessa, issue refinada, documentação futura, mock ou status de revisão não comprova que o artefato esteja implementado. Se a evidência não satisfizer o contrato, mantenha o consumidor bloqueado e registre o critério concreto de desbloqueio.

## Revisão, integração e aceite

Revisão técnica, aprovação, merge, validação de produto e aceite da issue são estados separados. A integração final segue a ordem das dependências e cabe ao mantenedor autorizado. Não feche uma issue para remover um bloqueio visual. Checks aprovados só valem para os SHAs efetivamente testados e não substituem homologação do consumidor.

## Continuidade diante de bloqueios

Registre a condição externa, a pessoa ou papel responsável, a evidência necessária para desbloquear e a próxima ação. Continue trabalho independente que não dependa do artefato indisponível. Não duplique o incremento já existente em outra branch ou PR.
