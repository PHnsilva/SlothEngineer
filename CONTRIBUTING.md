# Contribuição

Use os [guias reutilizáveis](guides/README.md) como orientação. Eles não impõem metodologia; as regras abaixo são específicas deste repositório.

Escreva issues pelo [guia de qualidade e dependências](guides/ISSUES.md). A convenção local é título com ação e resultado, sem sprint ou segunda sequência obrigatórias; branch `tipo/numero-da-issue-resumo`. Use o tipo nativo quando disponível, senão a label `type:task`; labels de área e prioridade seguem [docs/backlog.md](docs/backlog.md). Não confundir área, tamanho, prioridade e estado.

Abra uma issue com problema, contexto sanitizado e critérios de aceite. Identifique a etapa correspondente no roadmap. Trabalhe em branch própria, use commits pequenos (`feat:`, `fix:`, `docs:`, `test:` ou `chore:`) e abra PR vinculado à issue.

Antes do PR, rode `npm ci` e `npm run check`. Mudanças de contratos MCP exigem teste de integração; provedores exigem testes de falha e custo; interfaces futuras exigem inspeção visual e acessibilidade. Indique claramente mocks, ambientes não testados e dependências externas.

Não crie serviço pago, amplie permissões, agende execução ou instale modelos para outra pessoa como parte de uma contribuição comum. Não altere dependências sem revisar versão, licença e necessidade.

Revisão de agente ajuda na preparação, mas não substitui revisão independente do responsável. Não fazer autoaprovação ou auto-merge. Uma lição de conhecimento precisa citar evidência sanitizada e PR revisado.

## Preparação da entrega neste repositório

A issue precisa registrar problema e evidência, resultado esperado, inclui/exclui, aceite, validação e decisões. Não publicar causa não investigada como fato, template vazio ou melhoria genérica sem resultado verificável. Para investigação, definir pergunta e artefato de conclusão.

O título usa ação e resultado; o número nativo identifica o item, sem impor ordem ou sprint. Classifique a natureza no tipo nativo quando configurado; `type:task` é a alternativa atual. Use `area:*` para competência principal e `priority:P1/P2/P3` conforme o backlog. Não confunda tipo, área, urgência, esforço e estado.

Escolha milestone por capacidade, sem data artificial. Responsável, revisor, esforço e prazo só entram quando definidos. Separe entregas que exigem aceite, responsável, bloqueio ou execução próprios, preservando resultado testável. Checklists não escondem trabalho independente. Relação consumidora → pré-requisito precisa de motivo e condição de liberação; item relacionado/subissue não cria bloqueio automaticamente.

Antes de começar, verifique prontidão e dependências. Se houver impedimento, registre motivo, quem resolve, próxima ação e evidência de desbloqueio. Movimente Project apenas com acesso e condição confirmados; issue aberta não significa Ready. O quadro não substitui o contrato de aceite.

## Trabalho, revisão e continuidade

Use branch própria a partir de base conferida, mantendo a branch ao continuar PR aberto. Faça commits por mudança lógica conforme os tipos locais. Preserve trabalho e autoria; não descarte mudanças, reescreva histórico alheio ou force push por conveniência.

O PR relaciona problema e comportamento resultante para quem não leu a conversa. Identifica issue, dependências, contratos/dados/configuração afetados, testes executados e limites. Em dependência entre PRs, declare base e ordem. PR parcial referencia a issue; fechamento automático só corresponde à entrega final quando compatível com o procedimento local.

Revisão exige o HEAD atual, comentários resolvidos e verificações proporcionais. Diferencie teste simulado, processo local real, comunicação externa e aceite humano. Mudanças visuais exigem inspeção; contratos exigem negativos e invariantes; integrações exigem resultado no consumidor quando fizer parte do aceite.

Mantenha a entrega em revisão/validação enquanto faltar aceite. CI verde, merge ou cartão movido não demonstram conclusão isoladamente. Registre implementado, verificado, integrado e pendente sem confundir proposta com produção. A próxima rodada começa pelo estado deixado, sem duplicar o que está correto.

## Ferramentas e conteúdo de terceiros

Consulte `tools/` antes de criar cliente duplicado. APIs candidatas continuam referências até haver contrato, licença, custo verificado, política de dados/credenciais, limites, falhas e validação. O código do professor está separado com origem e hashes e não é executado pelo agente.

A CLI e o MCP compartilham o adaptador local de diagramas. Não criar outro serviço só para expor uma função existente. Separar pacote/repositório/serviço deve resolver necessidade real de consumidores, fronteira de confiança, implantação ou manutenção, com decisão registrada.
