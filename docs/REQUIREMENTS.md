# Requisitos e fronteiras do sistema

SlothEngineer é um sistema extensível de engenharia de software com prioridade inicial em DevOps e responsabilidades de engenharia mais amplas. Este documento especifica resultados e limites; não declara implementação, integração, qualidade, treinamento ou aceite. Evidências por entrega pertencem às issues e aos pull requests.

## Requisitos funcionais

| ID  | Requisito                                                                                                                                                                                           |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F01 | Preparar planos e operar ferramentas permitidas por CLI/MCP, distinguindo planejamento, handoff, inferência local e execução efetiva.                                                               |
| F02 | Manter o catálogo de 23 perfis gerais com missão, entradas, ferramentas permitidas, entregas, limites e critérios próprios; priorizar DevOps sem excluir as demais responsabilidades de engenharia. |
| F03 | Revisar arquitetura, código e pull requests com achados verificáveis e evidências; a revisão não aprova nem integra o trabalho.                                                                     |
| F04 | Analisar CI/CD, versionamento, configuração, dependências, infraestrutura, releases e rollback dentro do escopo autorizado.                                                                         |
| F05 | Executar verificações permitidas em workspace isolado, com limites explícitos e sem expor shell irrestrito via MCP.                                                                                 |
| F06 | Planejar e validar containers, infraestrutura como código e releases em ambiente local ou fixtures explícitas, sem implantação automática em produção.                                              |
| F07 | Recuperar conhecimento com proveniência, separar referências de lições aprovadas e definir registro, retenção e exclusão de execuções.                                                              |
| F08 | Medir baseline de geração e evolução por capacidade, com maior cobertura de DevOps e regressão das demais especialidades.                                                                           |
| F09 | Consumir um peer de leitura autorizado quando houver necessidade concreta e validar um piloto de contribuição em projeto consumidor.                                                                |
| F10 | Preparar curadoria e protocolo de decisão sobre treinamento de pesos, condicionado a licença, dados, hardware e benefício demonstrável.                                                             |

## Requisitos não funcionais

| ID  | Critério                                                                                                                                                                                                                                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| N01 | Rastrear contribuição por issue, branch e PR. A conta mantenedora `PHnsilva` é a autoridade de aprovação e aceite; agentes não aprovam o próprio PR, não fazem merge ou deploy. Artefato disponível em branch/PR pode ser usado provisoriamente quando o commit, contrato e validação forem identificados e a ordem de integração estiver declarada. |
| N02 | Versionar contratos, validar entradas e saídas e reportar erros explícitos. Dados externos não concedem permissões.                                                                                                                                                                                                                                  |
| N03 | Não exigir serviço pago, faturamento ou fallback remoto automático. Manter código, runtimes, dependências, caches e temporários no C:.                                                                                                                                                                                                               |
| N04 | Tornar reproduzíveis testes positivos/negativos e avaliações pertinentes; registrar versões e distinguir mock, execução, integração e aceite humano.                                                                                                                                                                                                 |
| N05 | Minimizar dados, manter credenciais fora do Git, aplicar acesso mínimo e definir retenção/exclusão. Não publicar dados reais de usuários.                                                                                                                                                                                                            |
| N06 | Limitar entrada, memória, concorrência e duração; tratar cancelamento e falhas de modo fechado e medir desempenho no hardware disponível quando necessário.                                                                                                                                                                                          |
| N07 | Manter documentação coerente com contratos e comportamento; perfil, schema ou plano não comprovam capacidade executada.                                                                                                                                                                                                                              |
| N08 | Organizar o ciclo em até cinco sprints de entrega e uma de validação/mudanças, com duração máxima de sete dias por sprint. Usar PP/P/M/L como 1/2/4/8 unidades de esforço relativo.                                                                                                                                                                  |

## Fora do escopo

- Reconhecimento, síntese ou interação por voz dentro deste runtime.
- Aprovação, merge, deploy ou alteração de permissões por agentes.
- Shell arbitrário, fallback remoto pago ou execução automática em produção.
- A2A ou servidor próprio em consumidores sem necessidade, peer e contrato definidos.
- Reimplementar as competências de domínio dos agentes de Comunicação, Cálculo, Validação ou Busca.

## Verificação

Cada requisito é rastreado em [TRACEABILITY.md](TRACEABILITY.md); critérios observáveis e dependências específicas ficam na issue correspondente. Testes determinísticos cobrem dados conhecidos e casos sintéticos quando adequados. Comportamento generativo exige casos e julgamento próprios. Roteamento, presença de perfil, compilação ou mock não demonstram qualidade de geração nem treinamento. Registre inconclusões causadas por ambiente, dados ou fontes indisponíveis.
