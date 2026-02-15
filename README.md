# Chat Docs App

Aplicação em **Next.js + Tailwind + shadcn/ui + Prisma** com estrutura para:

- Login com email/senha + Google + GitHub + Microsoft
- Cadastro, recuperação de senha e verificação de e-mail
- Chat estilo ChatGPT com histórico, compartilhamento e exclusão
- Módulo administrativo para branding, métodos de login e **administração de usuários/cargos**
- Base de conhecimento com upload/link e categorização manual

## Subir Postgres com Docker Compose

```bash
cp .env.example .env
npm run db:up
```

Arquivo incluído: `docker-compose.yml` com serviço `postgres` e volume persistente.

## Configuração de ambiente

- `.env.example`: modelo completo
- `.env`: arquivo de desenvolvimento local (sem segredos de produção)

Variáveis principais:

```env
DATABASE_URL="postgresql://chatdocs:chatdocs@localhost:5432/chatdocs?schema=public"
AUTH_SECRET="troque-por-um-segredo-forte"
NEXTAUTH_URL="http://localhost:3000"
```

## Como executar

1. Instale dependências:

```bash
npm install
```

2. Suba o banco:

```bash
npm run db:up
```

3. Execute migrações:

```bash
npm run prisma:migrate
```

4. Rode a aplicação:

```bash
npm run dev
```

## Endpoints adicionados

- `POST /api/auth/register`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `GET/PATCH /api/admin/users` (listar e atualizar cargos)
- `GET/PUT /api/admin/settings`
- `GET/POST /api/knowledge/assets`
- `GET/POST /api/chat/conversations`

## Observações

- A UI está pronta para os módulos solicitados.
- Para produção, ainda é necessário acoplar envio real de e-mail (SMTP/provider), upload físico (S3/local), parsing/indexação e mecanismo RAG para responder estritamente com base na base de conhecimento.
