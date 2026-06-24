# Phase 1 — Backend + LLMOps Foundation

Building the production backbone that every AI system depends on:
a robust NestJS API with JWT auth, PostgreSQL persistence, Redis caching,
structured observability, and full LLM cost tracking from day one.

---

## Objectives

- Build and ship a production-grade REST API with NestJS and TypeScript
- Implement JWT authentication with refresh token rotation
- Set up PostgreSQL with Prisma ORM, Redis caching, and BullMQ queues
- Add structured logging, OpenTelemetry tracing, and correlation IDs
- Track LLM API cost per request with a working analytics interface
- Achieve 80%+ unit test coverage across both projects

---

## Projects

| # | Project | Description |
|---|---------|-------------|
| P01 | [Blog API with JWT & Cost Tracking](./projects/p01-blog-api/) | Full REST API — auth, CRUD, input validation, per-request LLM cost logging |
| P02 | [LLMOps Dashboard](./projects/p02-llmops-dashboard/) | Prompt version control, A/B test scaffolding, token analytics, error rate by model |

---

## Notes

Learning notes, architecture decisions, and concept breakdowns live in [`notes/`](./notes/).

```
notes/
├── 01-typescript-advanced.md       ← generics, decorators, utility types
├── 02-nestjs-architecture.md       ← DI, Guards, Pipes, Interceptors
├── 03-jwt-auth-patterns.md         ← access/refresh flow, rotation strategy
├── 04-observability.md             ← OpenTelemetry, Winston, correlation IDs
├── 05-cost-tracking-model.md       ← token counting, cost per model, aggregation
└── 06-llmops-concepts.md           ← prompt versioning, A/B testing, drift basics
```

---

## Skills Covered

**TypeScript**
Generics · Decorators · Utility types · Strict mode patterns

**NestJS**
Dependency Injection · Guards · Pipes · Interceptors · Exception filters · Modules

**Database**
PostgreSQL schema design · Prisma ORM · Migrations · Redis caching patterns

**Auth**
JWT access + refresh tokens · bcrypt · RBAC with custom guards · Passport.js

**Validation**
Zod runtime validation · class-validator decorators · DTO patterns

**Observability**
Winston structured logging (JSON) · OpenTelemetry spans & traces · Correlation IDs · Request/response logging

**LLM Cost Tracking**
Token counting per prompt · Cost per model · Per-request middleware · Aggregated analytics

**Testing**
Jest unit tests · Supertest HTTP tests · 80%+ coverage requirement

---

## Deliverables

- [ ] P01 GitHub repo with 25+ meaningful commits
- [ ] P02 GitHub repo with 30+ meaningful commits
- [ ] Both projects live-deployed or Docker Compose runnable
- [ ] 80%+ test coverage on both projects
- [ ] Notes folder complete with all 6 concept files
- [ ] Cost metrics visible in P02 dashboard