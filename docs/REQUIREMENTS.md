# Requisitos e escopo vigente — ciclo inicial

Sistema de engenharia com DevOps prioritário e evolução continuada dos demais especialistas, sem especialista interno de voz.

Definido a partir das decisões de Pedro até 06/11/2026. Documento de planejamento; não comprova implementação, treinamento, revisão ou aceite. As alterações são propostas no PR de organização, sem merge por agente.

## Requisitos funcionais

| ID  | Resultado exigido                                                                                                                                   |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| F01 | Executar consultas locais e ferramentas de engenharia por CLI/MCP, distinguindo plano, handoff, inferência e execução efetiva.                      |
| F02 | Manter 23 especialistas genéricos com missão, entradas, ferramentas, entregas, limites e critérios próprios, com DevOps prioritário.                |
| F03 | Revisar arquitetura, alterações de código e PRs com evidências e achados verificáveis, sem aprovação ou merge de agente.                            |
| F04 | Analisar e propor CI/CD, versionamento, configuração, dependências, infraestrutura e rollback dentro da autorização da issue.                       |
| F05 | Executar verificações permitidas em workspace isolado, com limites e sem shell irrestrito exposto por MCP.                                          |
| F06 | Planejar e validar containers, infraestrutura como código e releases em ambiente local/fixtures explícitas, sem contratação ou produção automática. |
| F07 | Recuperar conhecimento com proveniência, separar referências/lições e registrar execuções com retenção e exclusão.                                  |
| F08 | Medir baseline de geração e evolução por capacidade, com maior atenção aos casos DevOps e regressão dos demais especialistas.                       |
| F09 | Consumir peer de leitura autorizado quando houver necessidade real e homologar um piloto de contribuição em consumidor.                             |
| F10 | Preparar curadoria e protocolo de treinamento de pesos condicionado à viabilidade, sem confundir perfis com modelos treinados.                      |

## Requisitos não funcionais

| ID  | Critério                                                                                                                                                                                                                                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| N01 | Contribuição rastreável por issue/branch/PR; somente Pedro revisa/aprova PRs e aceita issues, sem merge/auto-merge/deploy de agentes. Durante a semana, dependência tecnicamente disponível em branch/PR validado pode ser consumida provisoriamente em PR empilhado; revisão/aceite/merge ficam com Pedro no sábado. |
| N02 | Contratos versionados, entradas/saídas validadas e erros explícitos; dados externos nunca concedem permissões.                                                                                                                                                                                                        |
| N03 | Sem serviço pago obrigatório, faturamento ou fallback remoto automático; executar ferramentas/caches no C: e respeitar pausas.                                                                                                                                                                                        |
| N04 | Testes de sucesso/erro e avaliações reais reproduzíveis; registrar versões e distinguir mock, execução e aceite humano.                                                                                                                                                                                               |
| N05 | Minimização de dados, credenciais fora do Git, acesso mínimo e retenção/exclusão definidas; não publicar dados reais de usuários.                                                                                                                                                                                     |
| N06 | Limites de entrada, memória, concorrência e tempo configuráveis, cancelamento e falha fechada; medir desempenho no hardware disponível.                                                                                                                                                                               |
| N07 | Documentação operacional coerente com código e evidências; disponibilidade ou qualidade não podem ser inferidas de um perfil ou schema.                                                                                                                                                                               |
| N08 | Até cinco sprints de entrega + uma de validação/mudanças, cada uma até uma semana; estimativas PP/P/M/L=1/2/4/8 e meta mínima de 8 unidades/dia por projeto ativo.                                                                                                                                                    |

## Fora do ciclo

- Voz/STT/TTS internos (ficam no Comunicação).
- Implantar produção, aprovar/mesclar PRs ou liberar shell arbitrário.
- A2A sem peer/necessidade comprovados.
- Reimplementar especializações gerais dos quatro agentes dentro deste sistema.

## Verificação e aceite

Cada requisito é rastreado em TRACEABILITY.md, com critérios concretos no corpo das issues. Dados conhecidos/sintéticos e ferramentas determinísticas verificam resultados quando possível; comportamento generativo exige casos separados e revisão apropriada. Não usar um teste de roteamento, presença de perfil ou metadado para alegar competência ou treino. Não declarar cobertura completa quando há pendência de ambiente/fonte.

A meta de 8 unidades/dia é um mínimo desejado por projeto ativo, não um teto de esforço nem uma medição de inteligência. A duração semanal é o objetivo do plano; a capacidade real e os bloqueios precisam ser observados e reportados. Não fabricar tarefa/estimativa/aceite para cumprir calendário.
