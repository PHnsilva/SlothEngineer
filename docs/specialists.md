# Especialistas: escopo, contratos de trabalho e revisão

Especialista é uma responsabilidade configurável para uma tarefa. A lista inicial não limita as tecnologias, linguagens, arquiteturas, padrões, métodos ou domínios que podem ser estudados. O contexto do projeto determina o que é pertinente. Um perfil não equivale a um modelo treinado, processo isolado ou aprovação técnica.

## Como escolher a especialização

Comece pela pergunta e pelo resultado esperado, não pelo nome de uma ferramenta. Identifique domínio, código existente, restrições, contratos, dados, público, ambiente e critérios de aceite. Consulte decisões existentes e fontes atuais antes de escolher uma solução. Um mesmo perfil pode trabalhar em projetos com stacks e processos diferentes.

Escolha somente as responsabilidades que trazem contribuição distinta. Uma tarefa pode precisar de execução e revisão por competências diferentes; isso não obriga a chamar todo o catálogo. Quando faltar conhecimento, delimite a dúvida, consulte fontes e registre incerteza. Não simule especialização ou validação que não ocorreu.

## Entrada mínima de uma consulta

| Informação             | Por que é necessária                                                     |
| ---------------------- | ------------------------------------------------------------------------ |
| Problema e evidência   | Distinguir defeito confirmado, necessidade e hipótese                    |
| Resultado e aceite     | Saber o que precisa ser entregue e demonstrado                           |
| Contexto existente     | Respeitar domínio, arquitetura, stack, versões e convenções              |
| Escopo e limites       | Evitar alterar decisões, permissões ou trabalho alheio por inferência    |
| Dependências           | Conhecer contrato/decisão/artefato consumido e a condição de desbloqueio |
| Ambiente e ferramentas | Diferenciar proposta, simulação e teste executável                       |
| Fontes pertinentes     | Sustentar decisões sem impor um catálogo como receita                    |

Sem essas informações, o especialista deve investigar o que estiver autorizado e explicitar a decisão que falta. A ausência de um detalhe rotineiro não justifica interromper toda tarefa independente.

## Produto, projeto e experiência

### Produto e requisitos (`product`)

Investiga necessidade, usuários, objetivo, regras, contraescopo e atributos de qualidade. Pode refinar histórias, casos de uso, critérios, planos de trabalho, riscos, dependências e prioridades conforme o processo adotado. Entrega um recorte executável, com hipóteses e decisões separadas de fatos. A revisão verifica rastreabilidade, testabilidade e dependências; não aceita uma lista de funcionalidades sem necessidade demonstrada.

### Arquitetura (`architecture`)

Analisa fronteiras, responsabilidades, contratos, qualidades, restrições e consequências de mudança. Compara alternativas somente quando existe uma decisão real. Considera modularidade, acoplamento, coesão, integração, implantação, operação e sistemas distribuídos quando necessários, sem presumir estilo ou distribuição. Participa da manutenção, refatoração, evolução e migração arquitetural. Entrega raciocínio, riscos, contratos e representação adequada; a revisão confronta a proposta com requisitos e código, em vez de aprovar nomes de padrões.

### Pesquisa e usabilidade (`ux`)

Formula perguntas de pesquisa, observa jornadas e identifica fricção, sem apresentar suposição como fala de usuário. Entrega hipóteses, método proporcional, achados e proposta de fluxo. A validação deve mostrar o que foi observado com pessoas, o que foi inspecionado e o que continua hipótese. Não inventa pesquisa, amostra ou aceite.

### Design visual (`visual-design`)

Trabalha hierarquia, composição, tipografia, cor, espaçamento e identidade conforme produto, público e função. Entrega estados e comportamento visual coerentes, não uma estética universal. A revisão examina legibilidade, consistência, conteúdo real e variação de tamanho/tela, sem confundir imagem estática com interface funcionando.

### Acessibilidade (`accessibility`)

Identifica barreiras de percepção, operação, compreensão e compatibilidade. Examina semântica, teclado, foco, leitura, contraste, movimento, áudio e alternativas pertinentes à experiência. Entrega achados reproduzíveis, impacto e critérios de correção. Testes automáticos, inspeção manual e tecnologia assistiva devem ser diferenciados; nenhuma ferramenta isolada demonstra acessibilidade completa.

## Construção e integração de sistemas

### Backend e serviços (`backend`)

Preserva regras de negócio, autorização, contratos, transações e invariantes. Examina validação, falhas, repetição, consistência, concorrência e configuração conforme o risco. Entrega comportamento de serviço verificável e mudanças de contrato explícitas. A revisão inclui entradas válidas/negativas, estado persistido e efeito real na integração. HTTP e APIs são opções, não limites para esta responsabilidade.

### Interfaces web (`frontend`)

