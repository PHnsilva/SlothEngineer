# Plano do projeto

Este plano define capacidades e critérios de saída, sem escolher uma metodologia de gestão. A execução segue as issues e dependências revisadas em [backlog.md](backlog.md); números de marco não impõem uma cadeia global nem representam sprints.

## Objetivo

Criar uma base de engenharia assistida por agentes que ajude no Sofiie e em outros projetos, recupere conhecimento rastreável e melhore resultados com avaliação. Custo contratado de serviços: R$ 0. Não depender de assinatura de assistente, API paga, crédito promocional ou nuvem de GPU.

## M0. Fundação e contratos

Entrega inicial: repositório independente, 25 perfis, roteador, CLI, servidor e cliente MCP stdio, handoff, adaptador Ollama, referências com fontes, testes e CI. O bootstrap não inclui modelo, integração externa homologada ou pesos treinados.

Saída: comandos documentados executam; contrato MCP é exercitado por cliente real de teste; entradas inválidas e ferramentas não autorizadas falham; nenhum segredo ou arquivo privado publicado. A avaliação de roteamento precisa estar verde, sem ser apresentada como qualidade de IA.

## M1. Modelo local e primeira integração externa

Issues #1, #2 e #9 são entregas independentes. A fundação necessária já está publicada.

1. Inventariar RAM disponível, GPU/VRAM, disco e processos concorrentes. Não recomendar compra.
2. Escolher um modelo de código/instruções pequeno e quantizado, com licença compatível; começar com uma única inferência por vez.
3. Instalar Ollama e baixar o modelo somente após seleção de tamanho/licença. Não há download automático no bootstrap.
4. Desabilitar cloud no serviço, testar falha fechada e documentar medição em português: latência, RAM, tokens e taxa de conclusão.
5. Registrar o servidor em um host MCP escolhido pelo usuário. Validar as ferramentas e recursos documentados e capturar evidência sem dados privados.
6. Conectar um agente externo por MCP com uma ferramenta de leitura, allowlist e teste negativo. O teste entre processos do mesmo projeto não substitui esta entrega.

Saída: relatório reproduzível com modelo, licença, versão, máquina, limitações e host; chamada externa recebida e respondida; nenhuma cobrança ou fallback remoto. Se a máquina não suportar qualidade útil, manter handoff e reduzir escopo.

## M2. Avaliações de geração e ciclo de melhoria

O protocolo #10 pode ser preparado independentemente. A baseline #3 depende de #1 e #10; o ciclo de melhoria #4 depende da baseline.

1. Criar casos sanitizados de backend, interface, acessibilidade, segurança, voz, MCP e jogos, incluindo falhas e tarefas adversariais.
2. Separar desenvolvimento, regressão pública e reserva privada. Não publicar dados reais nem expor gabaritos do conjunto de reserva ao agente otimizado.
3. Definir rubricas: atendimento do requisito, correção verificável, achados válidos, acessibilidade, segurança e ausência de alegações falsas.
4. Executar baseline com versão fixada; registrar resultado por caso, intervenção humana, tempo e hardware.
5. Alterar uma variável por proposta e comparar com baseline. Exigir ausência de regressão crítica e melhora justificada no conjunto independente, com tamanho da amostra explícito.
6. Registrar lição candidata em PR, acompanhada da evidência. Aprová-la antes de incluí-la em conhecimento recuperável.

Saída: baseline real, relatório comparativo e uma melhoria revisada. Nenhuma porcentagem simulada é apresentada como ganho observado. Não criar execução diária agendada sem pedido explícito.

## M3. Piloto no Sofiie e ferramentas controladas

A contribuição piloto #5 depende da melhoria avaliada #4 e da escolha de uma issue consumidora pelo proprietário.

