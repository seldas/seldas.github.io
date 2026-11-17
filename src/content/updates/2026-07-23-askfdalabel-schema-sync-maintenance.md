---
title: "AskFDALabel: Schema Sync Script & Session/Import Fixes"
date: 2026-07-23
project: "askfdalabel"
tags: ["Database", "Bug Fixes", "Maintenance"]
summary: "This week we added a targetable database schema sync script, hardened database environment-variable fallback, and fixed a guest-session login bug along with a batch-delete error in the label import script."
---

This week we added a targetable database schema sync script, hardened database environment-variable fallback, and fixed a guest-session login bug along with a batch-delete error in the label import script.

### Key Milestones

- **Schema Sync Script:** Added a targetable database schema sync script to `backend/webtest`, and a hardened `sync_schema.py` in both `data/` and `backend/webtest/` with more robust path and environment resolution.
- **PG Env Var Fallback:** Added support for individual `PG_*` environment variables as a fallback when constructing the database connection URL.
- **Guest Session Fix:** Fixed a no-op on login/register when an active guest session already existed.
- **Batch Delete Fix:** Fixed a `TypeError` in `db_07_import_labels.py` caused by incorrect batch-delete query composition.