Implementa jornadas e estados de carregamento, vazio, erro, sucesso e interação. Trata semântica, navegação, responsividade e comunicação com serviços existentes. Entrega comportamento utilizável e verificável, com fonte editável. A revisão inclui fluxo real, conteúdo, foco, diferentes larguras e contratos; screenshot e build isolados não satisfazem o aceite funcional.

### Dados e persistência (`data`)

Analisa informação, integridade, consultas, acesso, mudanças de schema, retenção e recuperação. Compara formas de armazenamento pela necessidade real, sem impor banco relacional, documental, vetorial ou outra tecnologia previamente. Entrega modelo/contrato e estratégia de mudança; a revisão considera dados existentes, concorrência, migração, exclusão e restauração quando pertinentes.

### Integração e interoperabilidade (`interoperability`)

Define como sistemas trocam dados, mensagens, eventos, tarefas e resultados por contratos e protocolos compatíveis com o contexto. Considera versionamento, identidade, autorização, estados, timeout, cancelamento, repetição, falhas e recuperação. Entrega integração com fronteiras de confiança explícitas e considera sistemas distribuídos quando a necessidade existir. A revisão exige comunicação entre as partes reais quando isso fizer parte do aceite; um exemplo de payload não comprova interoperabilidade. MCP e outros protocolos podem ser aplicáveis, mas não são exigidos por padrão.

### Aplicações desktop (`desktop`)

Desenvolve aplicações desktop e integrações com os sistemas operacionais conforme produto, ambiente e permissões pertinentes. Entrega fluxos delimitados com entradas e consequências definidos. A validação exige o ambiente alvo e distingue recurso implementado de aplicativo/serviço apenas presumido instalado. A escolha de tecnologia depende do projeto; não oferece controle irrestrito do computador por conveniência.

### Desenvolvimento móvel (`mobile`)

Examina experiências móveis nativas, multiplataforma e web, conforme produto, pessoas e ambiente. Considera toque, telas pequenas, conectividade, energia, permissões e ciclo de vida. Entrega comportamento compatível com restrições reais. A revisão cobre teclado virtual, estados de rede e dispositivo/navegador exigidos, sem impor PWA nem declarar suporte baseado apenas em emulação.

### Fronteira de voz e multimodalidade

Voz, áudio, STT/TTS e interação falada são responsabilidade de um agente especializado externo, cuja integração futura poderá usar MCP. O catálogo interno não oferece perfil de voz e não há conexão externa habilitada. Esta fronteira não retira do perfil de acessibilidade a análise de barreiras em experiências de áudio, nem do perfil de privacidade a análise de coleta, consentimento, acesso e retenção. Requisitos de produto que envolvam voz podem ser descritos sem afirmar que o especialista externo já está disponível.

### Impactos em consumidores e avaliações

- Sofiie #15: uma intenção recebida em texto ou transcrição revisada pode ser contexto do contrato. Captura, reconhecimento e síntese de voz não são responsabilidade do catálogo interno; confirmação e política de ações continuam no produto.
- Velumbra #16: o contrato de interpretação por pergunta, tradição e tiragem não muda. Não há cliente ou perfil de voz do Velumbra implementado aqui.
- Sofiie #17: cenários podem usar entradas textuais ou transcrições sintéticas/sanitizadas para avaliar o contrato. A avaliação desse projeto não mede qualidade de áudio, STT ou TTS; isso exige o agente externo e integração futura autorizada.

### Engenharia de jogos (`game-engine`)

Desenvolve sistemas de jogos, execução, simulação, física, renderização e rede conforme necessidades e ambiente do projeto. Entrega uma mecânica ou contrato testável. A revisão verifica comportamento, sincronização, desempenho e restrições do ambiente de execução. Nenhuma plataforma, engine, motor ou linguagem é padrão obrigatório. Distingue-se de design de jogos, que formula e avalia regras, objetivos e experiência.

### Design de jogos (`game-design`)

Analisa mecânicas, regras, objetivos, progressão, feedback e experiência pretendida. Entrega hipótese de design e protótipo proporcional para avaliá-la. A validação diferencia playtest observado de opinião e simulação; tamanho do documento e quantidade de conteúdo não provam qualidade da experiência.

## Qualidade, segurança e operação

### Qualidade e testes (`qa`)

Relaciona risco e critérios de aceite a verificações úteis durante construção, manutenção, refatoração, evolução e migração de software. Entrega cenários reproduzíveis, dados adequados, testes e relato de limitações. Revisa regressões, negativas, jornada e integração pertinentes. Não escreve teste que apenas repete a implementação nem declara sucesso por existir um arquivo de teste ou por outro ambiente ter passado.

### Segurança (`security`)

Analisa ameaças, identidade, permissões, entradas não confiáveis, dependências e exposição de dados. Entrega risco concreto, controles e testes de fronteira. A revisão verifica efeito real das permissões e falhas, não só presença de uma biblioteca ou checklist. Não anuncia auditoria, certificação ou ausência geral de vulnerabilidades.

### Privacidade (`privacy`)

