---
title: "askAEMS: AID-Dup Replaces the Deduplication Pipeline"
date: 2026-07-25
project: "askAEMS"
tags: ["Deduplication", "AID-Dup", "Clustering"]
summary: "This week we replaced the deduplication pipeline with AID-Dup — multi-signal bucketing, chaining-resistant clustering, and parallel AI rescue — and later upgraded its clustering to a true Clauset-Newman-Moore..."
---

This week we replaced the deduplication pipeline with AID-Dup — multi-signal bucketing, chaining-resistant clustering, and parallel AI rescue — and later upgraded its clustering to a true Clauset-Newman-Moore modularity algorithm.

### Key Milestones

- **AID-Dup Pipeline:** Replaced the deduplication pipeline with AID-Dup — multi-signal bucketing, chaining-resistant clustering, and parallel AI rescue for ambiguous pairs — later upgraded to true Clauset-Newman-Moore modularity clustering for more principled cluster formation.
- **QC-Anchor-Driven Bucketing:** Incorporated QC narrative anchors into bucketing and scoring, added dynamic wildcard age tolerance in place of hard age-band boundaries, applied hard discrepancy rules and adaptive vector k-NN for oversized buckets, and made the Stage-1 QC check mandatory before running Dedup Buckets.
- **Global Pair Review:** Added global pair aggregation across buckets, narrative top-3 candidate suggestions, and a grid-based review UI; backend orchestration plus a new SuspectedDuplicatesPanel let reviewers manage, resolve, and revoke decisions on duplicate clusters end-to-end.
- **Excel Offline Review:** Added Excel export/import for offline deduplication review, with cleaned-up header formatting and dropdown validation.
- **Bucket Controls & Fixes:** Split series bucket Reset from Re-run, kept match scores visible even when a pair has AI narrative reasoning, refreshed the Suspected Duplicates panel automatically after bucketing/analysis, and fixed duplicate-cluster redundancy.
- **Skill Config Portability & Supporting Work:** Added export/import of dedup skill config versions as JSON synced to the repo, backend analytics endpoints for case series timeline/demographic summaries, a stage-based progress bar for Case Series loading, and a fix to the AN annotation-tag icon condition in the ICSR list.
