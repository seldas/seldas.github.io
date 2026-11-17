---
title: "askAEMS: Narrative Highlight Sync & Dashboard Decluttering"
date: 2026-06-11
project: "askAEMS"
tags: ["Narrative Annotation", "UI Refactor", "Settings"]
summary: "This week we tightened narrative-to-annotation click coordination, decluttered the project analytics dashboard, and standardized prompt naming and settings versioning."
---

This week we tightened narrative-to-annotation click coordination, decluttered the project analytics dashboard, and standardized prompt naming and settings versioning.

### Key Milestones

- **Narrative Highlight Coordination:** Removed cursor tooltips in favor of clicked-state scale highlights, synced click triggers between the case narrative and the Annotated Terms list, and fixed focus so selecting a term reliably matches its narrative segment or annotation text.
- **Case-Series View Cleanup:** Hid the primary drug-event pair defaults section in Case-Series view to reduce clutter for reviewers who don’t rely on it.
- **Dashboard Simplification:** Collapsed the ProjectAnalyticsDashboard into a single-line summary bar, dropping the signals count and capping displayed categories at two to shrink its layout footprint.
- **Empty-State Guidance:** Added an empty placeholder with InfoVIP Excel format instructions for case series with no imported cases yet.
- **Prompt & Settings Versioning:** Standardized prompt naming conventions, added settings version selection, and made Consensus Matrix columns collapsible with highlight support.
