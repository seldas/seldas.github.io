---
title: "AskMyFAERS: SCAT Annotator Layout Refactor & Verified Badges"
date: "2026-07-20"
project: "askmyfaers"
tags: ["SCAT", "Narrative Annotation", "UI Refactor"]
---

This week we reconciled the SCAT annotator's layout with the rest of AskMyICSRs and added verified/AI-origin badges to narrative annotations.

### Key Milestones
- **Layout Reconciliation:** Reconciled the SCAT annotator layout with the rest of AskMyICSRs, moving toolbar controls from the header into the sidebar and grouping Show Rejected with Layers.
- **Provider & Bug Fixes:** Defaulted the SCAT AI provider to Elsa, fixed the rejection popup state with deduped stale rejection tags, and fixed the manual annotation category picker closing before a selection registered.
- **Verified Annotation Badges:** Tagged human-authored/verified narrative annotations with a "V" badge, added an AI-origin tag to narrative highlights, and deduped duplicate annotation badges.
- **Case View Cleanup:** Removed the Annotated Terms panel from the ICSR case view and the Causality Outliers panel from the Quality & Validation dashboard, and renamed the SCAT pipeline stage to "Narrative Annotation."
- **Housekeeping:** Removed orphaned SCAT components no longer referenced by the live annotator and fixed unused MUI imports breaking the TypeScript build.
