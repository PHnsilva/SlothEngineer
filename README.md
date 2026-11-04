# Sofiie Agents

Base local de especialistas para desenvolver e revisar o [Sofiie](https://github.com/PHnsilva/Sofiie) e outros projetos. Um orquestrador prepara a tarefa, seleciona perfis e indica revisores. Um servidor MCP permite que outros assistentes usem esse catálogo e essas ferramentas.

O objetivo de longo prazo é melhorar instruções, conhecimento e resultados com avaliações e revisão humana. Esta versão **não treina pesos de modelos** e não modifica projetos autonomamente.

## Estado inicial

| Disponível                                               | Limite atual                                                      |
| -------------------------------------------------------- | ----------------------------------------------------------------- |
| 25 perfis com missão e critérios próprios                | São especializações configuráveis, sem modelos treinados por área |
| Orquestrador com seleção explícita ou por palavras-chave | Produz planos; não executa a tarefa planejada                     |
| Servidor MCP stdio com 7 ferramentas                     | Sem endpoint público, autenticação HTTP ou A2A                    |
| Cliente MCP para peers locais autorizados                | Uso via CLI e configuração local revisada                         |
| Modo `handoff`, sem inferência                           | O assistente externo executa a análise por conta própria          |
| Adaptador Ollama opcional                                | Requer instalação e modelo local; não há modelo incluído          |
| Busca lexical com fontes e status                        | Sem embeddings; memória de lições aprovadas começa vazia          |
| Testes, avaliação de roteamento e CI                     | Não medem ainda qualidade de geração ou aprendizado               |

## Começar sem serviço pago

Pré-requisitos: **Node.js 24 LTS**, npm e Git. Não é necessário Docker, conta de API ou GPU para preparar planos e handoffs.

```powershell
git clone https://github.com/PHnsilva/sofiie-agents.git
cd sofiie-agents
npm ci
npm run check
npm run plan -- "Melhorar a interface frontend e a acessibilidade do Sofiie"
npm run consult -- accessibility "Revisar navegação com teclado e foco do formulário"
```

O último comando retorna instruções e a tarefa para você fornecer ao assistente que já utiliza. `inferenceExecuted: false` significa que nenhum modelo respondeu. O programa não transforma esse handoff em uma resposta simulada.

Para inferência local real, consulte [execução com Ollama](docs/local-models.md). O runtime lê variáveis do processo; `.env.example` é documentação e não é carregado automaticamente.

## Conectar outros assistentes por MCP

```powershell
npm run build
```

Adapte [config/mcp.example.json](config/mcp.example.json) com caminhos absolutos e registre o servidor em um host compatível com MCP stdio. Use diretamente `node caminho/dist/mcp/stdio.js`; mensagens de inicialização do npm não devem entrar no canal do protocolo. O formato exato de configuração depende do host.

Ferramentas: `list_specialists`, `get_specialist`, `plan_task`, `consult_specialist`, `search_knowledge`, `list_integrations` e `render_diagram`. A renderização exige o preparo local documentado, não chama servidor público e devolve PNG sem gravar arquivos via MCP.

O caminho inverso também existe: a CLI chama ferramentas de peers locais definidos por você. [Guia MCP e peers](docs/mcp.md) explica configuração, limites e o teste de integração. Nenhuma conexão foi adicionada automaticamente à sua conta ou a outro aplicativo.

## Guias e referências

Os [guias reutilizáveis](guides/README.md) orientam issues, dependências, Projects, contribuição e agentes em projetos solo e em equipe, sem impor metodologia ou stack. O [catálogo técnico](docs/references.md) separa fontes por assunto e o [catálogo de APIs](docs/api-catalog.md) registra possibilidades e condições de adoção. O especialista de [modelagem](docs/modeling.md) conta com renderização PlantUML local opcional. Os guias também estão disponíveis como recursos MCP somente de leitura.

## Ferramentas e APIs

A pasta [tools/](tools/README.md) reúne catálogo validado, adaptador local compartilhado e uma cópia selecionada do projeto PlantUML do professor, com licença, commit e hashes. A referência original não é carregada pelo runtime. APIs futuras aparecem como planejadas; nenhuma credencial ou chamada é habilitada pelo catálogo. Não foi criado um serviço separado sem necessidade.

## Especialistas

Produto e requisitos; arquitetura; backend; frontend; UX; design de interfaces; acessibilidade; QA; segurança; privacidade; DevOps; confiabilidade; desempenho; dados; engenharia de IA; avaliações; memória e recuperação; MCP e interoperabilidade; desktop; voz; experiência móvel; design de jogos; implementação de jogos e simulação; documentação e localização; modelagem e diagramas.

Cada tarefa seleciona até três perfis de trabalho e até três funções de revisão. Isso não inicia processos. O [guia de especializações](docs/specialists.md) detalha entradas, responsabilidades, entregas, revisão e limites de cada competência, com referências técnicas separadas.

## Estrutura

```text
src/
  agents/         catálogo e instruções
  orchestrator/   planejamento sem efeitos externos
  providers/      handoff e Ollama local
  mcp/            servidor stdio e cliente de peers
  memory/         recuperação de conhecimento versionado
  evals/          regressão do roteamento
  modeling/       renderização local opcional de diagramas
guides/           guias gerais para copiar e adaptar
tools/            catálogo, contratos e referências licenciadas
knowledge/        referências e lições aprovadas separadas
evals/            cenários públicos de regressão
tests/            testes unitários e comunicação MCP real
docs/             arquitetura, plano e operação
config/           exemplos sem credenciais
.github/          CI e modelos de issues/PR
```

## Plano e evolução

Leia o [plano do projeto](docs/roadmap.md), a [arquitetura](docs/architecture.md), o [ciclo de melhoria](docs/learning-loop.md) e a [política de custos](docs/costs.md). O backlog ficará nas [issues](https://github.com/PHnsilva/sofiie-agents/issues).

O [backlog revisado](docs/backlog.md) identifica entregas independentes e consumidores de pré-requisitos. Persistência, escrita e delegação independente exigem decisão e escopo próprios; não são tecnologias a adicionar automaticamente. A rotina diária do aplicativo Codex neste chat está ativa às 9h (America/Sao_Paulo). Ela usa o acesso já disponível e propõe alterações por PR; o runtime do repositório não contém scheduler próprio.

## Validação e contribuição

`npm run check` verifica formatação, tipos, testes, casos de roteamento e build. Os testes de Ollama usam respostas simuladas; os testes MCP iniciam processos reais deste repositório. Um teste entre componentes do próprio projeto não comprova integração com um agente de terceiros.

Abra uma issue com critério de aceite, trabalhe em branch própria e envie PR com evidências. Conhecimento só entra em `knowledge/approved.json` após revisão e evidência. Não publique dados pessoais, prompts privados, chaves ou respostas de usuários.

Veja [CONTRIBUTING.md](CONTRIBUTING.md), [AGENTS.md](AGENTS.md) e [SECURITY.md](SECURITY.md). Licença [MIT](LICENSE); dependências e modelos mantêm suas próprias licenças.
