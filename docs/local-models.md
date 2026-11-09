# Inferência local opcional

O projeto funciona sem Ollama para catálogo, planejamento, recuperação e handoff. Inferência é opcional e cada operador escolhe um modelo local após conferir licença, recursos e qualidade na própria máquina.

## Preparação

1. Confira RAM livre, GPU/VRAM e espaço em disco. RAM total e VRAM anunciada não comprovam disponibilidade para o modelo.
2. Escolha um modelo quantizado e confira a licença, o tamanho em disco e o comportamento em português. Não há modelo padrão ou alegação de qualidade para todas as máquinas.
3. Inicie Ollama em modo local com `OLLAMA_NO_CLOUD=1`, limitado a `127.0.0.1`. Siga a [documentação oficial](https://docs.ollama.com/faq#how-do-i-disable-ollama-cloud-features).
4. Baixe um modelo para uso local, confira `ollama list` e use o nome/tag exato. Verifique os arquivos e temporários do runtime e do modelo antes de começar.

## Executar em PowerShell

```powershell
$env:SOFIIE_PROVIDER = 'ollama'
$env:SOFIIE_MODEL = 'NOME_EXATO_DO_MODELO_LOCAL'
$env:SOFIIE_MAX_INPUT_CHARS = '4000'
$env:SOFIIE_MAX_MODEL_BYTES = '2000000000'
$env:SOFIIE_CONTEXT_TOKENS = '4096'
$env:SOFIIE_MAX_GENERATION_TOKENS = '256'
$env:SOFIIE_TIMEOUT_MS = '60000'
$env:SOFIIE_MAX_CONCURRENT_INFERENCES = '1'
npm run consult -- backend "Propor critérios de aceite para uma API de tarefas"
```

Troque o placeholder pelo nome instalado. Não se trata de um modelo fornecido pelo projeto. Para voltar ao modo sem inferência:

```powershell
$env:SOFIIE_PROVIDER = 'handoff'
```

## Limites do adaptador

- Host fixo `http://127.0.0.1:11434`, sem redirect nem URL configurável.
- Somente nomes locais sem `cloud`, URL ou namespace; exige correspondência exata em `/api/tags`.
- Os limites podem ser definidos por ambiente: `SOFIIE_MAX_INPUT_CHARS` (5–4.000; padrão 4.000), `SOFIIE_MAX_MODEL_BYTES` (1–16.000.000.000; padrão 2.000.000.000), `SOFIIE_CONTEXT_TOKENS` (512–8.192; padrão 4.096), `SOFIIE_MAX_GENERATION_TOKENS` (16–1.024; padrão 256), `SOFIIE_TIMEOUT_MS` (1.000–120.000; padrão 60.000) e `SOFIIE_MAX_CONCURRENT_INFERENCES` (1–4; padrão 1).
- O tamanho informado por `/api/tags` é comparado com o limite do modelo antes da geração. Isso limita o arquivo selecionado, mas não aplica um limite rígido à memória do processo: cache/KV, contexto, backend e sistema operacional também usam RAM/VRAM.
- O timeout compartilhado cobre a verificação do modelo e a inferência. Não há retry, fallback de provedor ou troca automática para nuvem. Um modelo lento pode atingir o limite e produzir erro explícito.
- A concorrência é contada dentro de cada processo Node; ela não coordena outros processos Ollama ou outras cópias do runtime.
- Nenhuma ferramenta é fornecida ao modelo. O resultado é texto proposto, marcado como não confiável.
- Resposta incompleta ou erro explícito não vira resultado de sucesso.

Um host pode fazer múltiplas chamadas MCP; o padrão permite uma inferência local simultânea por processo. Não há fila persistente, continuidade após reinício ou execução 24 horas.

Os testes de contrato usam respostas simuladas de `/api/tags` e `/api/chat`, sem download. Eles não provam qualidade, velocidade, licença ou execução real de um modelo. Registre esses dados em M1.
