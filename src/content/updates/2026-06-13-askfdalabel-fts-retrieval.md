---
title: "AskFDALabel: Full-Text Search Core Transition & Docker Refactor"
date: "2026-06-13"
project: "askfdalabel"
tags: ["FTS", "Docker", "Webpack", "Terminology"]
---

Today we completed the transition of the semantic retrieval core to Full-Text Search (FTS), removing all legacy embedding models and dependencies. We also refactored the Docker configurations into a dynamic launcher and optimized Next.js Webpack watch polling.

### Key Milestones
- **Full-Text Search (FTS) Integration:** Removed all embedding-related models, vectors, scripts, and libraries. Transitioned core semantic retrieval fully to PostgreSQL Full-Text Search (FTS) to simplify offline deployments.
- **Docker Compose Launcher:** Consolidated Docker settings into a dynamic `start_server.py` setup script supporting local/remote database setups. Untracked developer-specific docker-compose files.
- **Next.js Watch Polling:** Enabled Webpack watch polling inside Next.js config to support reliable hot-reloading inside Windows Docker volumes.
- **Database Script Consolidation:** Relocated and consolidated database migration and importing scripts into `backend/database/scripts/`.
- **UI Terminology Sync:** Renamed workspaces and clinical projects to "tasks" for UI consistency.
