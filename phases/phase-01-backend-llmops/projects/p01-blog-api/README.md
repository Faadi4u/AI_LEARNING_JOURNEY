# Blog API — JWT Auth & Cost Tracking

A REST API built with NestJS and TypeScript, covering production-style
authentication, role-based access control, blog post/comment CRUD, and
a custom middleware that logs and tracks the cost of every API call.

Built as Mini Project 1 of a 40-week AI Infrastructure Engineer roadmap
(Phase 1: Backend + LLMOps Foundation).

---

## Features

- JWT authentication — register, login, access + refresh tokens
- Refresh token rotation (old token deleted on every refresh, single-use only)
- Logout from one device or all devices
- Role-based access control — `USER`, `ADMIN`, `SUPER_ADMIN`
- Ownership checks (a user can only modify their own data, unless ADMIN/SUPER_ADMIN)
- CRUD for posts and comments
- Input validation with Zod on every endpoint
- Cost tracking middleware — logs method, endpoint, status code, and
  response time for every API call
- Cost metrics endpoint — aggregated stats from the logged data
- Unit tests with Jest

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | NestJS |
| Language | TypeScript |
| Database | PostgreSQL (Neon) |
| ORM | Prisma |
| Auth | Passport.js, JWT, bcrypt |
| Validation | Zod (via nestjs-zod) |
| Testing | Jest |

---

## Project Structure

```
blog-api/
├── src/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── strategies/
│   │   │   ├── local-auth.strategy.ts
│   │   │   └── jwt-auth.strategy.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── local-auth.guard.ts
│   │   └── types/
│   │       └── safe-user.type.ts
│   ├── user/
│   │   ├── user.module.ts
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   └── dto/
│   │       ├── create-user.dto.ts
│   │       └── update-user.dto.ts
│   ├── post/
│   │   ├── post.module.ts
│   │   ├── post.controller.ts
│   │   ├── post.service.ts
│   │   └── dto/
│   ├── comment/
│   │   ├── comment.module.ts
│   │   ├── comment.controller.ts
│   │   ├── comment.service.ts
│   │   └── dto/
│   ├── cost-tracking/
│   │   ├── cost-tracking.module.ts
│   │   ├── cost-tracking.middleware.ts
│   │   ├── cost-tracking.service.ts
│   │   └── cost-tracking.controller.ts
│   ├── common/
│   │   ├── decorators/
│   │   │   └── roles.decorator.ts
│   │   ├── guards/
│   │   │   └── roles.guard.ts
│   │   └── pipes/
│   │       └── parse-int.pipe.ts
│   ├── prisma/
│   │   └── prisma.service.ts
│   └── main.ts
├── prisma/
│   └── schema.prisma
├── .env.example
└── README.md
```

> Structure reflects current progress and will be filled in as each
> module is built.

---

## Data Models

```
User          — id, name, email, password, role, timestamps
Post          — id, title, content, authorId, timestamps
Comment       — id, content, authorId, postId, timestamps
RefreshToken  — id, token, userId, expiresAt, timestamps
ApiLog        — id, userId, method, endpoint, statusCode, duration, timestamp
```

Relations:
- `User` has many `Post`, `Comment`, `RefreshToken`, `ApiLog`
- `Post` belongs to `User`, has many `Comment`
- `Comment` belongs to `User` and `Post`

---

## Getting Started

### Setup

```bash
git clone https://github.com/<your-username>/blog-api.git
cd blog-api
npm install
cp .env.example .env
npx prisma migrate dev
npm run start:dev
```

### Environment Variables

```env
DATABASE_URL=your_neon_postgres_connection_string
JWT_ACCESS_TOKEN=your_access_token_secret
JWT_REFRESH_TOKEN=your_refresh_token_secret
PORT=3000
```

---

## API Reference

### Auth

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | — | Register new user, returns tokens |
| POST | `/auth/login` | — | Login, returns access + refresh tokens |
| POST | `/auth/refresh` | Refresh token in body | Rotate refresh token, get new pair |
| POST | `/auth/logout` | Refresh token in body | Invalidate one refresh token |
| POST | `/auth/logout-all` | Bearer | Invalidate all refresh tokens for the user |

### Users

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/user` | Bearer (ADMIN/SUPER_ADMIN) | List all users |
| GET | `/user/:id` | Bearer (owner or ADMIN/SUPER_ADMIN) | Get a single user |
| PUT | `/user/:id` | Bearer (owner or SUPER_ADMIN) | Replace user |
| PATCH | `/user/:id` | Bearer (owner or SUPER_ADMIN) | Update user |
| DELETE | `/user/:id` | Bearer (owner or SUPER_ADMIN) | Delete user |

### Posts

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/posts` | — | List all posts |
| GET | `/posts/:id` | — | Get single post |
| POST | `/posts` | Bearer | Create post |
| PATCH | `/posts/:id` | Bearer (owner) | Update post |
| DELETE | `/posts/:id` | Bearer (owner) | Delete post |

### Comments

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/posts/:id/comments` | — | List comments on a post |
| POST | `/posts/:id/comments` | Bearer | Add comment |
| DELETE | `/comments/:id` | Bearer (owner) | Delete comment |

### Cost Tracking

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/cost/summary` | Bearer | Total request count and cost |
| GET | `/cost/by-endpoint` | Bearer | Cost breakdown per endpoint |

> Cost figures here track **this API's own request volume and cost**
> (a per-request flat rate), not third-party LLM token usage.

---

## Architecture Notes

**Refresh Token Rotation**
Access tokens expire in 15 minutes. Refresh tokens (7 days) are stored in
the database. On `/auth/refresh`, the old token is validated, deleted, and
a new access + refresh token pair is issued — so a stolen refresh token
can't be reused after it's been rotated.

**Role-Based Access Control**
Three roles: `USER`, `ADMIN`, `SUPER_ADMIN`. Routes use a `@Roles()`
decorator read by a custom `RolesGuard`. Update/delete routes additionally
check resource ownership in the controller, so a user can always manage
their own data regardless of role.

**Cost Tracking Middleware**
A NestJS middleware records every incoming request — method, endpoint,
status code, and response time — to the `ApiLog` table. The `/cost`
endpoints aggregate this data for a simple usage/cost dashboard.

---

## Testing

```bash
npm run test
npm run test:cov
```

Coverage target: 80%+.

---

## What I Learned

- Designed a 5-model schema (User, Post, Comment, RefreshToken, ApiLog)
  with relations before writing any code.
- Thought through ownership and cascade delete behavior up front.
- Connected Prisma to Neon and ran the first migration.
- Built user routes ( Get, Put, Patch, Delete)

---

## Status

- [x] Project setup, Prisma schema, Neon DB connection
- [ ] Auth (register, login, refresh, logout)
- [ ] RBAC
- [ ] Post CRUD
- [ ] Comment CRUD
- [ ] Cost tracking middleware
- [ ] Cost metrics endpoint
- [ ] Unit tests (80%+ coverage)
- [ ] Deployed