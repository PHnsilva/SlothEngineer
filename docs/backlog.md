# Organização do backlog deste projeto

As issues são entregas com resultado e aceite próprios. O número identifica o item, não estabelece sua ordem de execução. Os marcos M0–M5 representam capacidades, sem se declararem sprints ou uma metodologia universal.

## Metadados adotados

- Tipo: nenhuma configuração nativa de tipo foi confirmada nas issues. `type:task` é o fallback explícito aplicado, sem fingir que preenche o campo nativo.
- Área: uma label `area:*` identifica a competência principal da entrega.
- Prioridade: `priority:P1` libera trabalho prioritário, `P2` corresponde a entregas seguintes importantes e `P3` a evolução posterior. Não são estimativas ou promessas de prazo.
- Marco: milestones por capacidade, sem datas artificiais.
- Estado: o estado aberto/fechado da issue não equivale ao status de um Project. Não foram aplicadas labels de status nem inventados cartões Ready/Doing.
- Esforço/responsável: não foram preenchidos com estimativas ou atribuições pessoais presumidas. Definir na seleção da entrega, conforme recursos e decisão do proprietário.

Labels padrão existentes no repositório foram preservadas. As famílias novas têm descrições próprias. Relações de bloqueio foram registradas nativamente na direção consumidor → pré-requisito e seus motivos constam nos corpos.

## Entregas e dependências

| Issue                                                      | Entrega                                      | Marco | Bloqueada por                                               |
| ---------------------------------------------------------- | -------------------------------------------- | ----- | ----------------------------------------------------------- |
| [#8](https://github.com/PHnsilva/sofiie-agents/issues/8)   | Guias reutilizáveis, referências e modelagem | M0    | Sem bloqueio técnico identificado                           |
| [#12](https://github.com/PHnsilva/sofiie-agents/issues/12) | Configuração e importação do Project         | M0    | Acesso seguro à sessão de navegador/API                     |
| [#1](https://github.com/PHnsilva/sofiie-agents/issues/1)   | Inferência local com limites medidos         | M1    | Sem bloqueio técnico identificado; inclui seleção do modelo |
| [#2](https://github.com/PHnsilva/sofiie-agents/issues/2)   | Servidor consumido por host externo          | M1    | Seleção de host dentro da entrega                           |
| [#9](https://github.com/PHnsilva/sofiie-agents/issues/9)   | Cliente chamando agente externo              | M1    | Seleção/acesso ao peer dentro da entrega                    |
| [#10](https://github.com/PHnsilva/sofiie-agents/issues/10) | Casos e rubricas de geração                  | M2    | Não depende de modelo instalado                             |
| [#3](https://github.com/PHnsilva/sofiie-agents/issues/3)   | Baseline de geração                          | M2    | #1 e #10                                                    |
| [#4](https://github.com/PHnsilva/sofiie-agents/issues/4)   | Melhoria comparada e lição candidata         | M2    | #3                                                          |
| [#5](https://github.com/PHnsilva/sofiie-agents/issues/5)   | Contribuição piloto com aceite               | M3    | #4; seleção da issue consumidora pelo proprietário          |
| [#6](https://github.com/PHnsilva/sofiie-agents/issues/6)   | Decisão/contrato de persistência             | M4    | #4                                                          |
| [#7](https://github.com/PHnsilva/sofiie-agents/issues/7)   | Contrato de delegação independente           | M5    | #9                                                          |

#2 e #9 foram separadas porque servidor consumido por host e cliente chamando peer são fluxos diferentes. #10 foi separada da baseline para permitir preparar critérios/dados antes ou em paralelo à inferência. #6 e #7 agora entregam decisões/contratos; implementação posterior exige escopo e issue próprios, sem fingir que uma escolha foi feita.

Agrupar por marco não cria bloqueio. #6 não depende automaticamente do piloto #5, e #7 não depende automaticamente de persistência. Só existem relações onde há consumo real de evidência ou contrato.

## Proposta de visões do Project

Backlog por prioridade/área; itens prontos e desbloqueados; execução por responsável; revisões/validações; bloqueios com responsável e condição de liberação; roadmap por marco. Veja as políticas adaptáveis no [guia de Projects](../guides/PROJECTS.md).

**Estado atual:** a conexão da CLI não possui `read:project`. Pelo navegador foi aberto o [Project #5](https://github.com/users/PHnsilva/projects/5), ainda identificado como projeto sem título e sem configuração/importação confirmadas. A continuação foi interrompida porque o controle do navegador não conseguiu confirmar o endereço atual com segurança. Não declarar quadro pronto nem criar outro sem conferir esse registro. A proposta de visões permanece pendente; nenhuma permissão foi ampliada. Veja [a preparação do Project](project-setup.md).

## Referências usadas na escrita

Foram lidos os exemplos [PsiHub #337](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-2-ti5-0492100-psihub/issues/337) e [APAC #209](https://github.com/agencia-experimental-de-software/apac-feminina/issues/209). O primeiro exemplifica problema observável, aceite e evidência; o segundo detalha contexto, decisões, testes e limites, mas reúne resultados que podem justificar separação. São exemplos para análise, sem alterações nesses repositórios ou cópia de suas regras locais.

Esta tabela é uma fotografia do planejamento revisado; as issues e relações atuais do GitHub são a fonte operacional. Quando o backlog mudar, atualizar ou substituir a fotografia, sem manter status manual duplicado.
