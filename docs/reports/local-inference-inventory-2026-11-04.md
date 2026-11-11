# Inventário para inferência local — 2026-11-04

## Resultado desta etapa

O inventário foi feito antes de instalar ferramentas ou modelos. Ainda não há seleção de modelo nem evidência para estimar desempenho. A etapa seguinte da issue #1 fica condicionada a identificar um modelo, licença, tamanho e compatibilidade com esta máquina e com armazenamento exclusivamente em `C:`. Nenhum arquivo foi baixado e nenhum serviço foi iniciado.

## Evidência coletada

Consulta local somente de leitura em 2026-11-04:

| Recurso                                     | Resultado observado                                                                               |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Sistema                                     | Windows 11 Pro                                                                                    |
| CPU                                         | Intel Core i3-10100F, 4 núcleos e 8 processadores lógicos                                         |
| Memória física total                        | 15,86 GiB                                                                                         |
| Memória física livre no momento da consulta | 7,39 GiB                                                                                          |
| GPU                                         | AMD Radeon RX 580 2048SP, driver 31.0.21924.61                                                    |
| Memória reportada pelo adaptador gráfico    | 4.293.918.720 bytes (aprox. 4 GiB reportados; disponibilidade para inferência não verificada)     |
| Unidade C:                                  | 254.958.104.576 bytes totais; 6.494.130.176 bytes livres (aprox. 6,05 GiB)                        |
| Node.js                                     | v24.19.0; atende ao intervalo declarado pelo projeto (`>=24 <25`)                                 |
| Ollama                                      | Não encontrado no `PATH` nem nas pastas pesquisadas `C:\Program Files`, `C:\SDKs` e `C:\DevTools` |

Os valores de memória livre são uma fotografia momentânea. A memória anunciada pela GPU não comprova que o driver, backend de inferência ou modelo escolhido possam utilizá-la. A busca do executável Ollama foi limitada às localizações acima; não foi inspecionado conteúdo privado do usuário nem consultado um servidor Ollama.

## Decisão

Não selecionar ou instalar um modelo nesta etapa. O inventário por si só não permite confirmar tamanho quantizado, licença, suporte atual ao Windows e à RX 580, memória realmente utilizável, espaço temporário, nem qualidade em português. Com somente 6,05 GiB livres em `C:`, falta uma comparação entre o espaço disponível e a soma de runtime, pesos do modelo e temporários. Definir um limite numérico de espaço sem escolher candidato seria especulativo.

Nenhum modelo foi executado. Não há latência, consumo durante inferência, saída em português, teste de timeout ou comportamento real de indisponibilidade. Os testes simulados existentes do adaptador não satisfazem esses critérios.

## Condição para continuar

Antes de instalar, avaliar candidatos usando documentação oficial atual e registrar para cada um versão/tag, quantização, licença, tamanho do download e armazenamento em disco, requisito de RAM/VRAM, compatibilidade do runtime e suporte ao idioma. Selecionar somente candidato compatível com o espaço efetivamente livre em `C:` e com margem observada para o runtime e seus temporários. Confirmar caminho de instalação/configuração em `C:` e modo sem nuvem antes de baixar. Se não houver candidato compatível, a issue continua bloqueada até liberar armazenamento em `C:` ou revisar a máquina, sem recorrer a serviços pagos ou fallback remoto.

Depois da escolha e instalação, registrar comando reproduzível, consulta sintética em português, modelo/tag efetivamente usado, latência, RAM/VRAM, saída marcada como não confiável e falhas controladas. Isso ainda exige execução real antes de qualquer aceite da issue #1 ou baseline da issue #3.
