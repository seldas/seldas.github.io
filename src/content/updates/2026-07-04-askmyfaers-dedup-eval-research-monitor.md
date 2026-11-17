---
title: "AskMyFAERS: Dedup Eval Panel & Research Monitor"
date: 2026-07-04
project: "askmyfaers"
tags: ["Deduplication", "QC", "Research"]
summary: "This week we built tooling to evaluate and tune the deduplication skill against ground truth, including a Dedup Eval panel and a Research Monitor for the skill-refinement study."
---

This week we built tooling to evaluate and tune the deduplication skill against ground truth, including a Dedup Eval panel and a Research Monitor for the skill-refinement study.

### Key Milestones

- **Dedup Eval Panel:** Added a Dedup Eval panel to load ground-truth comparisons, review discrepancies, and run AI audits against the deduplication output, later capturing dedup-tuning clues in eval audits and an admin refine-strategy summary.
- **Skill Versioning & Snapshots:** Added dedup skill versioning with stored ground truths and auto-scored run snapshots, then closed follow-up gaps with a version guard, snapshot-served audits, funnel/model capture, and audit export.
- **Research Monitor:** Built a Research Monitor admin page tracking the dedup study’s live status, later adding per-series research actions, group-level batch AI audits, reset-and-rerun bucketing with skill-version selection, and a warning before same-version re-runs overwrite displayed results.
- **Research Plan & Data Handling:** Wrote the dedup research plan (study design for the skill-refinement paper), made ground truths accept duplicate-free series with a warning instead of an error, and added project/series names to the Quality & Validation dashboard title for clarity.
- **UI Cleanup:** Hid the Research Monitor and Dedup Eval panel from the main app UI once initial tuning wrapped up, keeping them available for internal use only.
