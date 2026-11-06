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

O próximo passo para fechar a issue é revisar a rubrica, preparar e selar os casos privados de reserva, e então fazer uma execução local reproduzível quando o provedor e os recursos tiverem sido selecionados na etapa de inferência. A reserva não deve ser aberta ao agente nem publicada em PR.
