# Catálogo de referências técnicas

Este catálogo organiza fontes conforme o problema. Não é uma lista de tecnologias obrigatórias nem uma tentativa de reunir tudo que existe. Linguagem, framework, método, estilo arquitetural, padrão de design, notação e registro de decisão são categorias distintas.

## Como consultar e ampliar

Identifique requisito, contexto, restrições e pergunta. Leia as decisões/contratos do projeto e consulte fontes primárias sobre APIs, protocolos, bibliotecas e normas. Compare opções pertinentes por qualidade, custo, risco, compatibilidade e manutenção. Não prescreva uma técnica só por aparecer aqui.

Registre URL, versão/data quando pertinente, conceito usado e efeito na decisão. Diferencie norma, artigo do autor, material didático e exemplo de implementação. Reconfirme preços, limites, versões e termos antes de integrar um serviço. Referência não autoriza gasto ou cópia de conteúdo sem licença.

## Organização e colaboração

Os [guias reutilizáveis](../guides/README.md) tratam de issues, dependências, quadro, contribuição e agentes sem impor metodologia. Consulte [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) e [dependências de issues](https://docs.github.com/en/rest/issues/issue-dependencies) para capacidades da plataforma.

Se o projeto adotar Scrum, Kanban ou outra abordagem, consulte sua fonte e a adaptação acordada. [Scrum Guide](https://scrumguides.org/) e [Kanban Guide](https://kanbanguides.org/the-kanban-guide/) são referências distintas, não um processo combinado obrigatório. [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow) orienta colaboração por branches/PRs e [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) é uma convenção opcional de mensagens.

## Arquitetura, princípios e padrões

| Tema                       | Fontes                                                                                                                                                 | Uso contextual                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Fundamentos                | [SWEBOK, IEEE Computer Society](https://www.computer.org/education/bodies-of-knowledge/software-engineering)                                           | Localizar conceitos de requisitos, projeto, testes e manutenção                      |
| Arquitetura                | [arc42](https://arc42.org/), [Martin Fowler](https://martinfowler.com/architecture/)                                                                   | Discutir contexto, fronteiras e atributos de qualidade                               |
| Decisões                   | [ADR](https://adr.github.io/)                                                                                                                          | Registrar decisão significativa e justificativa; não é estilo arquitetural           |
| Padrões corporativos       | [Catálogo de Martin Fowler](https://martinfowler.com/eaaCatalog/)                                                                                      | Comparar soluções de domínio, persistência e apresentação                            |
| Mensageria                 | [Enterprise Integration Patterns, autores](https://www.enterpriseintegrationpatterns.com/)                                                             | Canais, roteamento, transformação e tratamento de mensagens                          |
| Distribuição               | [Catálogo de Unmesh Joshi](https://martinfowler.com/articles/patterns-of-distributed-systems/)                                                         | Consistência, replicação e falhas quando houver distribuição real                    |
| Design e refatoração       | [Refactoring, Martin Fowler](https://refactoring.com/), [Game Programming Patterns, Robert Nystrom](https://gameprogrammingpatterns.com/contents.html) | Relacionar problema, forças e consequências, sem criar abstrações por catálogo       |
| Design orientado a objetos | [Projeto de Software, Aramuni](https://github.com/joaopauloaramuni/projeto-de-software)                                                                | Índice didático para princípios, GoF, GRASP e literatura; confirmar a fonte original |

Camadas, portas/adaptadores, eventos e serviços independentes são alternativas com custos diferentes. Escolha pela necessidade de mudança, implantação, operação e testes. Coesão, acoplamento e responsabilidade ajudam a avaliar uma solução; não obrigam uma arquitetura.

## Modelagem

[UML, OMG](https://www.omg.org/spec/UML/) define uma linguagem de modelagem. [C4, Simon Brown](https://c4model.com/) organiza níveis de visualização de arquitetura. [PlantUML](https://plantuml.com/) descreve/renderiza diagramas. [BPMN, OMG](https://www.omg.org/spec/BPMN/) é uma opção para processos. Não são sinônimos nem soluções para toda pergunta.

Escolha estrutura, sequência, estados, atividade, dados, implantação ou dependências conforme o que precisa explicar. Preserve fonte editável e valide contra código/requisito. Veja [modelagem local](modeling.md).

## Fontes por competência

| Competências             | Fontes para consulta                                                                                                                                                           | Limite de aplicação                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Produto/requisitos       | [SWEBOK](https://www.computer.org/education/bodies-of-knowledge/software-engineering), [material de Requisitos](https://github.com/joaopauloaramuni/engenharia-de-requisitos)  | Material didático complementa a fonte primária e o domínio do produto       |
| Serviços/APIs            | [HTTP, RFC 9110](https://www.rfc-editor.org/rfc/rfc9110), [OpenAPI](https://spec.openapis.org/oas/latest.html)                                                                 | Confirmar contrato e versão usados                                          |
| Interfaces web           | [HTML, WHATWG](https://html.spec.whatwg.org/), [CSS, W3C](https://www.w3.org/TR/CSS/)                                                                                          | Plataforma web, sem recomendar framework                                    |
| UX/design                | [Pesquisa GOV.UK](https://www.gov.uk/service-manual/user-research), [Design System GOV.UK](https://design-system.service.gov.uk/)                                              | Adaptar público, marca e contexto                                           |
| Acessibilidade           | [W3C WAI/WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)                                                                                                              | Automação não comprova acessibilidade completa                              |
| Qualidade                | [Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html), [SWEBOK](https://www.computer.org/education/bodies-of-knowledge/software-engineering) | Testes por risco e contrato, sem proporção universal                        |
| Segurança                | [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)                                                                                        | Selecionar requisitos relevantes; não declarar auditoria/certificação       |
| Privacidade              | [NIST Privacy Framework](https://www.nist.gov/privacy-framework)                                                                                                               | Risco; requisitos jurídicos precisam de análise própria                     |
| Entrega                  | [DORA: integração contínua](https://dora.dev/capabilities/continuous-integration/)                                                                                             | Práticas compatíveis com restrições e operação                              |
| Confiabilidade           | [SRE Book, Google](https://sre.google/sre-book/table-of-contents/)                                                                                                             | Sinais, objetivos e recuperação proporcionais ao serviço                    |
| Desempenho               | [Brendan Gregg](https://www.brendangregg.com/methodology.html)                                                                                                                 | Medir carga e recursos antes de otimizar                                    |
| Dados                    | [Documentação relacional](https://www.postgresql.org/docs/current/ddl.html)                                                                                                    | Exemplo de mecanismo; não obriga sua adoção                                 |
| IA/avaliações            | [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)                                                                                                           | Riscos e avaliação; qualidade depende de medição específica                 |
| Conhecimento             | [W3C PROV](https://www.w3.org/TR/prov-overview/)                                                                                                                               | Proveniência sem exigir implementação desse padrão                          |
| Integração/agentes       | [MCP](https://modelcontextprotocol.io/), [A2A](https://a2a-protocol.org/)                                                                                                      | Ferramentas e agentes independentes; confirmar o que foi implementado       |
| Desktop                  | [Aplicações Windows](https://learn.microsoft.com/windows/apps/)                                                                                                                | Consultar documentação do sistema alvo; exemplo não cobre todos os sistemas |
| Voz                      | [Web Speech API](https://wicg.github.io/speech-api/)                                                                                                                           | Referência web; execução local e implementações têm limites próprios        |
| Mobile                   | [Web App Manifest](https://www.w3.org/TR/appmanifest/)                                                                                                                         | Referência web; nativo usa documentação própria                             |
| Design de jogos          | [MDA, autores](https://www.cs.northwestern.edu/~hunicke/MDA.pdf)                                                                                                               | Análise de experiência, não receita de diversão                             |
| Jogos/simulação          | [Game Programming Patterns](https://gameprogrammingpatterns.com/contents.html)                                                                                                 | Consultar engine escolhida quando houver tarefa concreta                    |
| Documentação/localização | [Diátaxis](https://diataxis.fr/), [W3C Internationalization](https://www.w3.org/International/)                                                                                | Conteúdo por necessidade e contexto linguístico                             |

O runtime devolve fontes por especialista e indexa metadados na busca. Isso não significa leitura dos sites, recuperação de páginas completas ou validação automática de recomendações.

## Material do professor consultado

Foram examinados o perfil e READMEs de [João Paulo Aramuni](https://github.com/joaopauloaramuni), incluindo [Projeto de Software](https://github.com/joaopauloaramuni/projeto-de-software), [Desenvolvimento e Integração de Aplicações Web](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web), [Python](https://github.com/joaopauloaramuni/python), [Laboratório de Experimentação](https://github.com/joaopauloaramuni/laboratorio-de-experimentacao-de-software), [GitHub](https://github.com/joaopauloaramuni/github) e [Requisitos](https://github.com/joaopauloaramuni/engenharia-de-requisitos).

São índices e exemplos didáticos úteis. Não foi feita auditoria de todos os projetos ou links. Podem conter versões antigas, serviços com custo, termos próprios ou instruções inadequadas para outro projeto. As APIs identificadas ficam no [catálogo separado](api-catalog.md).
