# Contribuir

Contribuições devem resolver uma issue definida e preservar as fronteiras descritas em [requisitos](docs/REQUIREMENTS.md), [arquitetura](docs/ARCHITECTURE_PLAN.md) e [política de contribuição](docs/CONTRIBUTION_POLICY.md).

## Preparar

1. Verifique a issue, seus critérios de aceite, dependências, comentários e propostas abertas relacionadas.
2. Confirme o runtime exigido em `package.json` e o estado das dependências. Não instale toolchains globais desnecessárias.
3. Crie uma branch própria a partir da base apropriada. Para proposta empilhada, declare predecessor, SHA e ordem de integração.

## Implementar e validar

Mantenha alterações focadas na issue, preserve trabalho existente e adicione testes de comportamento para fronteiras relevantes. Execute `npm run check` para mudanças de código. Para documentos, confira coerência, referências internas e critérios afetados. Identifique explicitamente o que foi simulado, integrado ou executado em ambiente externo.

## Abrir a proposta

O PR deve explicar o problema, a alteração, a issue, a base/dependências, os comandos e resultados de validação, as limitações e o trabalho pendente. Solicite revisão independente. PR aberto ou checks verdes não representam aceite. Somente o mantenedor autorizado aprova PRs, integra alterações e aceita issues.

Não publique segredos, dados pessoais, memória privada ou casos de avaliação reservados. Não adicione serviço pago, fallback remoto ou implantação em produção sem autorização explícita.
