---
title: "askAEMS: Step-by-Step Causality Verification & Clinical Timeline Redesign"
date: 2026-06-28
project: "askAEMS"
tags: ["Causality Assessment", "HITL", "Clinical Timeline"]
summary: "This week we rebuilt causality human-in-the-loop review as a formal step-by-step verification flow, redesigned the clinical timeline, and added AI-grounded auto-determination of drug/event pairs."
---

This week we rebuilt causality human-in-the-loop review as a formal step-by-step verification flow, redesigned the clinical timeline, and added AI-grounded auto-determination of drug/event pairs.

### Key Milestones

- **Formal Verification Flow:** Rebuilt the causality human-in-the-loop (HITL) review as a formal step-by-step verification flow, compacting the factor list, moving the conclusion to the final verify step, and displaying causality factors as a paired grid instead of a flat list.
- **Assessment Panel Redesign:** Reworked the causality assessment display panel and verification dialog layout, and redesigned the case series header alongside the Quality/Validation dashboard.
- **Clinical Timeline Rework:** Redesigned the clinical timeline view, merged the metadata header, and added category filters.
- **Auto-Determined Drug/Event Pairs:** Added automatic drug/event pair determination that always grounds adverse event selection in the narrative via AI, dropped series-level drug/event fields in favor of an inline-editable case series title, and clarified the adverse event definition in the pair-determination prompt.
- **Consensus Matrix Cleanup:** Removed the Case Definition toggle from Consensus Matrix and made case ordering consistent with the main case listing.
- **Case Series Summary:** Added a templated “What do we know about this case series?” summary.
