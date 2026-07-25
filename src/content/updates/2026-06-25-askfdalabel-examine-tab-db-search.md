---
title: "AskFDALabel: Examine Tab, DrugTox Unification & DB-First Search"
date: "2026-06-25"
project: "askfdalabel"
tags: ["Examine Tab", "DrugTox", "Search", "UI Redesign"]
---

Today we introduced a new Examine tab with a clinical query engine, unified the DrugTox detail page with the dashboard label view, and rebuilt homepage/chat search around a DB-first decision tree.

### Key Milestones
- **Examine Tab:** Implemented a new Examine tab with dynamic product specs and a clinical query engine, replacing the old technical-specs dropdown with a pointer to the new page, and added a custom question engine supporting generic drug sharing and warning footnotes.
- **DrugTox Detail Page Unification:** Unified the DrugTox detail page header and tabs with the dashboard label view and synchronized navigation between them, redesigned the navigation tabs and toolbar buttons with AI indicators and floating animations, and added a collapsible AskDrugTox instructions panel.
- **AI Report & Tag Polish:** Optimized the layout and highlighting of AI reports on the DrugTox detail page, redesigned the AI tag style, renamed the MedDRA tab/modal to Adverse Events, and switched to `ELSA_MODEL_NAME` for model display and history tracking.
- **DB-First Search:** Implemented a DB-first 4-path decision tree for homepage and chat search, made search columns case-insensitive via `ILIKE` and wildcards, and made sure the `labeling_source` setting is respected so Oracle isn't used when PG is configured.
- **Search UX:** Added a real-time search status bar with an elapsed timer, fixed `applyDataFilters` overwriting DB search results, and URL-encoded the query parameter while switching to Next.js `Link` in the markdown renderer for basePath-safe links.
- **Deployment:** Added support for separate image archives in the offline pack and load scripts, and auto-verify/pull/tag of production base images in `start_server.py`.
