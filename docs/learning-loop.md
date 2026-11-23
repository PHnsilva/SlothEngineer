# Ciclo de melhoria contínua

Aqui, aprendizado significa evolução operacional: instruções melhores, conhecimento com evidência e avaliações mais úteis. Alteração de pesos, fine-tuning e treinamento de modelos são atividades diferentes e não estão implementadas.

## Processo manual inicial

1. Selecionar uma deficiência observada e abrir issue com exemplo sanitizado.
2. Consultar fontes e lições aprovadas. Não enviar memória privada ou arquivos inteiros sem necessidade.
3. Definir aceite e avaliação antes de alterar instruções. Registrar baseline real.
4. Preparar plano e handoff ou consultar um especialista local. Saída de modelo é proposta.
5. Fazer uma alteração em branch própria; executar testes relevantes e comparar com baseline.
6. Solicitar revisão com diff, fonte, evidência e limites. Não aprovar o próprio PR como revisão independente.
7. Após aceite, incluir lição em `knowledge/approved.json`, com referência a evidência pública sanitizada. A memória começa vazia e o runtime não a promove sozinho.
8. Reavaliar com casos não usados na otimização. Registrar regressões e reverter quando necessário.

## Formato atual de conhecimento

Entradas possuem `id`, `title`, `content`, `status` (`reference` ou `approved`) e `sources`. `knowledge/references.json` contém decisões e referências de projeto; não representa lições validadas em produção. `knowledge/approved.json` inicia com `[]`.

No MVP, revisão, autoria e validade da lição são rastreadas pelo PR e suas fontes. M4 introduzirá schema próprio para candidato, avaliador, escopo, prazo de validade e evidência. Alterar JSON por conta própria não constitui aprovação.

## O que medir

O arquivo público `evals/routing.json` é regressão determinística do roteador. Ele não é conjunto independente de qualidade de geração, não mede inteligência e não comprova melhoria ao longo dos dias.

Para modelos, separar casos públicos de desenvolvimento/regressão e a reserva privada. O [protocolo inicial de geração](../evals/generation/README.md) valida somente os dados públicos; não produz notas ou baseline. Fazer revisão cega quando viável e registrar versões de código, instruções, modelo, dados e ambiente. Reportar resultado por caso, tamanho da amostra, falhas e custo de recursos. Não criar gráficos com valores hipotéticos apresentados como resultados.

## Pedido cotidiano sugerido

“No projeto Sofiie Agents, consulte o roadmap e as issues. Selecione uma deficiência comprovada, defina aceite, faça uma melhoria em branch própria, execute as verificações aplicáveis e abra PR com evidências. Não altere permissões, não use serviços pagos e não promova conhecimento sem revisão.”

Você pode usar esse pedido manualmente com um assistente que tenha acesso ao repositório. Não há integração automática entre uma conversa, o GitHub e o runtime. Agendamentos só serão adicionados por solicitação explícita, após validar o ciclo.
