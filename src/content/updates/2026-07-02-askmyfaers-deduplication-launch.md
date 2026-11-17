---
title: "askAEMS: Case-Series Deduplication Ships"
date: 2026-07-02
project: "askAEMS"
tags: ["Deduplication", "QC", "Performance"]
summary: "This week we shipped case-series deduplication end to end: bucketing and analysis skills, an adjudication UI, and a side-by-side duplicate comparison view."
---

This week we shipped case-series deduplication end to end: bucketing and analysis skills, an adjudication UI, and a side-by-side duplicate comparison view.

### Key Milestones

- **Bucketing & Analysis Skills:** Built the case-series deduplication pipeline as separate bucketing and analysis skills, with version grouping, refined bucketing rules, a synchronous run mode, and a full-reset option.
- **Adjudication UI:** Consolidated duplicate adjudication into the Dedup Buckets tab, added a Duplicated tag, and built a side-by-side duplicate comparison view showing AI reasoning and confidence scores with support for partial merges.
- **Bucket Page Refinements:** Made the Buckets column collapsible and moved it left in the case list, added per-bucket case comparison, and surfaced resolved dedup status on the bucket page instead of hiding it; merged duplicates now have bucket tags stripped and are excluded from re-bucketing.
- **Stability & Performance:** Fixed a 500 error on case-series delete caused by a dangling duplicate-cluster foreign key, eager-loaded case listing relationships to fix a race on rapid series switching, trimmed the case list payload by dropping unbounded assessment history and loading raw_data on demand, and added a narrative TF-IDF pre-filter to cut LLM calls on large dedup buckets.
- **Workflow Polish:** Stopped the case view from resetting on window refocus, replaced SCAT auto-refresh with a manual refresh prompt, and added a script to export deduplication results for the whole database.
