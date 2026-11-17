---
title: "askAEMS: Import Pipeline Hardening & Annotation Chunking Rework"
date: 2026-06-30
project: "askAEMS"
tags: ["ICSR Import", "Narrative Annotation", "Data Quality"]
summary: "This week we hardened the ICSR import pipeline with canonical column normalization and openFDA syncing, and reworked narrative annotation into smaller paragraph-aware AI passes."
---

This week we hardened the ICSR import pipeline with canonical column normalization and openFDA syncing, and reworked narrative annotation into smaller paragraph-aware AI passes.

### Key Milestones

- **Canonical Column Normalization:** Normalized incoming ICSR columns to canonical names on import, added heuristic header-row detection requiring no AI, and recognized more column variants (e.g. “Concomitant(s)”) for concomitant drug parsing.
- **Structured Drug/Event Dictionaries & openFDA Sync:** Split suspect drugs and PT terms into dedicated dictionary tables, parsed FAERS’ tagged-list and colon-delimited PT columns plus numbered drug/PT/LLT lists (backfilling existing data), and synced openFDA public records into drug/event tables on import and on every quality control re-run.
- **Import Stability Fixes:** Fixed a project/case-series delete failure and a KeyError: User crash in the link reprocessing script, stopped reprocessing from wiping openFDA-sourced links, fixed a 500 error deleting an ICSR with existing chat/token-usage history, and redesigned the Quality Control panel with demographics/drugs/AEs sections at the top of the case view.
- **Paragraph-Aware Annotation Chunking:** Split narrative annotation into smaller, paragraph-aware AI passes instead of asking the model to reproduce the whole narrative, removing the legacy flat-array annotation format entirely.
- **Full-Occurrence Tagging:** Instructed the AnnotationAgent to tag every occurrence of a repeated term rather than just the first, relaxed the offset-snapping distance cap now that chunks are small, and limited overlapping-span dedup to spans sharing the same label.
- **Case View Highlighting:** Highlighted every occurrence of a term in the Case view, now stacking overlapping different-label annotations instead of hiding them, with added per-chunk diagnostics for blank-region debugging.
