# Validação de guias, referências e modelagem

Esta entrega está preparada em branch própria para revisão do proprietário. As issues e metadados foram atualizados no GitHub; código e documentos precisam de revisão do PR antes de integrar a branch principal.

## Verificações locais

- `npm run check`: formatação, tipos, 20 testes, 13 cenários de regressão de roteamento e build aprovados.
- MCP: processo real lista cinco ferramentas e nove recursos; os guias são lidos por URIs fixas. Não foi conectado um host externo.
- Perfis: 25 competências com fontes de consulta; modelagem acrescentada sem impor plataforma. Fontes não são páginas automaticamente recuperadas pelo modelo.
- PlantUML MIT 1.2026.9: JAR local com SHA-256 verificado; geração real de SVG e PNG e rejeição de sintaxe inválida. O teste de renderer é opcional no CI comum e indica `skip` quando não há JAR.
- Dois diagramas renderizados e inspecionados visualmente, com rótulos/acentos e fonte editável. Revisão semântica confrontou o fluxo de entrega e o contrato de consulta do runtime; o fluxo é exemplo adaptável, não método universal.
- Links: nenhuma referência local quebrada nos 20 arquivos Markdown verificados; 55 URLs externas de documentação/referências responderam HTTP 200 na consulta. Isso não é auditoria dos conteúdos nem SLA futuro.

## Organização externa verificada

As dez issues abertas foram preservadas por número e revisadas com escopo, aceite e evidência. Foram aplicadas labels de tipo (fallback), área e prioridade, seis milestones sem prazo artificial e seis relações nativas de bloqueio. Itens #9 e #10 separam fluxos antes misturados. Não foram criadas subissues nem usadas labels para simular status de Project.

O campo nativo de tipo retornou nulo; `type:task` é uma label explicitamente alternativa, não preenchimento desse campo. Não foram inventados responsáveis ou esforço estimado.

A consulta de Projects falhou por ausência de `read:project`. Nenhum quadro, campo ou automação de Project foi alterado. A proposta de visões/fluxo permanece documentada para aplicação com acesso apropriado.

## Fontes e limites

Os arquivos enviados de outro projeto e os exemplos PsiHub #337/APAC #209 foram usados somente como referências. Seus repositórios não foram modificados. Foram examinados READMEs e exemplos selecionados do professor, sem alegar auditoria de todos os seus materiais.

O exemplo PlantUML foi baixado em `.local/references/`, com commit e hashes; o código original que chama servidor público não foi executado. APIs do catálogo não foram conectadas, e nenhuma conta, chave ou serviço pago foi criado.

A rotina diária existente continua ativa às 9h, com as orientações atualizadas para backlog e guias, sem criar outra rotina. Não existe scheduler implementado no runtime do repositório.