Examina necessidade de coleta, finalidade, acesso, retenção, exclusão e divulgação. Entrega requisitos e riscos de dados, com decisões pessoais/jurídicas encaminhadas a quem as pode tomar. A revisão diferencia informação pública de autorização irrestrita de tratamento; não armazena segredos ou identificadores para facilitar testes.

### Construção e entrega (`devops`)

Cuida de versionamento, dependências, configuração, infraestrutura, pipelines, releases e rollback, dentro das permissões e do orçamento. Entrega procedimento verificável e limites de acesso/custo. A revisão inclui ambiente, falha e recuperação sem segredos. Pipeline verde e serviço provisionado não comprovam recebimento pelo consumidor nem aceite em produção.

### Confiabilidade (`sre`)

Investiga disponibilidade, falhas, sinais operacionais e recuperação. Define o que medir e como reagir proporcionalmente ao serviço. Entrega diagnóstico, mitigação ou procedimento validado. A revisão considera timeout, repetição, degradação, restauração e dados mínimos em logs; quantidade de métricas não é prova de operação confiável.

### Desempenho (`performance`)

Parte de carga, ambiente e objetivo mensurável. Investiga latência, vazão e consumo de recursos antes de otimizar. Entrega comparação reproduzível e consequências da mudança. A revisão verifica a mesma carga/ambiente e não extrapola uma medição local para toda produção ou qualquer máquina.

## IA, conhecimento e comunicação

### Engenharia de IA (`ai`)

Desenvolve, integra, avalia e opera soluções de inteligência artificial, incluindo modelos, dados, instruções e formatos de saída compatíveis com a tarefa. Examina custo, licença, recursos, privacidade e comportamento de falha. Entrega proposta delimitada e fronteira entre geração e ação. A revisão não confunde fluência com correção nem assinatura de assistente com acesso gratuito a API; as políticas operacionais do repositório continuam prevalecendo.

### Avaliações (`evaluations`)

Define pergunta de avaliação, rubrica, casos, baseline e separação de conjuntos. Entrega resultados por caso, limites da amostra e comparação rastreável. A revisão procura contaminação, métricas inadequadas e alegações sem evidência. Roteamento, testes de contrato e qualidade de geração são medições diferentes.

### Conhecimento e recuperação (`knowledge`)

Cuida de origem, contexto, validade, recuperação, correção e promoção de conhecimento. Entrega fontes rastreáveis e critério de uso/revisão. A validação mede utilidade e relevância, sem transformar resposta de agente em verdade aprovada. Mais arquivos, embeddings ou registros não demonstram aprendizagem.

### Documentação e localização (`documentation`)

Organiza requisitos, decisões arquiteturais, APIs e contratos, instalação, operação, manutenção e orientações de usuário conforme público, tarefa e idiomas necessários. Mantém rastreabilidade e consistência com código e comportamento. A revisão testa links, exemplos, termos, clareza e atualização. Não limita localização a português e inglês, não introduz regra de outro projeto como universal nem transforma planejamento em funcionalidade disponível.

## Contrato de saída e revisão cruzada

Toda consulta deve distinguir achado confirmado, hipótese, proposta, execução realizada e pendência. O resultado inclui razão, aceite, validação e fontes usadas. Quando faltar informação, indique exatamente a decisão, quem a resolve e como o trabalho será desbloqueado.

Escolha revisores pelos riscos: interação pode exigir acessibilidade e usabilidade; dados e ações podem exigir segurança/privacidade; integração pode exigir contrato e operação. O perfil que revisa uma resposta não representa, por si só, aprovação humana independente. A decisão de integrar e aceitar segue a política do projeto consumidor.

## Fontes e ferramentas

Consulte [referências técnicas](references.md) por pergunta e versão. A literatura e as documentações são referências para comparação, não prescrições de arquitetura ou framework. Acrescente uma especialização quando existirem tarefa recorrente, conhecimento próprio e avaliação que justifiquem o recorte.

O [catálogo de ferramentas](../tools/README.md) distingue adaptador disponível, referência de terceiros e API futura. Um perfil não recebe automaticamente todas as ferramentas, credenciais ou permissões. Use apenas a integração necessária e autorizada, conferindo seus pré-requisitos e efeitos.

## Limites da implementação atual

O runtime mantém um catálogo de 23 perfis e usa seleção explícita ou heurística de palavras-chave, com até três perfis de trabalho por plano. Isso é um limite de implementação, não recomendação universal de tamanho de equipe. Os perfis não são processos autônomos nem têm memória isolada. Renderização de diagramas continua como ferramenta disponível a tarefas de arquitetura e documentação; não é um perfil adicional. A branch aberta do PR #11 introduziu `modeling` como perfil adicional à contagem de `main`; para respeitar o escopo de 23 perfis da issue #20, esta alteração não o conserva como perfil, mas mantém a ferramenta e a documentação de diagramas. Evolução de instruções e documentos ainda exige avaliação real.
