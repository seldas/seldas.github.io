---
title: "AskFDALabel: AI DrugTox Pipeline & Expandable Rows UI"
date: "2026-06-22"
project: "askfdalabel"
tags: ["DrugTox", "UI Redesign", "AI Guardrails", "Schema Reset"]
---

Today we completed a major overhaul of the DrugToxicity (DrugTox) pipeline and user interface, introducing AI-powered generation with strict guardrails, resetting the DB schema, and redesigning the frontend to use inline expandable rows.

### Key Milestones
- **AI-Powered DrugTox Generator:** Replaced legacy DrugTox logic with a new AI-powered reasoning pipeline featuring strict guardrails, explicit 3-step reasoning, and a local database toggle.
- **UI Overhaul & Expandable Rows:** Redesigned the DrugTox table view to use inline expandable rows showing SetID, Drug Name, Company, and Status. Added dynamic chip rendering for toxicity classes.
- **Schema Reset & History Preservation:** Reset the database schema to drop redundant columns, pull metadata from `sum_spl`, and record the active `AI_Model`. Preserved assessment history by inserting new records instead of overwriting.
- **Search Filters:** Added Oral, PLR, and RLD filters to the autocomplete search tool and enhanced the oral dosage forms filter.
- **Elsa Widget Layout:** Redesigned the Elsa playground widget with a side-by-side layout.
- **basePath Bug Fix:** Resolved a Next.js routing bug where `withAppBase` caused double-prepending of the basePath in Link components.
