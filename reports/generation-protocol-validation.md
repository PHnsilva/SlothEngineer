# Preparação do protocolo de avaliação de geração

**Data:** 2026-10-31

**Issue:** [#10](https://github.com/PHnsilva/sofiie-agents/issues/10)

**Branch:** `test/10-casos-rubricas-geracao`

## Progresso

- Criados seis cenários sintéticos públicos: três para desenvolvimento e três para regressão, incluindo um adversarial de alto risco.
- Criada rubrica por critério para correção, aceite, validade dos achados, evidência, segurança e precisão de alegações sobre ações e testes.
- Definido um processo de reserva privada sob custódia inicial do proprietário do repositório. Os casos ainda não existem; não entram no Git, CI ou logs públicos.
- `npm run eval` agora confirma a integridade do conjunto público e continua distinguindo essa checagem da avaliação de respostas.
- `npm run check` local passou: formatação, tipos, 19 testes, 12 cenários de roteamento, validação estrutural de seis casos públicos e build.

## Limites e próxima ação

Nenhum modelo executou esses casos. Não há notas de respostas, baseline, comparação, ganho medido ou revisão humana da rubrica. A amostra é uma cobertura inicial qualitativa e não representa todos os perfis nem sustenta generalização estatística.

## Incremento de 2026-11-08 — cobertura do catálogo atual

- O protocolo foi continuado na branch do PR #13 sobre a base técnica do PR #22 (`f14822fcceabb149e0274a0aafe806429798d9a2`), que já passou `npm run check` e CI; o encadeamento completo continua sujeito à revisão de Pedro.
- O conjunto público passou de 6 para 24 casos sintéticos, equilibrados em 12 de desenvolvimento e 12 de regressão. Os rótulos cobrem os 23 perfis atuais e priorizam DevOps com 5 casos; validação agora falha se houver perfil desconhecido/ausente ou se outra especialidade tiver cobertura igual/maior.
- Validação local no HEAD desta revisão: `npm run check` aprovado; 25 testes passaram e 2 verificações reais de renderização foram ignoradas por ausência de Java/PlantUML; roteamento passou em 14/14; o conjunto público teve 24 casos (12 desenvolvimento, 12 regressão), 23 rótulos de perfis e 5 casos DevOps. O comando avalia estrutura e roteamento, não respostas de modelo.
- A reserva continua fora do repositório e sua preparação efetiva permanece com o proprietário/custodiante; não foi criada nem exposta nesta alteração.

O próximo passo para fechar a issue é revisar a rubrica, preparar e selar os casos privados de reserva, e então fazer uma execução local reproduzível quando o provedor e os recursos tiverem sido selecionados na etapa de inferência. A reserva não deve ser aberta ao agente nem publicada em PR.
