# Plano de entregas — cinco sprints e validação extra

S1–S5 agrupam entregas funcionais; S6 agrupa validação adicional e mudanças documentais. Cada sprint tem duração máxima de sete dias. A ordem executável depende das relações entre issues, inclusive entre projetos; pertencer à mesma sprint não remove dependências.

As unidades são uma estimativa relativa do escopo planejado, não esforço restante nem evidência de conclusão. PP=1, P=2, M=4 e L=8. Issues e PRs são a fonte de critérios, validações e estado de aceite.

| Sprint    | Objetivo                         | Unidades estimadas |
| --------- | -------------------------------- | -----------------: |
| S1        | Requisitos e especializações     |                 28 |
| S2        | Inferência e ferramentas seguras |                 32 |
| S3        | DevOps e revisão técnica         |                 44 |
| S4        | Avaliação e conhecimento         |                 48 |
| S5        | Piloto e melhoria contínua       |                 32 |
| S6        | Validação extra e mudanças       |                 36 |
| **Total** | **Plano completo**               |            **220** |

## S1 — Requisitos e especializações

| Issue                                                                   | Entrega                                                             | Tamanho | Bloqueada por                                                           |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------- |
| [SlothEngineer#23](https://github.com/PHnsilva/SlothEngineer/issues/23) | Especificar templates, estimativas e autoridade de aceite           | P (2)   | Sem pré-requisito técnico anterior                                      |
| [SlothEngineer#24](https://github.com/PHnsilva/SlothEngineer/issues/24) | Reconciliar requisitos, backlog e arquitetura ao portfólio atual    | M (4)   | Sem pré-requisito técnico anterior                                      |
| [SlothEngineer#20](https://github.com/PHnsilva/SlothEngineer/issues/20) | Adequar e conferir os 23 especialistas e a fronteira externa de voz | L (8)   | [SlothEngineer#24](https://github.com/PHnsilva/SlothEngineer/issues/24) |
| [SlothEngineer#8](https://github.com/PHnsilva/SlothEngineer/issues/8)   | Publicar guias reutilizáveis com referências e limites factuais     | M (4)   | Sem pré-requisito técnico anterior                                      |
| [SlothEngineer#12](https://github.com/PHnsilva/SlothEngineer/issues/12) | Concluir organização do quadro e cobertura do novo ciclo            | P (2)   | [SlothEngineer#24](https://github.com/PHnsilva/SlothEngineer/issues/24) |
| [SlothEngineer#10](https://github.com/PHnsilva/SlothEngineer/issues/10) | Definir casos e rubricas de avaliação por especialidade             | L (8)   | [SlothEngineer#20](https://github.com/PHnsilva/SlothEngineer/issues/20) |

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

| Issue                                                                   | Entrega                                                               | Tamanho | Bloqueada por                                                                                                                                                                                                             |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SlothEngineer#40](https://github.com/PHnsilva/SlothEngineer/issues/40) | Executar regressão integrada dos 23 especialistas e ferramentas       | L (8)   | [SlothEngineer#5](https://github.com/PHnsilva/SlothEngineer/issues/5), [SlothEngineer#36](https://github.com/PHnsilva/SlothEngineer/issues/36), [SlothEngineer#39](https://github.com/PHnsilva/SlothEngineer/issues/39)   |
| [SlothEngineer#41](https://github.com/PHnsilva/SlothEngineer/issues/41) | Validar isolamento, segredos e entradas adversariais ponta a ponta    | L (8)   | [SlothEngineer#25](https://github.com/PHnsilva/SlothEngineer/issues/25), [SlothEngineer#9](https://github.com/PHnsilva/SlothEngineer/issues/9)                                                                            |
| [SlothEngineer#42](https://github.com/PHnsilva/SlothEngineer/issues/42) | Comprovar recuperação, exclusão e rollback de conhecimento            | M (4)   | [SlothEngineer#34](https://github.com/PHnsilva/SlothEngineer/issues/34)                                                                                                                                                   |
| [SlothEngineer#43](https://github.com/PHnsilva/SlothEngineer/issues/43) | Entregar operação e critérios para aceite do ciclo inicial            | M (4)   | [SlothEngineer#40](https://github.com/PHnsilva/SlothEngineer/issues/40), [SlothEngineer#41](https://github.com/PHnsilva/SlothEngineer/issues/41), [SlothEngineer#42](https://github.com/PHnsilva/SlothEngineer/issues/42) |
| [SlothEngineer#44](https://github.com/PHnsilva/SlothEngineer/issues/44) | Consolidar instruções do agente e documentação de contribuição        | M (4)   | Base de PR empilhada sobre #21 por sobreposição em `AGENTS.md`; essa ordem é de integração, não requisito funcional.                                                                                                      |
| [SlothEngineer#45](https://github.com/PHnsilva/SlothEngineer/issues/45) | Formalizar requisitos, arquitetura, rastreabilidade e especializações | M (4)   | Sem dependência técnica.                                                                                                                                                                                                  |
| [SlothEngineer#46](https://github.com/PHnsilva/SlothEngineer/issues/46) | Especificar avaliação e melhoria contínua                             | M (4)   | Alterações empilhadas nos arquivos já propostos no PR #13; integrar base antes do incremento.                                                                                                                             |

## Itens fora do ciclo inicial

| Issue                                                                   | Delimitação                                                                                                           |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [SlothEngineer#7](https://github.com/PHnsilva/SlothEngineer/issues/7)   | Delegação independente só é considerada quando houver necessidade e peer definidos.                                   |
| [SlothEngineer#15](https://github.com/PHnsilva/SlothEngineer/issues/15) | Reavaliar o contrato legado do Sofiee perante o agente Comunicação; não reativar automaticamente.                     |
| [SlothEngineer#16](https://github.com/PHnsilva/SlothEngineer/issues/16) | Reavaliar o contrato legado do Velumbra perante o portfólio atual; não reativar automaticamente.                      |
| [SlothEngineer#17](https://github.com/PHnsilva/SlothEngineer/issues/17) | Casos anteriores do Sofiee podem informar avaliação de Comunicação, sem implementar domínio do produto neste sistema. |

## Interpretação do plano

O plano organiza requisitos, escopo e dependências. O estado de implementação, validação, revisão e aceite é mantido nas issues, PRs e quadro. Artefato em PR pode atender provisoriamente a uma dependência somente quando contrato, SHA e validação forem suficientes e a ordem de integração estiver declarada; isso não representa aceite.

Para dependências entre branches, consulte [Dependências técnicas e integração incremental](WEEKLY_EXECUTION.md). Preparar casos, decidir sobre pesos ou alterar instruções não é treinamento de pesos executado.
