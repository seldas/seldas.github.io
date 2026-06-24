---
title: "AskFDALabel: Timezone, Oracle DB & DrugTox Script Fixes"
date: "2026-06-24"
project: "askfdalabel"
tags: ["Oracle DB", "Timezone", "DrugTox", "Bug Fixes"]
---

Today we focused on stabilizing backend script executions, applying timezone fixes (replacing UTC with America/Chicago), resolving Oracle DB connection and parameter binding errors, and updating the DrugToxicity generation script to support the `sum_spl` schema.

### Key Milestones
- **Timezone Standardization:** Replaced deprecated `utcnow` calls with local `America/Chicago` timezone datetime values in `generate_drugtox` and `import_drugtox` scripts.
- **Oracle DB Fixes:** Resolved the `DPY-4009` parameter binding error on Oracle. Enforced explicit Oracle connection constraints, failing early if an unexpected PostgreSQL fallback occurs.
- **DrugTox Script Updates:** Updated `generate_drugtox` and `import_drugtox` to support the `sum_spl` schema, integrated Pandas deduplication, and configured the script to use the Llama provider for vLLM/Llama-4 models.
- **Task Log Improvements:** Fixed execution logs auto-polling and scroll reset issues in the administration UI.
