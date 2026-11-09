# Aprofundamento dos guias e organização de ferramentas

Continuação da issue #8 e do PR #11, ainda sem integração na principal ou aceite humano presumido.

## Alterações

- Guias gerais de AGENTS e contribuição aprofundados com contrato da issue, metadados, dependências, fluxo, responsabilidades, branch/commit/PR, critérios de revisão e continuidade. Regras locais também explicitadas na raiz.
- `docs/specialists.md` passou de tabela resumida para contratos de trabalho por competência, com entradas, entregas, revisão e limitações, sem nomes de plataformas ou ferramenta obrigatória.
- `tools/` separa adaptador implementado, referência licenciada e API candidata. Catálogo validado não executa comandos nem habilita rede/credenciais.
- Dezoito arquivos selecionados do professor preservados com commit, licença e hashes, sem execução do cliente original.
- MCP oferece `list_integrations` e `render_diagram`, além dos contratos anteriores. O renderizador local é compartilhado com a CLI e não recebe caminho nem grava arquivo por MCP.

## Verificações

Foram executados testes do catálogo para impedir que uma referência habilite execução, conferência de todos os hashes e da licença, leitura de recursos MCP por URIs fixas e renderização real de PNG pela ferramenta MCP. O adaptador continua testando SVG, PNG, sintaxe inválida e rejeição de includes/funções.

`npm run check` aprovou formatação, tipos, 23 testes locais, 13 cenários de roteamento e build. Os 23 testes incluem as duas verificações opcionais de renderização real, executadas neste computador com Java e JAR disponíveis. A revisão de links encontrou zero referências locais quebradas nos 23 documentos de guias/contratos examinados, sem incluir o README original de terceiros como se fosse documentação adotada.

Os testes de renderização real exigem JAR e Java locais. Quando o JAR não está disponível no CI comum, esses testes opcionais são indicados como ignorados; isso não se apresenta como homologação de renderer naquele ambiente.

## Project pendente

O navegador abriu o registro #5, ainda sem título final ou importação/configuração confirmada. A ferramenta encerrou o controle por não conseguir confirmar o endereço atual da janela com segurança. A CLI não possui escopo de Projects. A continuação está documentada em [project-setup.md](../docs/project-setup.md); não foi criada duplicata ou ampliada permissão.

O resultado desta rodada pode ser revisado no PR e nas ferramentas locais, mas o quadro não deve ser anunciado como concluído. APIs remotas candidatas, inferência real e host externo continuam sujeitos às issues e evidências próprias.
