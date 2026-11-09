# Catálogo de APIs candidatas

Inventário de exemplos encontrados no material do professor e de fontes dos provedores. **Nenhuma API deste catálogo foi conectada automaticamente ao agente.** Leitura de documentação não comprova disponibilidade, SLA, segurança ou custo zero para qualquer uso.

| Recurso             | Possível uso                         | Exemplo didático                                                                                                                                | Fonte e condição a conferir                                                                                                                       |
| ------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PlantUML            | Diagramas a partir de fonte editável | [Projeto PlantUML API](https://github.com/joaopauloaramuni/projeto-de-software/tree/main/PROJETOS/Python/Projeto%20PlantUML%20API)              | [CLI](https://plantuml.com/command-line), [segurança](https://plantuml.com/security). Aqui o uso é local; o exemplo original usa servidor público |
| GitHub REST/GraphQL | Repositórios, issues e PRs           | [Exemplos GitHubAPI](https://github.com/joaopauloaramuni/python/tree/main/PROJETOS)                                                             | [REST](https://docs.github.com/en/rest), [GraphQL](https://docs.github.com/en/graphql). Conferir escopos e limites; não publicar token            |
| IBGE                | Localidades e indicadores oficiais   | [IBGE Locations](https://github.com/joaopauloaramuni/python/tree/main/PROJETOS/Projeto%20IBGE%20Locations)                                      | [Documentação](https://servicodados.ibge.gov.br/api/docs/). Conferir período, versão e atribuição dos dados                                       |
| ViaCEP              | Endereço por CEP                     | [ConsultaBrasil](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/tree/main/PROJETOS/React/ConsultaBrasil)    | [Provedor](https://viacep.com.br/). Anunciado como gratuito; respeitar uso e distinguir CEP inválido de inexistente                               |
| BrasilAPI           | Dados públicos, CEP e feriados       | [ConsultaBrasil](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/tree/main/PROJETOS/React/ConsultaBrasil)    | [Docs](https://brasilapi.com.br/docs), [código](https://github.com/BrasilAPI/BrasilAPI). Conferir cada endpoint e tratamento de dados             |
| NASA                | Dados científicos/educacionais       | [Projeto NASA](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/tree/main/PROJETOS/SpringBoot/NASA)           | [Portal](https://api.nasa.gov/). Oferece chave; conferir limites e direitos do conteúdo                                                           |
| TMDB                | Metadados audiovisuais               | [MoviesWithTMDBApi](https://github.com/joaopauloaramuni/python/tree/main/PROJETOS/Projeto%20MoviesWithTMDBApi)                                  | [FAQ](https://developer.themoviedb.org/docs/faq). Exige chave; termos distinguem uso não comercial/comercial e atribuição                         |
| Climatempo          | Meteorologia                         | [Clima_RestAPI](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/tree/main/PROJETOS/SpringBoot/Clima_RestAPI) | [Provedor](https://advisor.climatempo.com.br/). Exemplo pede token; custo não homologado, portanto fora do caminho de custo zero                  |

Antes de adotar um serviço, abrir issue com finalidade, contrato, autenticação, limites, termos, licença, fluxo de dados, custo, falhas e validação ponta a ponta. Uma API útil a um produto consumidor não precisa ser uma ferramenta permanente do agente.

## Critérios de adoção

- Custo de serviços do projeto permanece R$ 0. Não ativar plano, teste pago ou fallback remoto com base em exemplo.
- Credenciais ficam fora do Git e só chegam a componentes que delas precisem.
- Aplicar timeout, limite de resposta, schema e tratamento de erro; cache e repetição quando adequados. Respeitar limites do provedor.
- Distinguir exemplo, documentação e chamada realmente testada. Registrar versão/data pertinentes.
- Usar dados sintéticos em avaliações. Não buscar dados pessoais reais sem escopo autorizado.

## Estado de verificação

Páginas e exemplos foram examinados para identificar finalidade e condições explícitas. Não foram criadas contas, chaves, assinaturas ou integrações autenticadas. O renderizador executado nesta entrega é somente o PlantUML local, com diagramas públicos criados neste repositório.
