# Como escrever issues executáveis

Uma boa issue permite que outra pessoa ou agente entenda o problema, identifique o que entregar e demonstre se a entrega atende ao esperado. Extensão não é qualidade: inclua informação suficiente para decidir e validar, sem transformar toda tarefa em um formulário extenso.

## 1. Título

Prefira ação e resultado observável, com o contexto que elimina ambiguidade. Exemplos:

- “Manter a sessão ao recarregar a página após autenticação”.
- “Rejeitar upload acima do limite sem gravar arquivo parcial”.
- “Comparar duas opções de armazenamento e registrar a decisão”.

Evite “melhorar backend”, “implementar tudo”, “ajustes diversos” ou apenas o nome de uma tecnologia. Se houver código de requisito, marco ou sequência, siga a convenção local. O número nativo da issue já é um identificador; não invente uma segunda numeração sem necessidade.

Não trate a ordem dos números como ordem de implementação. O título deve continuar compreensível fora do quadro.

## 2. Corpo mínimo

| Seção                   | Informação necessária                                                             |
| ----------------------- | --------------------------------------------------------------------------------- |
| Contexto e evidência    | Problema observado, fonte e estado atual. Distinguir causa confirmada de hipótese |
| Resultado esperado      | Comportamento ou decisão que estará disponível ao concluir                        |
| Escopo                  | O que entra e os limites que evitam expansão indevida                             |
| Critérios de aceite     | Condições observáveis, com cenários negativos relevantes                          |
| Validação               | Como reproduzir, ambiente, teste e evidência esperada                             |
| Dependências e decisões | Pré-requisito, motivo do bloqueio, responsável e condição de desbloqueio          |

Acrescente referências de código, contratos, dados sintéticos, riscos e instruções para agentes quando ajudarem. Não prescreva uma solução apenas por preferência do autor. Se uma escolha técnica for obrigatória, explique o contrato ou a decisão que a sustenta.

## 3. Tipo, labels e campos

**Tipo** classifica a natureza do trabalho. Use o campo nativo quando disponível: defeito, funcionalidade, tarefa ou os tipos configurados pela organização. Se ele não existir, adote uma família única de labels de tipo como alternativa explícita. Não afirme que o tipo nativo foi preenchido só porque existe uma label.

**Labels** classificam dimensões úteis à busca, como área, domínio, risco ou natureza quando não houver tipo nativo. Não criem categorias sem significado documentado. Evite múltiplas labels contraditórias e sinônimos para o mesmo conceito.

**Status** pertence ao fluxo real. **Prioridade** expressa impacto e urgência. **Size** expressa esforço relativo. **Estimate** exige unidade acordada. **Milestone** representa um marco ou versão; **Iteration** pode representar uma cadência, se adotada. Responsável pela execução e revisor são funções diferentes.

Se o Project possuir esses campos, prefira-os a cópias manuais no corpo. Quando não houver campo adequado, documente uma alternativa temporária e sua fonte oficial. Não use estatísticas de um projeto para inventar pontuação ou autonomia em outro.

## 4. Dependências claras

Escreva a direção e o motivo: “B está bloqueada por A porque consome o contrato X entregue em A”. Em `Blocked by`, B aponta para A. “Relacionada a” informa contexto e não cria bloqueio.

Para cada dependência, indique:

1. O que precisa estar pronto, com link direto para a issue ou artefato.
2. Por que a entrega atual não pode terminar sem isso.
3. Quem resolve o bloqueio ou a decisão.
4. Que evidência permite iniciar ou concluir o trabalho dependente.

Use relações nativas quando disponíveis e mantenha o motivo no texto. Documente referências textuais quando a ferramenta não suportar dependências. Evite dependências circulares. Antes de impor uma cadeia, confira se as entregas podem avançar independentemente com um contrato acordado.

Exemplo: contrato de anexos → persistência e autorização → integração da tela → validação ponta a ponta. Uma investigação de opções pode ocorrer antes ou em paralelo, desde que não afirme uma decisão ainda inexistente.

## 5. Separação orientada a dependências

