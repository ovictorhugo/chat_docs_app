# Chat Docs App

Aplicação em **Next.js + Tailwind + shadcn/ui + Prisma** com estrutura para:

- Login com email/senha + Google + GitHub + Microsoft
- Cadastro, recuperação de senha e verificação de e-mail
- Chat estilo ChatGPT com histórico, compartilhamento e exclusão
- Módulo administrativo para branding e métodos de login
- Base de conhecimento com upload/link e categorização manual

## Como executar

1. Instale dependências:

```bash
npm install
```

2. Configure variáveis em `.env`:

```env
DATABASE_URL="postgresql://..."
AUTH_SECRET="..."
AUTH_GOOGLE_ID="..."
AUTH_GOOGLE_SECRET="..."
AUTH_GITHUB_ID="..."
AUTH_GITHUB_SECRET="..."
AUTH_MICROSOFT_ENTRA_ID_ID="..."
AUTH_MICROSOFT_ENTRA_ID_SECRET="..."
AUTH_MICROSOFT_ENTRA_ID_ISSUER="..."
```

3. Execute migrações:

```bash
npm run prisma:migrate
```

4. Rode a aplicação:

```bash
npm run dev
```

## Observações

- Esta entrega implementa **estrutura completa de telas e modelagem de dados**.
- Para produção, faltam integrações de envio de e-mail, pipeline de indexação semântica da base de conhecimento e inferência LLM com RAG restrito aos documentos cadastrados.
