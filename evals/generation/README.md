# Avaliação de qualidade de geração

Este protocolo separa a qualidade da resposta do roteamento determinístico. Validar os arquivos aqui não executa um modelo, não avalia uma resposta e não produz baseline.

## Conjuntos

`cases.public.json` contém seis cenários sintéticos que podem ser lidos por quem desenvolve instruções. Três ficam no conjunto de desenvolvimento, três no conjunto público de regressão. Há casos de requisitos, revisão baseada em evidência, decomposição de issue, modelagem, fronteira adversarial e relato de validação. Isso é uma amostra inicial de cobertura, não uma amostra estatística nem representação de todos os 25 perfis.

Os casos públicos podem contaminar uma comparação se forem usados para ajustar instruções e depois chamados de teste independente. Registre cada alteração de caso e instrução. Não mova um caso entre partições para melhorar resultados.

### Reserva

Não há casos de reserva neste repositório nem baseline de geração. O responsável pela reserva é o proprietário do repositório, como custodiante inicial. Antes da baseline, ele deve criar casos sintéticos novos, revisar critérios e manter conteúdo, prompts e respostas de reserva fora do Git público, por exemplo em `.local/evals/reserve/`, que é ignorado pelo Git. Registre a revisão e o hash do conjunto em avaliação local; não publique o hash se facilitar tentativa de adivinhar o conteúdo. O conjunto só pode ser aberto depois de congelar código, instruções e critérios da comparação. Repor, editar ou reclassificar um caso consumido exige registrar a mudança e preparar uma nova reserva. Nenhum dado pessoal real deve entrar no conjunto.

O executor da baseline não precisa ser o custodiante. O custodiante controla acesso e libera apenas a decisão e evidência necessárias. Uma cópia de reserva em PR, issue, CI, logs ou resposta pública deixa de ser reserva.

## Aplicação da rubrica

Avalie cada critério do `rubric.json` usando `met`, `partial`, `not_met`, `not_observable` ou `not_applicable`. Para cada classificação, guarde uma justificativa curta que aponte para trecho da resposta e evidência de entrada. Uma falha explícita ou falha crítica não pode ser compensada por outros critérios. Mantenha avaliações discordantes; um segundo revisor registra a decisão de adjudicação sem sobrescrever a primeira.

Exemplo didático, deliberadamente fictício e excluído de qualquer conjunto ou resultado: evidência informa que paginação não foi inspecionada; uma resposta hipotética afirma “a paginação já foi testada”. Classifique `evidence` e `claim_accuracy` como `not_met`, cite a afirmação e o registro de entrada, e sinalize a condição de falha do caso. Essa frase foi escrita apenas para explicar a rubrica; não veio de modelo, experimento ou usuário e não conta como baseline.

Preencha `assessment-template.json` uma vez por caso e por resposta. Use referências locais ou hashes para artefatos de resposta; não copie conteúdo privado, tokens ou dados pessoais para o Git. Registre modelo/provedor, revisão de código/instruções/conjunto, configuração, ambiente e avaliador para permitir reprodução. Se um dado não existir, escreva `unknown` na cópia preenchida e descreva a limitação em vez de inferi-lo.

## Comparação e reporte

1. Congele versão do conjunto, código, instruções e configuração antes de executar.
2. Faça desenvolvimento com casos públicos e reserve a partição privada para a comparação final.
3. Mantenha entrada, ambiente e configuração iguais entre versões; registre falhas, tempo e recursos quando medidos.
4. Quando possível, o avaliador não deve saber qual versão produziu cada resposta. Revele a correspondência somente após registrar notas independentes.
5. Reporte por critério e caso: numerador, denominador, `not_observable`, falhas críticas, discordâncias e limitações. Com amostra pequena, descreva casos em vez de afirmar uma porcentagem de ganho generalizável.
6. Qualquer alteração no conjunto de reserva invalida comparações anteriores que o usaram. Não promova lições para `knowledge/approved.json` a partir de uma execução sem revisão humana.

Este processo não estabelece qualidade certificada ou conformidade. A página do [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) informa que a versão 1.0 está em revisão (consulta em 2026-10-31). Use o framework voluntário como vocabulário de gestão de risco e reconfirme a versão quando ampliar o protocolo.

## Situação inicial

- Dados públicos: seis casos sintéticos validados estruturalmente.
- Reserva: ainda não criada; o proprietário do repositório é o custodiante inicial e precisa revisar os casos antes da baseline.
- Execução de modelo: nenhuma.
- Baseline, comparação e aceite humano da rubrica: pendentes.
- O comando `npm run eval` valida a regressão de roteamento e a integridade dos dados públicos; não pontua geração.
