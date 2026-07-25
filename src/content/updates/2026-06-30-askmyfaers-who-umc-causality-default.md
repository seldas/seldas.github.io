---
title: "AskMyFAERS: WHO-UMC Causality Assessment Becomes the Default"
date: "2026-06-30"
project: "askmyfaers"
tags: ["WHO-UMC", "Causality Assessment", "Quality Control"]
---

This week we introduced the WHO-UMC two-phase causality assessment method, built it into a guided rule-by-rule verification flow, and added an AI-based Quality Control panel that cross-checks case data against openFDA.

### Key Milestones
- **WHO-UMC Method:** Introduced the WHO-UMC two-phase causality assessment method alongside the existing approach, distinguishing methods in the UI and rebranding the legacy G1-G7 method as "Internal custom prompt."
- **Confidence, Attribution & Prioritization:** Added confidence scores, flags, and per-field source attribution to WHO-UMC results, along with deterministic audit-prioritization tiers and structured (layer-1) causality outlier detection for case series.
- **Rule-by-Rule Verify Flow:** Rebuilt the Verify dialog to walk the WHO-UMC decision tree rule-by-rule, emphasizing blocking criteria while collapsing rules that already passed, and sharpened the extraction prompt to match; WHO-UMC is now the default causality method, with the legacy method kept as an opt-in and the Task Monitor updated to reflect the WHO-UMC batch pipeline.
- **AI Quality Control Panel:** Added an AI-based Quality Control panel comparing case data to public openFDA records, exposing the raw openFDA record for manual verification.
- **Case Pre-View:** Introduced a Case Pre-View with a random-case picker and richer demographics, making report ID plus version the canonical case identity.
- **Verify Flow & Reporting:** Allowed per-factor comments in the verify flow regardless of disagreement, moved the detailed causality summary into a downloadable report, and fixed a bug preventing superusers from creating case series in projects they don't own.
