# Plano de entrega — cinco sprints + validação extra

Cada sprint dura até uma semana de execução deste projeto. S1–S5 entregam funcionalidades e S6 concentra validação extra/mudanças; verificar desde S1. Números de sprint são locais: uma dependência entre projetos pode exigir espera e não se resolve apenas porque ambos estão na mesma S2. Início/pausas vigentes prevalecem; não há datas finais garantidas por documentação.

| Sprint | Objetivo                         | Unidades estimadas | Média diária para até 7 dias |
| ------ | -------------------------------- | ------------------ | ---------------------------- |
| S1     | Requisitos e especializações     | 28                 | 4.0                          |
| S2     | Inferência e ferramentas seguras | 32                 | 4.57                         |
| S3     | DevOps e revisão técnica         | 44                 | 6.29                         |
| S4     | Avaliação e conhecimento         | 48                 | 6.86                         |
| S5     | Piloto e melhoria contínua       | 32                 | 4.57                         |
| S6     | Validação extra e mudanças       | 24                 | 3.43                         |

A soma abaixo inclui entregas ainda em revisão, para rastrear o escopo total; não é esforço restante certificado. Conferir o que já foi produzido e aceito antes de selecionar nova implementação. A meta diária é 1 L equivalente por projeto ativo; não recontar issue/PR/agrupador como a mesma entrega.

## S1 — Requisitos e especializações

