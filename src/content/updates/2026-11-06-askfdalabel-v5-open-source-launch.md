---
title: "AskFDALabel v5: Open-Source Platform Release, Chemical Search & QueryBuilder Overhaul"
date: 2026-11-06
project: "askfdalabel"
tags: ["AskFDALabel v5", "Open Source", "Chemical Search", "QueryBuilder", "CI/CD"]
summary: "Launched the open-source release of askFDALabel v5 with GitHub Actions security scanning, SMILES chemical structure search, modernized label image analysis, and QueryBuilder UX upgrades."
---

Completed the initial open-source release of **askFDALabel v5** (`github.com/seldas/askFDALabel-v5`), evolving the project into a modular platform with automated CI security scanning, chemical structure search, and streamlined query workflows.

### Key Milestones

- **Open-Source Launch & CI Hardening (`ebb7e79`, `d4fa0bb`, `d3f61d2`):** Published the sanitized v5 platform codebase, restored architectural archive/planning docs and `webtest` suite, and configured GitHub Actions for TruffleHog secret scanning and build verification.
- **Chemical Structure Search (`3ba0a49`):** Added Chemical Structure Search to the Toolbox with SMILES auto-fill and multi-component selection.
- **Modernized Label Reader & NDC Filtering (`08d74c6`, `c9df3f3`):** Replaced the legacy image button with a compact `+` preview modal supporting Extract, Compare, and Analyze actions, and added a repacker/relabeler filter using `DGV_SPL_PROD.EQUIV_TO_NDC_CODE`.
- **QueryBuilder & LabelQuery Overhaul (`62f0f56`, `05156df`, `135b967`, `1290115`):** Added a floating bottom-right Search/Clear action bar, enabled unverified MedDRA terms to fall back cleanly to section text search, auto-collapsed optional query panels, and standardized user-facing LLM terminology.
