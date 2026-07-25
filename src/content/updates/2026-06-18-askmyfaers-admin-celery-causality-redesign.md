---
title: "AskMyFAERS: Celery Task Admin Overhaul & Causality Card Redesign"
date: "2026-06-18"
project: "askmyfaers"
tags: ["Admin Panel", "Celery", "Causality Assessment", "ICSR List"]
---

This week we migrated background batch tasks to Celery with proper stale-task handling, rebuilt the Causality Assessment results as color-coded cards, and cleaned up ICSR list filtering.

### Key Milestones
- **Celery Task Migration:** Moved batch background tasks from the ad hoc runner to Celery, adding stale-task cleanup, live progress indicators, and startup logic that marks orphaned running/pending tasks as failed.
- **Admin Panel Task Controls:** Added stop/kill cancellation and a force-clear option for active background tasks, plus a force-run override for batch runs, and split the admin view into separate Case Series Overview and Task Monitor tabs.
- **Admin Panel Hardening:** Guarded UserManagement against invalid API responses with Array.isArray checks, wrapped CaseSeries stats aggregation in try/except so corrupted records no longer crash the dashboard, and surfaced getCaseSeriesStats/getTasks failures as dashboard error alerts.
- **Causality Assessment Redesign:** Rebuilt the Causality Assessment result layout as color-coded cards, refined the causality prompt to prefer "Unassessable" when the evidence chain is weak, and renamed Validity Checks to Case Definition (disabled by default, hidden in Consensus Matrix).
- **ICSR List & Filter UX:** Swapped the View and FAV columns, made sidebar Accordion filters mutually exclusive, grouped ages into 10-year bands sorted by range, sorted countries descending, and removed the 100-item ICSR display limit.
- **Deployment Cleanup:** Standardized docker-compose to use a local Postgres bind mount and fixed TypeScript build/lint errors blocking CI.
