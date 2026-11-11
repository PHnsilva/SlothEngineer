# MCP e conexão com outros agentes

MCP oferece ferramentas para um host. Assim, um assistente pode chamar `consult_specialist` como ferramenta. Isso atende colaboração controlada por MCP, mas não implementa descoberta e delegação federada A2A.

## Servidor para um host externo

1. Execute `npm ci` e `npm run build` na pasta do repositório.
2. Obtenha o caminho do Node: `Get-Command node | Select-Object -ExpandProperty Source`.
3. Adapte `config/mcp.example.json` com caminhos absolutos. No JSON do Windows, use `/` ou `\\`.
4. Adicione a configuração ao host MCP desejado. Alguns hosts usam uma chave diferente de `mcpServers`; consulte seu formato.
5. Use `list_specialists`, `get_specialist` e `plan_task`. No modo padrão, `consult_specialist` retorna instruções, sem inferência.

Exemplo de argumentos de planejamento:

```json
{
  "objective": "Revisar acessibilidade da interface e privacidade da captura de voz",
  "specialists": ["accessibility", "privacy", "voice"]
}
```

Não envie entradas de shell, caminhos livres ou segredos. O servidor rejeita campos desconhecidos. Stdout é exclusivo do protocolo; diagnósticos usam stderr.

| Ferramenta           | Entrada                             | Efeito                                            |
| -------------------- | ----------------------------------- | ------------------------------------------------- |
| `list_specialists`   | `{}`                                | Lista perfis                                      |
| `get_specialist`     | `id`                                | Obtém instruções e critérios                      |
| `plan_task`          | `objective`, `specialists` opcional | Prepara plano                                     |
| `consult_specialist` | `id`, `objective`                   | Prepara handoff ou usa Ollama local habilitado    |
| `search_knowledge`   | `query`                             | Consulta referências e lições versionadas         |
| `list_integrations`  | `{}`                                | Lista estado, fontes e limites de cada integração |
| `render_diagram`     | `source`                            | Renderiza PNG local por adaptador fixo e limitado |

O servidor não inicia agentes em outros aplicativos, escreve em repositórios, instala modelos ou usa sua assinatura de assistente como API.

## Catálogo e renderização

`list_integrations` lista o estado de cada entrada em `tools/catalog.json`: adaptador implementado, referência ou API planejada. Não faz chamadas externas, não escolhe programa a executar e não habilita credenciais.

`render_diagram` recebe `{ "source": "@startuml\n...\n@enduml" }`, valida a fonte e gera PNG por processo local fixo. A resposta contém estado e imagem MCP. Não recebe caminho de arquivo, não grava no repositório e não faz fallback remoto. Requer Java e JAR verificado já preparados; uma renderização por vez nesta instância. Includes, funções e imagens externas são rejeitados. Pré-requisito ausente e sintaxe inválida retornam erro explícito.

A integração MCP foi testada com processo real deste projeto, incluindo imagem PNG, mas ainda não equivale a homologação em host de terceiros. Veja [tools](../tools/README.md).

## Recursos para humanos e agentes

O servidor oferece sete ferramentas e onze recursos Markdown somente de leitura em `sofiie://guides/`: `overview`, `organization`, `issues`, `projects`, `contributing`, `agents`, `references`, `apis`, `modeling`, `specialists` e `tools`. Um host compatível pode listar recursos e ler a referência desejada. Os guias exigem adaptação; sua leitura não muda permissões nem a metodologia do projeto consumidor.

## Cliente para um peer local

Copie `config/peers.example.json` para `config/peers.local.json` e preencha caminhos absolutos. Esse arquivo é ignorado pelo Git. O exemplo aponta para o próprio servidor, para uma verificação inicial:

```powershell
npm run peer -- sofiie-local list_specialists
```

Para outro agente, configure o executável confiável que expõe suas ferramentas em MCP stdio e conceda somente os nomes de ferramentas necessários em `allowTools`. O cliente valida ferramenta e tamanho dos argumentos antes de iniciar o processo, limita tempo de chamada e tamanho da mensagem/resposta, fecha a conexão ao terminar e não encaminha intencionalmente chaves de APIs. O SDK pode herdar variáveis básicas do sistema; isso não é isolamento de processo.

O modo `handoff` é fixado para um peer deste próprio projeto. Um programa externo tem sua própria configuração e pode executar ações ou usar serviços por conta própria. A lista de ferramentas e o MCP não garantem custo zero nem confinamento de software de terceiros. Leia seu código, custo e permissões antes de adicioná-lo.

Não existe `peer_call` no servidor MCP: uma entrada de modelo não pode escolher ou modificar programas a iniciar. O cliente outbound é uma operação local explícita pela CLI.

## Compatibilidade e evidência

O SDK instalado é a linha v2 oficial, com servidor stdio e cliente. Os testes do repositório validam a negociação padrão compatível com a era MCP 2025 e as ferramentas em um processo real. A negociação moderna 2026 e os hosts de terceiros precisam de homologação própria. Usar SDK v2 não demonstra que todas as revisões de protocolo foram testadas.

Até M1, a evidência é comunicação entre os próprios componentes deste projeto. Não há conta externa conectada, host instalado, peer de terceiros homologado ou integração de produção com o Sofiie.

## Fontes

- [SDK TypeScript oficial](https://ts.sdk.modelcontextprotocol.io/v2/)
- [Servidor stdio](https://ts.sdk.modelcontextprotocol.io/v2/serving/stdio.html)
- [Cliente oficial](https://ts.sdk.modelcontextprotocol.io/v2/get-started/first-client.html)
- [Comparação A2A e MCP](https://a2a-protocol.org/latest/topics/a2a-and-mcp/)
