# Ferramenta local de diagramas

## Contrato adotado

- Implementação: `src/modeling/plantuml.ts`, com a mesma função usada pela CLI.
- Entrada: um bloco UML de até 16.000 caracteres e 200 linhas, sem pré-processamento, funções ou imagens externas.
- CLI: `npm run diagram -- caminho-no-projeto.puml svg` ou `png`; salva no diretório de saída documentado.
- MCP: `render_diagram` recebe somente `source`, renderiza PNG e devolve texto de estado e imagem; não lê caminhos fornecidos pelo modelo nem grava arquivos.
- Pré-requisitos: Java e JAR MIT fixado, preparado por `npm run diagrams:setup`.
- Operação: processo fixo, sem shell, sem endpoint remoto, com timeout, limite de memória/saída e verificação de hash. Uma renderização MCP por vez.
- Falha: erro explícito por entrada inválida, pré-requisito ausente, sintaxe rejeitada ou limite; não há fallback remoto.

O adaptador é uma integração disponível; a configuração local de cada host precisa ser conferida. Não se trata de homologação com um host externo ou garantia de isolamento geral do sistema operacional.

## Código do professor

`upstream/` contém uma cópia selecionada e sem modificação do projeto de João Paulo Aramuni: cliente, script, requirements, README, licença e 13 fontes de diagrama. [Manifesto](reference-manifest.json) registra repositório, commit e SHA-256 de cada arquivo. A cópia integral baixada anteriormente, com imagens/PDF, permanece em `.local/references/`, fora do Git.

Essa cópia é **somente referência**. O cliente original usa servidor público HTTP e o script principal pode imprimir mensagem final genérica mesmo depois de capturar falhas individuais. Não o carregamos como ferramenta, não instalamos seus requirements nem executamos seu script. Ao reaproveitar código, preserve o aviso de licença e faça uma integração revisada própria.

Os arquivos de referência mantêm os bytes e a formatação originais, inclusive espaços presentes no código. Estão fora do formatador e da normalização de texto do Git; a integridade é verificada pelos hashes, enquanto os controles de estilo continuam valendo para o adaptador e os documentos próprios.

Fonte: [Projeto PlantUML API](https://github.com/joaopauloaramuni/projeto-de-software/tree/6e6140a2a2562e31a3eb035f4940f7b888909145/PROJETOS/Python/Projeto%20PlantUML%20API). O uso local está detalhado em [modelagem](../../docs/modeling.md), incluindo versão e hash do renderizador oficial.
