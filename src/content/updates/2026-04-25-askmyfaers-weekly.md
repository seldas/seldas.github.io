---
title: "AskMyFAERS: SCAT Integration & Fuzzy Offset Alignment"
date: "2026-04-25"
project: "askmyfaers"
tags: ["SCAT Integration", "Offset Alignment"]
---

This week we completed integration with the external **SCAT annotation service** and resolved character offset misalignments in case narrative imports.

### Key Updates
- **SCAT Annotation Integration:** Bypassed direct AI extraction in the case lists to rely on SCAT's entity and relationship graphs.
- **Fuzzy Offset Matching:** Implemented client-side alignment to adjust narrative character offsets when importing nested annotation arrays.
- **Causality Versions:** Added prompt histories to allow safety reviewers to check dynamic prompt templates side-by-side.
