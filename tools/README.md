# Ferramentas, adaptadores e referências de APIs

Esta pasta organiza capacidades que humanos e agentes podem consultar e, quando houver implementação e autorização, executar. O [catálogo](catalog.json) informa o estado de cada entrada. Não é um carregador de plugins: comandos e código não são executados a partir de texto desse arquivo.

## Estados e responsabilidade

| Categoria               | Estado           | O que significa                                                                            |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------------------ |
| Adaptador local         | `implemented`    | Código integrado e testes disponíveis; ainda exige os pré-requisitos locais documentados   |
| Referência de terceiros | `reference-only` | Fonte para estudo/comparação, preservada com autoria/licença; não é carregada pelo runtime |
| API candidata           | `planned`        | Finalidade e fontes registradas; não há cliente, credencial ou chamada remota habilitada   |

Uma entrada no catálogo não comprova conta, acesso, disponibilidade ou gratuidade do provedor. O registro é retornado por `list_integrations` e esta orientação está disponível como recurso MCP.

## Estrutura

```text
tools/
  catalog.json                  estados, fontes e restrições
  plantuml/
    README.md                   contrato do adaptador adotado
    reference-manifest.json     origem e hashes da cópia selecionada
    upstream/                   código original do professor, somente referência
  templates/
    integration-manifest.json   ficha para propor outra integração
```

O adaptador executável fica em `src/modeling/plantuml.ts`, reutilizado pela CLI e pela ferramenta MCP. Mantê-lo dentro do código TypeScript preserva build/tipos/testes únicos. `tools/` reúne a descoberta, a documentação e referências; não duplica runtime ou instala cada exemplo como um serviço.

## PlantUML disponível

Depois de preparar o JAR local verificado e ter Java disponível, use a [CLI ou ferramenta MCP de diagramas](plantuml/README.md). Não há chamada a servidor público, API paga ou escrita de arquivo pela ferramenta MCP. O conteúdo precisa ser revisado; renderização válida não garante o significado correto.

## Quando separar uma API em outro projeto

Comece com módulo/adaptador neste repositório se há um consumidor, mesma política de acesso e ciclo de mudança simples. Separe para pacote/repositório/serviço quando houver consumidores independentes, credenciais ou fronteiras de confiança distintas, implantação própria, requisitos de escala ou manutenção por outra equipe. Registre esses motivos antes de criar infraestrutura.

O exemplo do professor permanece separado do adaptador porque tem autoria, licença e comportamento operacional próprios. Essa separação de código não exige hospedar outra API. Uma implementação futura pode reutilizar conceitos ou código licenciado depois de revisão e testes, sem copiar suas chamadas HTTP por padrão.

## Adicionar uma integração

Abra uma issue própria com necessidade, consumidor, contrato, licença, dados, credenciais, custo, limites, timeout, erros, repetição e evidência ponta a ponta. Use a [ficha de integração](templates/integration-manifest.json) como checklist, não como código executável.

Só marque como implementada depois de existir adaptador validado, testes de fronteira e documentação do que foi realmente homologado. Exponha ao MCP uma ferramenta específica com schema fechado; não ofereça shell, URL livre, seleção de executável ou acesso genérico a credenciais. A concessão de ferramentas a agentes deve seguir necessidade e autorização.
