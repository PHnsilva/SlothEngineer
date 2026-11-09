# Inferência local e limites configuráveis — 2026-11-09

## Issue e dependência

- Issue: [#1 — validar inferência local](https://github.com/PHnsilva/SlothEngineer/issues/1), S2, tamanho L (8 unidades).
- Implementação continua o PR existente [#21](https://github.com/PHnsilva/SlothEngineer/pull/21), sem duplicá-lo.
- A issue depende do contrato e plano da #24. O artefato do PR #14 foi usado provisoriamente no commit `6338bb2515083c27bc7596326b3e18c513eb54c0` (HEAD do PR; base atual do PR: `feat/8-metodologia-referencias-modelagem` em `b6d46c859830f547615bfad563c87e835be65edf`). O PR #21 fica empilhado sobre o PR #14; ambos continuam abertos para revisão de Pedro. Não houve aceite, merge ou fechamento.

## Mudanças implementadas

- `src/providers/model.ts`: adiciona limites configuráveis para entrada, tamanho do arquivo do modelo, contexto, geração, timeout compartilhado e concorrência por processo. Valores fora das faixas são rejeitados; tamanho excessivo bloqueia a geração. A API segue fixada em loopback, sem redirecionamento, retry ou fallback remoto.
- `tests/provider.test.ts`: valida defaults, faixas, modelo grande, entrada acima do limite, timeout inválido e os parâmetros usados pela chamada local.
- `docs/local-models.md`: documenta configuração e limites. O limite de bytes não é um teto rígido de RAM do processo; também não coordena outros processos Ollama.
- Consulta CLI com `SOFIIE_PROVIDER=handoff`: resultado `status=handoff`, `inferenceExecuted=false`, informa que nenhum modelo foi executado.
- Com Ollama parado e provedor local selecionado: a CLI encerrou com `fetch failed` e código de saída 1; nenhum fallback foi acionado.

## Inventário e execução real nesta máquina

Todos os caminhos abaixo ficam em C:. Foi usado Ollama portátil 0.40.14, obtido do release oficial para Windows amd64 e conferido pelo SHA-256 `65d68cade6cf6375f398b518224f8c8a15e062387f38cf477abfc848de7e7e29`. Serviço local escutou apenas em `127.0.0.1:11434`; `OLLAMA_NO_CLOUD=1` foi confirmado no log. Inferência ocorreu em CPU AVX2; GPU foi não usada.

- Windows 11 Pro, build 26200; Intel i3-10100F (4 núcleos/8 threads), 15,86 GiB RAM; GPU AMD RX 580 2048SP com aproximadamente 4 GiB anunciados. RAM livre antes dos testes: cerca de 8,29 GiB.
- Espaço livre em C:: 118,62 GiB antes dos downloads, aproximadamente 113,98 GiB depois.
- Qwen2.5-Coder 1.5B Q4_K_M, licença Apache-2.0, armazenado no cache Ollama em C:. Uma consulta sintética terminou em 19,98 s, mas a proposta de comando continha interpretação incorreta da versão. A sugestão não foi executada.
- Qwen2.5-Coder 7B Q4_K_M, tag Ollama `qwen2.5-coder:7b`, licença upstream Apache-2.0, aproximadamente 4,7 GB em disco. Com os limites anteriores de 1.024 tokens e 60 s, a consulta atingiu timeout em 60,69 s. Com contexto 2.048, limite de arquivo 6.442.450.944 bytes, timeout 120 s e geração 128, terminou em 46,94 s com saída truncada/inválida. Com geração 256, terminou em 68,72 s, mas ainda produziu código DevOps incorreto. A saída não foi executada.
- Durante o teste de 7B, o monitor local indicou processo com pico de working set de aproximadamente 4,658 GiB, mínimo de RAM livre de 3,60 GiB e modelo carregado reportado em `/api/ps` entre 4,95 e 5,07 GB, com VRAM zero e contexto 2.048.

Os casos foram sintéticos e limitados a uma consulta de DevOps. Isso não mede acurácia geral, não compara todos os modelos disponíveis e não constitui baseline. A execução real ocorreu pela CLI; integração MCP e uso por Sofiee/Velumbra não foram homologados.

## Validação

`npm run check` passou após a alteração: formatação, TypeScript estrito, 25 testes (23 aprovados, 0 falhas, 2 ignorados por ausência do renderer local), 13/13 regressões públicas de roteamento e build. Testes contratuais com respostas simuladas não provam qualidade do modelo; as observações reais acima vieram das execuções CLI locais.

## Limites, bloqueio e próxima ação

O critério seguro de entrega fica registrado: nenhum candidato testado produziu uma resposta correta para a consulta sintética selecionada nos limites observados, portanto não há modelo útil demonstrado para este caso nesta máquina. O caminho continua fail-closed e handoff honesto. Isso não sustenta uma conclusão universal sobre Qwen, outros prompts ou outros equipamentos.

Uma transferência GGUF direta interrompida deixou um arquivo parcial de 70.701.056 bytes em `C:\DevData\Codex\agents\local-inference\2026-11-09\model-sources\qwen2.5-coder-7b-instruct-q4_k_m.gguf`. A tentativa de remoção foi bloqueada pela proteção de comandos do aplicativo; o arquivo permanece isolado, sem ser carregado pelo Ollama. Não houve tentativa de contornar essa proteção. Próximo passo para o repositório: Pedro revisar o PR #21 empilhado no #14; decidir se deseja nova rodada de seleção/avaliação local ou manter o handoff até haver outro candidato e caso de teste aprovado.
