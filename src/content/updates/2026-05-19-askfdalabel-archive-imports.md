---
title: "AskFDALabel: Supporting XML Archive Imports & Offline Deployments"
date: "2026-05-19"
project: "askfdalabel"
tags: ["Data Ingestion", "Offline Search", "SPL Parsing"]
---

Today we focused on enhancing the database importing scripts to support direct XML imports from Structured Product Labeling (SPL) archives, which is crucial for air-gapped system deployments.

### Key Milestones
- **Archive Ingestion:** Added `scripts/db_init/db_08_import_archive_labels.py` for direct folder imports of Structured Product Labeling XML batches.
- **Offline Search Fallback:** Configured Full-Text Search (FTS) fallback mechanisms to allow conversational queries when external LLM/embedding APIs are unreachable.
- **Database Configuration:** Unified Oracle/PostgreSQL environment settings to resolve backend connection pool issues.
