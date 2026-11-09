# Modelagem e diagramas

O especialista `modeling` ajuda a escolher pergunta, nível de abstração, notação e evidências. A ferramenta de renderização verifica sintaxe e produz imagens, mas não comprova fidelidade ao domínio nem garante um diagrama perfeito.

## Referência examinada

Foi baixada uma cópia dos 32 arquivos do [Projeto PlantUML API de João Paulo Aramuni](https://github.com/joaopauloaramuni/projeto-de-software/tree/main/PROJETOS/Python/Projeto%20PlantUML%20API), incluindo licença da raiz, fontes, exemplos, imagens e guia. Origem fixada no commit `6e6140a2a2562e31a3eb035f4940f7b888909145`, diretório `PROJETOS/Python/Projeto PlantUML API`.

A cópia fica em `.local/references/aramuni-plantuml-api/`, fora do Git, com `provenance.json` contendo caminhos e hashes. Não é distribuída junto ao runtime. O repositório de origem declara MIT; preserve suas condições ao reutilizar código.

O cliente Python original comprime o texto e chama um servidor público HTTP; não define timeout na requisição examinada. O script principal captura erros individuais e imprime uma mensagem final genérica de sucesso. Portanto, não foi executado para validar esta integração, nem copiado como adaptador de produção. Essas observações são sobre os arquivos do commit indicado, não uma auditoria de todo o repositório.

## Renderização local entregue

O adaptador deste projeto usa a distribuição **PlantUML MIT 1.2026.9**, fixada pelo [release oficial](https://github.com/plantuml/plantuml/releases/tag/v1.2026.9), com SHA-256:

```text
835b2f2eb1d756da3f03bffdbd0baf252b4b858547a741ac8e972958a09c7f91
```

O JAR fica em `.local/tools/` e não entra no Git. O instalador opcional baixa somente esse arquivo e verifica o hash; não modifica Java global nem contrata serviço. Requer Java disponível no computador. O CI comum não instala o renderizador; o teste real indica explicitamente `skip` quando o JAR estiver ausente.

```powershell
npm run diagrams:setup
npm run diagram -- docs/diagrams/delivery-flow.puml svg
npm run diagram -- docs/diagrams/delivery-flow.puml png
```

A fonte precisa ser um `.puml` dentro do projeto. As saídas ficam em `docs/diagrams/generated/`, nos formatos SVG ou PNG. O programa não tem fallback para servidor externo. Java é iniciado sem shell, com perfil de segurança `SANDBOX`, heap limitado, timeout e limite de saída. O layout usa a opção interna Smetana em vez de exigir instalação global de um programa de layout.

Este adaptador aceita um bloco UML de até 16.000 caracteres/200 linhas e rejeita pré-processamento, funções e imagens externas. Essa restrição reduz a superfície exposta e deliberadamente não implementa toda a linguagem PlantUML. A CLI salva arquivos de saída; o MCP expõe somente `render_diagram`, que recebe fonte, usa o mesmo adaptador fixo e devolve PNG sem escrever no repositório. Não há seleção livre de processo, arquivo ou URL por entrada de modelo.

## Revisão necessária

1. Definir qual pergunta o diagrama responde e para quem.
2. Escolher notação e nível; não misturar estrutura, comportamento e implantação sem necessidade.
3. Conferir entidades, relações, direção, cardinalidade e estados contra o requisito/código.
4. Renderizar, corrigir erros e inspecionar rótulos, acentos, sobreposição, tamanho e leitura.
5. Manter `.puml` junto da imagem e registrar limite ou informação ainda não confirmada.

Exemplos renderizados desta entrega:

- [Fluxo da entrega ao aceite](diagrams/generated/delivery-flow.svg), [fonte](diagrams/delivery-flow.puml).
- [Consulta de especialista](diagrams/generated/consultation-sequence.svg), [fonte](diagrams/consultation-sequence.puml).

## Outras notações

Consulte UML, C4 ou outra notação conforme o problema, como descrito no [catálogo](references.md). PlantUML é uma ferramenta possível, não um padrão obrigatório para todos os projetos. Recursos avançados, bibliotecas de macros, includes, diagramas não UML e servidores remotos exigem avaliação própria; não estão liberados por este adaptador.

## Referência dentro do projeto

Uma cópia selecionada de 18 arquivos foi preservada em `tools/plantuml/upstream/`, sem modificar o original e sem copiar imagens/PDF para o Git. `tools/plantuml/reference-manifest.json` registra origem, licença, commit e hashes. Esse código é somente referência, enquanto a implementação adotada continua no módulo TypeScript testado. Consulte [o contrato da ferramenta](../tools/plantuml/README.md).
