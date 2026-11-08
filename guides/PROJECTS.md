# Projects e organização de quadros

Este guia orienta a organização do trabalho. Um Project pode mostrar tabela, quadro e roadmap sobre os mesmos itens. O layout Kanban é uma opção de visualização; sua adoção não significa que o projeto siga a metodologia Kanban, Scrum ou outra abordagem.

## Fonte oficial e itens

Defina um Project oficial para o escopo pertinente ou outra ferramenta já adotada. Inclua as mesmas issues em diferentes visões em vez de criar cópias do trabalho. Prefira issues executáveis a cartões grandes com tarefas escondidas. Um PR ligado à issue é evidência de alteração; se também aparecer como item, evite contá-lo como uma segunda entrega.

Rascunhos podem servir para captura rápida. Antes de iniciar trabalho substancial, converta-os em issues com aceite, responsável e dependências, conforme o acordo local.

## Campos com propósitos distintos

| Campo               | Uso                                                                           |
| ------------------- | ----------------------------------------------------------------------------- |
| Status              | Estado real no fluxo, com regra de entrada/saída                              |
| Assignee            | Pessoa responsável confirmada, sem fingir que perfil de agente é conta humana |
| Type                | Natureza do trabalho, quando disponível                                       |
| Priority            | Impacto e urgência, sem confundir com tamanho                                 |
| Area/Domain         | Recorte técnico ou de negócio útil para distribuir trabalho                   |
| Size/Estimate       | Esforço relativo ou unidade de estimativa definida                            |
| Milestone/Iteration | Marco ou cadência realmente adotados                                          |
| Dependencies        | Relações nativas de bloqueio, com motivo e desbloqueio                        |

Não crie campos apenas para preencher tabelas. Antes de automatizar, confira permissões, valores e automações existentes. Um campo ausente ou inacessível deve ficar registrado; não simule sua configuração em texto.

## Fluxo exemplo, a adaptar

| Estado     | Condição                                                               |
| ---------- | ---------------------------------------------------------------------- |
| Backlog    | Necessidade registrada, ainda pode faltar refinamento                  |
| Ready      | Escopo/aceite claros e pré-requisitos necessários disponíveis          |
| Doing      | Trabalho ativo, com responsável e limite de simultaneidade acordado    |
| Review     | Artefato concreto disponível e validações realizadas para revisão      |
| Validation | Quando o projeto precisa distinguir revisão de aceite no ambiente alvo |
| Done       | Critérios, integração e aceite local concluídos com evidência          |

Esses nomes e a coluna adicional são exemplos, não um padrão obrigatório. Bloqueio normalmente deve ser visível como propriedade/relação sem perder a fase atual, o responsável, o motivo e a próxima ação. Uma coluna de bloqueados pode ser adotada se o projeto definir como preservar essas informações.

Evite mover algo para Ready enquanto um contrato indispensável está pendente. Não deixe item bloqueado parecer ativo sem mostrar seu impedimento. Revisão não representa conclusão; automação de merge não deve saltar aceite necessário.

## Visões úteis

- Backlog para refinamento e prioridade.
- Prontos e desbloqueados para seleção de trabalho.
- Em andamento por responsável/área, com limites de simultaneidade.
- Bloqueios e dependências para identificar quem libera o quê.
- Revisões e validações pendentes para evitar acumulação.
- Marcos/roadmap para acompanhar capacidade, sem inventar prazo.

Uma visão por dependências não é apenas ordenar por número da issue ou área. Destaque pré-requisitos, consumidores e condições de desbloqueio. Caso o produto não ofereça grafo de dependências, mantenha uma tabela/diagrama gerado das relações e links, sem alegar uma função inexistente na plataforma.

## Políticas de fluxo

Defina limites de trabalho simultâneo de acordo com a capacidade real. Um projeto solo pode começar com uma entrega em implementação por vez; uma equipe pode adotar outro limite. Revisão, bloqueio e validação também consomem capacidade. Os números devem ser acordados e ajustados com evidência, não copiados de outro projeto.

Verifique cartões antigos, dependências circulares, responsáveis provisórios e decisões sem dono. Revise automações de adicionar item, fechar issue, abrir/mesclar PR e arquivar. Campos, proteções e automações precisam ser conferidos na plataforma depois de salvar.

Se faltar acesso ao Project, avance somente o trabalho autorizado e independente. Registre o que não pôde ser visto ou alterado e não afirme que o quadro está organizado. Não amplie escopos de token ou permissões automaticamente.

Fonte de capacidades da plataforma: [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects). As políticas acima são propostas de organização a adaptar ao projeto.