Crie issues separadas quando houver resultados que possam ser aceitos de forma independente, responsáveis/revisores distintos, bloqueios diferentes ou entrega em momentos diferentes. A separação deve preservar uma jornada ou contrato verificável, e não apenas dividir por arquivos ou camadas sem resultado útil.

Um agrupador ou épico pode reunir links. Subissues são uma relação de organização; não demonstram sequência, bloqueio ou aceite. Usá-las sem critério pode esconder trabalho em cartões grandes, produzir progresso percentual enganoso e deixar dependências invisíveis no quadro.

Checklists dentro de uma issue servem para critérios de aceite, casos de teste e pequenos passos da mesma entrega. Não esconda neles tarefas que exigem issue, responsável e fluxo próprios.

Exemplo de decomposição de uma entrega ampla de documentos e anexos:

| Entrega separada                            | Pré-requisito possível                    | Aceite próprio                                |
| ------------------------------------------- | ----------------------------------------- | --------------------------------------------- |
| Definir cardinalidade, estados e permissões | Decisão do responsável pelo domínio       | Contrato e cenários de transição aprovados    |
| Gerar e visualizar documento solicitado     | Contrato do documento e gerador existente | Conteúdo, download e layout verificados       |
| Armazenar e autorizar vários anexos         | Contrato de anexos e limites              | Upload, leitura, remoção e negativas testados |
| Integrar a jornada do usuário               | APIs e contratos consumidos               | Fluxo real validado no ambiente alvo          |

Esta tabela é um exemplo de raciocínio, não uma arquitetura ou divisão obrigatória. Reavalie o corte com o código e as dependências reais.

## 6. Prontidão e aceite

Uma issue pode entrar no estado de trabalho pronto quando objetivo e escopo estão claros, decisões indispensáveis foram respondidas, pré-requisitos foram verificados e existe uma estratégia de validação executável. Se o objetivo for investigar, delimite pergunta, tempo/esforço disponível e evidência da conclusão.

Conclusão exige os critérios acordados, evidência adequada e aceitação do responsável. PR aberto, CI verde, merge, serviço provisionado ou tarefa marcada não bastam isoladamente. Registre o que foi implementado, simulado, executado no ambiente real e ainda está pendente.

Não feche uma issue porque apenas um dos seus critérios foi entregue. Em PR parcial, use referência sem fechamento automático. No PR final, use `Closes #N` somente quando o procedimento local de aceite permitir o fechamento no merge.

## 7. Modelo geral

```markdown
## Contexto e evidência

O que acontece hoje, onde foi observado e qual fonte confirma.

## Resultado esperado

O comportamento ou a decisão que esta entrega torna disponível.

## Escopo e limites

O que entra, o que fica fora e quais contratos devem ser preservados.

## Critérios de aceite

- [ ] Cenário principal com resultado observável.
- [ ] Erro ou limite relevante com resultado esperado.

## Validação e evidências

Como reproduzir, ambiente e evidência que será anexada ao PR.

## Dependências e decisões

Bloqueada por: #N, pelo motivo X.
Condição de desbloqueio: evidência Y. Responsável: função/pessoa confirmada.
Relacionadas: links de contexto que não bloqueiam esta entrega.

## Pontos de partida

Arquivos, contratos e fontes que precisam ser lidos; sem dados privados.
```

Remova campos sem utilidade e substitua instruções pelo conteúdo concreto antes de publicar.

## 8. Complementos por tipo

Para defeito: passos de reprodução, esperado versus observado, ambiente, frequência conhecida, evidência e regressão a prevenir. Não declare causa sem investigação.

Para funcionalidade: público e necessidade, comportamento, limites, estados de sucesso/erro e impactos em dados/contratos.

Para investigação: pergunta delimitada, opções/hipóteses, critérios de comparação e resultado que libera a decisão seguinte. O aceite é uma conclusão sustentada, não “estudar o assunto”.

Para documentação/modelagem: público, pergunta que o documento ou diagrama responde, fontes, coerência com implementação, renderização e revisão semântica.
