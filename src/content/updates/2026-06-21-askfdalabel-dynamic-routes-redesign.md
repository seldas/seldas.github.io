---
title: "AskFDALabel: Consolidated Dynamic Routes & Database Merges"
date: "2026-06-21"
project: "askfdalabel"
tags: ["Dynamic Routing", "Database Merge", "UI Redesign", "Bug Fixes"]
---

Today we consolidated the DrugToxicity page structure into a unified dynamic route, merged legacy database tables, resolved multiple API 500 errors, and redesigned the agent review panels.

### Key Milestones
- **Consolidated Dynamic Routes:** Unified DrugTox details page routing under a dynamic route (`drugtox/[setId]/page.tsx`).
- **Database Table Merges:** Merged `ToxAgent` and `Assessment` tables into the single `drug_toxicity` table, dropping legacy tables and removing the legacy `Changed` column. Mapped missing metadata columns (e.g. `Evidence` to `Explanations`).
- **API and UI Crash Fixes:** Resolved database querying 500 errors on the detail and history pages. Fixed a Flask crash caused by deprecated imports, and a Next.js crash due to an orphaned FormControlLabel.
- **Agent Panel Redesign:** Overhauled the review agent panels to use active tabs, integrated historical reports directly, added evidence/AI summaries, and implemented a contextual toolbar in place of floating buttons.
- **Markdown HTML Rendering:** Integrated `rehypeRaw` into ReactMarkdown to allow correct rendering of raw HTML in AI reports.
- **Label Typography & UI Polish:** Improved Structured Product Label (SPL) content typography, boxed warning cards, reading progress bars, and highlights jump links.
