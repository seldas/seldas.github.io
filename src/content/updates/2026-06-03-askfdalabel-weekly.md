---
title: "AskFDALabel: Oracle Migration, Celery Integration, and UI Refactoring"
date: "2026-06-03"
project: "askfdalabel"
tags: ["Oracle DB", "Celery", "UI Refactor", "Token Tracking"]
---

This week we migrated to Oracle FDALabel DB priority, optimized deployment scaling with Celery/Redis, refactored the search results table, and improved internal AI model token tracking.

### Key Milestones
- **Oracle Migration & Database Sync:** Migrated backend querying priority to Oracle FDALabel database while deprecating openFDA. Decoupled database schema sync scripts from the Flask app context.
- **At-Scale Celery & Docker Configurations:** Integrated Celery and Redis into the task pipeline. Separated Docker configurations into standard dev (hot-reload) and production (nginx proxy) modes.
- **UI Refactoring (v3.0):** Streamlined Results table alignment, merged Generic Name and RLD columns, added an About panel, and corrected Next.js base path routing for hero and icon images.
- **AI Search & Autocorrect Routing:** Moved AI search execution to the homepage to improve loading feedback and implemented keyword autocorrect redirect routing.
- **ELSA & vLLM Token Tracking:** Integrated input/output token usage tracking for Elsa and vLLM models, and activated Llama/Elsa in preferences for internal environments.
- **Access Control:** Implemented start page guest restrictions and user deactivation modals.
