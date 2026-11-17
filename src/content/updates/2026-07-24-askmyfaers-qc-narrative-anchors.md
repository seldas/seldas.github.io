---
title: "askAEMS: Stage-1 QC Narrative Anchors & Discrepancy Filtering"
date: 2026-07-24
project: "askAEMS"
tags: ["Quality Control", "Filtering"]
summary: "This week we extended Stage 1 Quality Control with narrative anchor extraction and added dedicated filters for openFDA versus narrative discrepancies."
---

This week we extended Stage 1 Quality Control with narrative anchor extraction and added dedicated filters for openFDA versus narrative discrepancies.

### Key Milestones

- **Stage-1 QC Enhancements:** Enhanced Stage 1 Quality Control with narrative anchor extraction, a series banner, live task progress, and preview highlighting, plus a QC tag icon at the front of the AI Tasks column.
- **Discrepancy Filtering:** Added narrative-discrepancy and missing-data filter options to the Patient Sex, Age Group, and Country facets, and strictly differentiated openFDA-sourced discrepancies from narrative-sourced ones in both filters and the preview modal.
- **Extraction Accuracy:** Switched to narrative-only AI extraction with deterministic, country-normalized comparisons, fixed batch QC progress timeouts, deduped run-QC logic across components, and taught the country matcher to recognize demonyms (e.g. “French” matching “FR”).
- **Birth-Year Anchor:** Extracted birth_year from the QC narrative as a fallback identity anchor when explicit age fields are missing.