1. Escolher uma issue pequena no produto e critérios de aceite antes de editar.
2. Usar um implementador, QA e os revisores de risco necessários. Comparar trabalho direto com delegação para verificar se a especialização compensa.
3. Validar interface com Playwright/axe-core, teclado e leitor de tela quando aplicável; backend com testes de contrato e segurança; desktop no Windows; voz em português; jogos no editor e ambiente de execução escolhidos quando houver tarefa dessa área.
4. Se forem necessárias ferramentas com escrita, projetar workspace isolado, caminhos permitidos, timeout, limite de saída e confirmação por operação. Não habilitar shell irrestrito.
5. Abrir PR no Sofiie para revisão independente. Não alterar permissões nem implantar produção a partir da saída do modelo.

Saída: issue atendida com evidências reais e revisão. CI verde, PR aberto ou mock isolado não significa aceite completo.

## M4. Memória persistente, recuperação e observabilidade

A decisão #6 usa evidência dos ciclos #4. O piloto pode contribuir com contexto, mas não é um bloqueador obrigatório.

Comparar manter arquivos com alternativa local adequada às necessidades de runs, avaliações, fontes e lições. Definir proveniência, retenção, correção/exclusão e requisitos de recuperação. Não impor banco ou motor de busca antes dessa decisão. Implementação posterior precisa de issue própria e testes de migração/backup/restauração. Conteúdo privado permanece fora do Git.

Saída: recuperação com origem e validade, teste de exclusão/retificação, restauração comprovada e comparação de relevância com a busca lexical inicial.

## M5. A2A e colaboração de longa duração

A decisão e o contrato #7 dependem da comunicação externa #9 e de uma necessidade real. Não dependem automaticamente de persistência ou piloto.

Avaliar protocolo de delegação adequado quando houver outro agente independente para integrar. A2A é uma possibilidade a comparar, não implementação já decidida. Depois da decisão, abrir issue própria para implementação/homologação. Definir Agent Card, descoberta, delegação, estados, cancelamento, autorização, identidade, idempotência e limites. Usar MCP para ferramentas. Se HTTP for necessário, exigir autenticação, validação de origem/host e política de exposição antes de abrir portas.

Saída da decisão atual: caso, alternativas e contrato revisados. Aceite de implementação futura: dois agentes de implementações distintas trocam tarefa e resultado, incluindo cancelamento, timeout e falha de autorização. Um JSON parecido com Agent Card não comprova conformidade A2A.

## Critérios para adicionar especialistas

Os 25 perfis cobrem o escopo inicial. Criar um perfil novo somente se houver tarefas recorrentes, corpus próprio, rubrica de qualidade e benefício medido. Exemplos futuros condicionais: computação gráfica/3D, áudio de jogos, redes multiplayer, engenharia embarcada, sistemas distribuídos e pesquisa de ML. Antes disso, usar o perfil mais próximo com instruções de tarefa.

## Indicadores

| Indicador             | Como medir                                            | Estado inicial                   |
| --------------------- | ----------------------------------------------------- | -------------------------------- |
| Correção de geração   | Rubrica humana + testes independentes                 | Ainda sem baseline               |
| Tarefas aceitas       | Critérios da issue e revisão                          | Ainda sem piloto                 |
| Qualidade dos achados | Achados confirmados / achados revisados               | Ainda sem amostra                |
| Segurança             | Falhas de fronteira, segredos e ferramentas indevidas | Testes de contratos do bootstrap |
| Acessibilidade        | Automação + teclado + leitor de tela                  | Sem interface própria            |
| Recursos              | Tempo, RAM, CPU/GPU por execução                      | Inferência real ainda não medida |
| Custo de serviços     | Serviços provisionados e chamadas faturáveis          | Nenhum no caminho padrão         |
| Memória               | Lições aprovadas úteis e recuperação com fonte        | Começa vazia                     |

## Uso cotidiano previsto

Escolher um problema real, consultar contexto aprovado, preparar plano, trabalhar em branch, testar, revisar, abrir PR e registrar apenas aprendizado comprovado. A revisão humana continua necessária. Não existe promessa de agente autônomo 24 horas com custo operacional literalmente inexistente.
