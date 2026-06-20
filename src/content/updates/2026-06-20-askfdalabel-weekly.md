---
title: "AskFDALabel: Orange Book RLD Search, Docker Refactor, and FTS Transition"
date: "2026-06-20"
project: "askfdalabel"
tags: ["Orange Book", "Docker", "FTS Search", "DrugTox"]
---

This week we launched dedicated Orange Book RLD and MAUDE device search interfaces, transitioned semantic core retrieval fully to Full-Text Search (FTS), refactored the Docker deployment suite, and implemented PostgreSQL schema improvements.

### Key Milestones
- **Orange Book & MAUDE Search:** Implemented a dedicated Orange Book Reference Listed Drug (RLD) search interface with dosage data linking. Integrated MAUDE medical device search into the unified local query interface.
- **Docker Deployment Refactor:** Replaced static compose configs with a dynamic `start_server.py` launch script supporting local/remote PostgreSQL options. Added low-memory configurations for resource-efficient deployments.
- **FTS Transition & Cleanup:** Removed all legacy embedding-related models, libraries, and scripts. Transitioned the semantic core search fully to Full-Text Search (FTS) for improved speed and simpler offline installs.
- **Drug Toxicity (DrugTox) Improvements:** Integrated NLP Agreement logic, detailed explanation endpoints, and fuzzy/disagree toggle filters to the DrugTox evaluation pipeline.
- **CITEXT Schema Update:** Configured PostgreSQL `CITEXT` extension to support case-insensitive username lookups.
- **Next.js & Hot-Reloading:** Switched Next.js development server to Webpack with watch polling enabled to support hot-reloading inside Windows Docker volumes.
- **Authentication Enhancements:** Added auto guest logins for deep links and fixed guest logout redirect bugs.
