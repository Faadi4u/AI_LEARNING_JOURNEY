# AI Engineering Journey

A structured, project-driven learning path toward becoming a senior **AI Infrastructure / AI Platform Engineer**.
Every phase ends with production-grade projects — no toy examples, no tutorial clones.

---

## Goal

Build deep, demonstrable expertise across the full AI engineering stack:
from backend APIs and LLMOps foundations, through advanced RAG, agentic systems, multimodal AI,
real-time infrastructure, and enterprise-grade production systems — culminating in a live multi-tenant SaaS platform.

---

## Structure

```
ai-engineering-journey/
├── README.md                          
└── phases/
    ├── phase-01-backend-llmops/
    │   ├── README.md
    │   ├── notes/
    │   └── projects/
    │       ├── p01-blog-api/
    │       └── p02-llmops-dashboard/
    ├── phase-02-advanced-rag/
    ├── phase-03-agentic-systems/
    ├── phase-04-multimodal-ai/
    ├── phase-05-realtime-ai/
    ├── phase-06-production-infrastructure/
    ├── phase-07-llmops-evaluation/
    ├── phase-08-advanced-optimization/
    └── capstone-enterprise-saas/
```

---

## Phases at a Glance

| # | Phase | Core Focus | Projects |
|---|-------|-----------|---------|
| 1 | Backend + LLMOps Foundation | NestJS, PostgreSQL, Redis, Cost Tracking | 2 |
| 2 | Advanced RAG & Retrieval | Vector DBs, Hybrid Search, GraphRAG, Reranking | 4 |
| 3 | Agentic Systems | Tools, Function Calling, Agent Loops, Orchestration | 3 |
| 4 | Multimodal AI | Vision, Audio, Documents, Cross-Modal Search | 3 |
| 5 | Real-Time AI Systems | WebSockets, Streaming, Live Agents, SSE | 3 |
| 6 | Production Infrastructure | Model Serving, Load Balancing, Distributed Systems | 3 |
| 7 | LLMOps & Evaluation | A/B Testing, Drift Detection, Feedback Loops | 3 |
| 8 | Advanced Optimization | Reasoning Models, Token Caching, Compliance | 3 |
| ★ | Capstone: Enterprise SaaS | Multi-tenant Platform — everything integrated | 1 |

---

## Tech Stack

**Languages & Runtime**
TypeScript 5.x · Node.js 18+ · Python 3.11 · SQL

**Frameworks**
NestJS 10.x · Express.js · tRPC

**Databases**
PostgreSQL 14+ (RLS, pgvector) · Redis 7+ · Neo4j 5.x · Pinecone · Weaviate · Milvus

**AI / ML**
OpenAI API · Anthropic Claude · LangChain · LangGraph · RAGAS · vLLM · Ollama

**Infrastructure**
Docker · Kubernetes · AWS (RDS, ECS, ECR, S3) · Terraform · GitHub Actions

**Observability**
OpenTelemetry · Prometheus · Grafana · Sentry · Winston

**Testing**
Jest · Supertest · autocannon

---

## Commit Convention

```
[Phase-X Project-Y] <verb>: <what was done>

Examples:
[Phase-1 P01] feat: implement JWT authentication with refresh tokens
[Phase-1 P01] feat: add cost tracking middleware for LLM calls
[Phase-1 P01] test: add unit tests for auth guard (85% coverage)
[Phase-1 P01] fix: resolve token expiry edge case on refresh
[Phase-1 P01] docs: update README with API endpoint reference
[Phase-2 P03] feat: implement hybrid BM25 + semantic search pipeline
[Phase-3 P06] feat: add multi-tool agent with error recovery
```

**Verbs:** `feat` · `fix` · `test` · `docs` · `refactor` · `perf` · `chore`


---

## Quality Standards

Every project in this journey ships with:

- 80%+ test coverage (Jest)
- Structured logging (Winston, JSON format)
- OpenTelemetry tracing
- Cost tracking per request/operation
- README with setup, architecture, and API docs
- Live deployment or Docker Compose for local reproduction

---

## Progress

- [x] Phase 1 — Backend + LLMOps Foundation
- [ ] Phase 2 — Advanced RAG & Retrieval
- [ ] Phase 3 — Agentic Systems
- [ ] Phase 4 — Multimodal AI
- [ ] Phase 5 — Real-Time AI Systems
- [ ] Phase 6 — Production Infrastructure
- [ ] Phase 7 — LLMOps & Evaluation
- [ ] Phase 8 — Advanced Optimization
- [ ] Capstone — Enterprise SaaS Platform

---

> Built in public. Every commit is real work.