| Issue                                                                   | Entrega                                                                  | Tamanho | Bloqueada por                                                           |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------------- |
| [SlothEngineer#23](https://github.com/PHnsilva/SlothEngineer/issues/23) | Padronizar issues, tamanhos e contribuição com aceite exclusivo de Pedro | P (2)   | Sem pré-requisito técnico anterior                                      |
| [SlothEngineer#24](https://github.com/PHnsilva/SlothEngineer/issues/24) | Reconciliar requisitos, backlog e arquitetura ao portfólio atual         | M (4)   | Sem pré-requisito técnico anterior                                      |
| [SlothEngineer#20](https://github.com/PHnsilva/SlothEngineer/issues/20) | Adequar e conferir os 23 especialistas e a fronteira externa de voz      | L (8)   | [SlothEngineer#24](https://github.com/PHnsilva/SlothEngineer/issues/24) |
| [SlothEngineer#8](https://github.com/PHnsilva/SlothEngineer/issues/8)   | Publicar guias reutilizáveis com referências e limites factuais          | M (4)   | Sem pré-requisito técnico anterior                                      |
| [SlothEngineer#12](https://github.com/PHnsilva/SlothEngineer/issues/12) | Concluir organização do quadro e cobertura do novo ciclo                 | P (2)   | [SlothEngineer#24](https://github.com/PHnsilva/SlothEngineer/issues/24) |
| [SlothEngineer#10](https://github.com/PHnsilva/SlothEngineer/issues/10) | Definir casos e rubricas de avaliação por especialidade                  | L (8)   | [SlothEngineer#20](https://github.com/PHnsilva/SlothEngineer/issues/20) |

## S2 — Inferência e ferramentas seguras

| Issue                                                                   | Entrega                                                                 | Tamanho | Bloqueada por                                                           |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------- |
| [SlothEngineer#1](https://github.com/PHnsilva/SlothEngineer/issues/1)   | Validar inferência local real e limites de recursos                     | L (8)   | [SlothEngineer#24](https://github.com/PHnsilva/SlothEngineer/issues/24) |
| [SlothEngineer#2](https://github.com/PHnsilva/SlothEngineer/issues/2)   | Homologar o servidor MCP em host externo real                           | L (8)   | [SlothEngineer#1](https://github.com/PHnsilva/SlothEngineer/issues/1)   |
| [SlothEngineer#25](https://github.com/PHnsilva/SlothEngineer/issues/25) | Isolar workspace e execução de ferramentas de verificação               | L (8)   | [SlothEngineer#2](https://github.com/PHnsilva/SlothEngineer/issues/2)   |
| [SlothEngineer#26](https://github.com/PHnsilva/SlothEngineer/issues/26) | Coletar contexto de diff, base e checks de PR sem alterar o repositório | L (8)   | [SlothEngineer#25](https://github.com/PHnsilva/SlothEngineer/issues/25) |

## S3 — DevOps e revisão técnica

| Issue                                                                   | Entrega                                                         | Tamanho | Bloqueada por                                                                                                                                    |
| ----------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [SlothEngineer#27](https://github.com/PHnsilva/SlothEngineer/issues/27) | Revisar código e PR com achados verificáveis                    | L (8)   | [SlothEngineer#26](https://github.com/PHnsilva/SlothEngineer/issues/26), [SlothEngineer#10](https://github.com/PHnsilva/SlothEngineer/issues/10) |
| [SlothEngineer#28](https://github.com/PHnsilva/SlothEngineer/issues/28) | Avaliar arquitetura e contratos segundo requisitos do projeto   | L (8)   | [SlothEngineer#20](https://github.com/PHnsilva/SlothEngineer/issues/20), [SlothEngineer#26](https://github.com/PHnsilva/SlothEngineer/issues/26) |
| [SlothEngineer#29](https://github.com/PHnsilva/SlothEngineer/issues/29) | Analisar e propor pipelines CI/CD com gates e rollback          | L (8)   | [SlothEngineer#25](https://github.com/PHnsilva/SlothEngineer/issues/25)                                                                          |
| [SlothEngineer#30](https://github.com/PHnsilva/SlothEngineer/issues/30) | Revisar dependências, configuração e versionamento              | M (4)   | [SlothEngineer#26](https://github.com/PHnsilva/SlothEngineer/issues/26)                                                                          |
| [SlothEngineer#31](https://github.com/PHnsilva/SlothEngineer/issues/31) | Validar configuração de containers e infraestrutura como código | L (8)   | [SlothEngineer#25](https://github.com/PHnsilva/SlothEngineer/issues/25)                                                                          |
| [SlothEngineer#32](https://github.com/PHnsilva/SlothEngineer/issues/32) | Preparar plano de release, migração e rollback verificável      | L (8)   | [SlothEngineer#29](https://github.com/PHnsilva/SlothEngineer/issues/29), [SlothEngineer#31](https://github.com/PHnsilva/SlothEngineer/issues/31) |

## S4 — Avaliação e conhecimento

| Issue                                                                   | Entrega                                                                | Tamanho | Bloqueada por                                                                                                                                                                                                           |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SlothEngineer#33](https://github.com/PHnsilva/SlothEngineer/issues/33) | Analisar logs e incidentes com hipóteses e passos de diagnóstico       | L (8)   | [SlothEngineer#32](https://github.com/PHnsilva/SlothEngineer/issues/32)                                                                                                                                                 |
| [SlothEngineer#3](https://github.com/PHnsilva/SlothEngineer/issues/3)   | Registrar baseline de geração reproduzível por capacidade              | L (8)   | [SlothEngineer#1](https://github.com/PHnsilva/SlothEngineer/issues/1), [SlothEngineer#10](https://github.com/PHnsilva/SlothEngineer/issues/10), [SlothEngineer#27](https://github.com/PHnsilva/SlothEngineer/issues/27) |
| [SlothEngineer#4](https://github.com/PHnsilva/SlothEngineer/issues/4)   | Comprovar melhoria de instruções com comparação independente           | L (8)   | [SlothEngineer#3](https://github.com/PHnsilva/SlothEngineer/issues/3)                                                                                                                                                   |
| [SlothEngineer#6](https://github.com/PHnsilva/SlothEngineer/issues/6)   | Definir armazenamento, proveniência e retenção de execuções            | M (4)   | [SlothEngineer#4](https://github.com/PHnsilva/SlothEngineer/issues/4)                                                                                                                                                   |
| [SlothEngineer#34](https://github.com/PHnsilva/SlothEngineer/issues/34) | Implementar registro de execuções e lições candidatas com proveniência | L (8)   | [SlothEngineer#6](https://github.com/PHnsilva/SlothEngineer/issues/6)                                                                                                                                                   |
| [SlothEngineer#35](https://github.com/PHnsilva/SlothEngineer/issues/35) | Medir recursos e falhas por especialista e ferramenta                  | M (4)   | [SlothEngineer#1](https://github.com/PHnsilva/SlothEngineer/issues/1), [SlothEngineer#25](https://github.com/PHnsilva/SlothEngineer/issues/25)                                                                          |
| [SlothEngineer#36](https://github.com/PHnsilva/SlothEngineer/issues/36) | Avaliar e priorizar regressões das especialidades além de DevOps       | L (8)   | [SlothEngineer#3](https://github.com/PHnsilva/SlothEngineer/issues/3)                                                                                                                                                   |

## S5 — Piloto e melhoria contínua

| Issue                                                                   | Entrega                                                         | Tamanho | Bloqueada por                                                                                                                                    |
| ----------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [SlothEngineer#37](https://github.com/PHnsilva/SlothEngineer/issues/37) | Curar dados de aprimoramento técnico com separação de reserva   | M (4)   | [SlothEngineer#3](https://github.com/PHnsilva/SlothEngineer/issues/3)                                                                            |
| [SlothEngineer#38](https://github.com/PHnsilva/SlothEngineer/issues/38) | Executar decisão de viabilidade de treinamento de pesos         | M (4)   | [SlothEngineer#37](https://github.com/PHnsilva/SlothEngineer/issues/37), [SlothEngineer#4](https://github.com/PHnsilva/SlothEngineer/issues/4)   |
| [SlothEngineer#39](https://github.com/PHnsilva/SlothEngineer/issues/39) | Operar ciclo diário de melhoria com comparação e revisão humana | L (8)   | [SlothEngineer#34](https://github.com/PHnsilva/SlothEngineer/issues/34), [SlothEngineer#37](https://github.com/PHnsilva/SlothEngineer/issues/37) |
| [SlothEngineer#9](https://github.com/PHnsilva/SlothEngineer/issues/9)   | Homologar chamada de leitura a peer externo necessário          | L (8)   | [sofiee-agent-search#21](https://github.com/PHnsilva/sofiee-agent-search/issues/21)                                                              |
| [SlothEngineer#5](https://github.com/PHnsilva/SlothEngineer/issues/5)   | Validar contribuição piloto DevOps em projeto consumidor        | L (8)   | [SlothEngineer#4](https://github.com/PHnsilva/SlothEngineer/issues/4), [SlothEngineer#27](https://github.com/PHnsilva/SlothEngineer/issues/27)   |

## S6 — Validação extra e mudanças

| Issue                                                                   | Entrega                                                            | Tamanho | Bloqueada por                                                                                                                                                                                                             |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SlothEngineer#40](https://github.com/PHnsilva/SlothEngineer/issues/40) | Executar regressão integrada dos 23 especialistas e ferramentas    | L (8)   | [SlothEngineer#5](https://github.com/PHnsilva/SlothEngineer/issues/5), [SlothEngineer#36](https://github.com/PHnsilva/SlothEngineer/issues/36), [SlothEngineer#39](https://github.com/PHnsilva/SlothEngineer/issues/39)   |
| [SlothEngineer#41](https://github.com/PHnsilva/SlothEngineer/issues/41) | Validar isolamento, segredos e entradas adversariais ponta a ponta | L (8)   | [SlothEngineer#25](https://github.com/PHnsilva/SlothEngineer/issues/25), [SlothEngineer#9](https://github.com/PHnsilva/SlothEngineer/issues/9)                                                                            |
| [SlothEngineer#42](https://github.com/PHnsilva/SlothEngineer/issues/42) | Comprovar recuperação, exclusão e rollback de conhecimento         | M (4)   | [SlothEngineer#34](https://github.com/PHnsilva/SlothEngineer/issues/34)                                                                                                                                                   |
| [SlothEngineer#43](https://github.com/PHnsilva/SlothEngineer/issues/43) | Entregar operação e critérios para aceite do ciclo inicial         | M (4)   | [SlothEngineer#40](https://github.com/PHnsilva/SlothEngineer/issues/40), [SlothEngineer#41](https://github.com/PHnsilva/SlothEngineer/issues/41), [SlothEngineer#42](https://github.com/PHnsilva/SlothEngineer/issues/42) |

## Registros fora do ciclo

| Issue                                                                   | Disposição                                                                                                            |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [SlothEngineer#7](https://github.com/PHnsilva/SlothEngineer/issues/7)   | Futuro: delegação independente depende de necessidade/peer e não é requisito do ciclo DevOps.                         |
| [SlothEngineer#15](https://github.com/PHnsilva/SlothEngineer/issues/15) | Reavaliar contrato histórico do Sofiee perante o novo agente Comunicação; preservar PR #18 e revisão de Pedro.        |
| [SlothEngineer#16](https://github.com/PHnsilva/SlothEngineer/issues/16) | Reavaliar contrato histórico do Velumbra perante o novo portfólio; preservar PR #19 e revisão de Pedro.               |
| [SlothEngineer#17](https://github.com/PHnsilva/SlothEngineer/issues/17) | Casos históricos do Sofiee podem informar a avaliação do Comunicação, sem implementar domínio do produto no Engineer. |

## Continuidade e revisão

Antes de cada entrega, ler a issue, dependências, PRs/comentários e quadro vivo. PR aberto não equivale a aceite; pode fornecer pré-requisito técnico provisório conforme WEEKLY_EXECUTION.md. Preservar artefatos corretos e branches já em revisão. Somente Pedro revisa/aprova PRs, aceita e fecha as issues. Sprints e estimativas são planejamento, não declaração de conclusão.

Para agentes, depois do ciclo inicial continua o aperfeiçoamento por evidências: novas falhas/casos geram backlog real. Preparação/decisão de treino de pesos não é treino executado. Não prometer treinamento diário automático nem autopromover versão/lesson.

Execução semanal: ler [WEEKLY_EXECUTION.md](WEEKLY_EXECUTION.md). Espera de revisão/merge não deve impedir PRs dependentes sobre artefatos já disponíveis e tecnicamente validados, com base/ordem explícitas.
