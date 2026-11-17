---
title: "AskFDALabel: AI Settings Panel & Navigation Reorg"
date: 2026-06-24
project: "askfdalabel"
tags: ["AI Settings", "Navigation", "UI Redesign", "Bug Fixes"]
summary: "Today we shipped a user-level AI model settings panel spanning Gemini, ELSA, vLLM, and Ollama, and reorganized the main navigation and search entry points around it."
---

Today we shipped a user-level AI model settings panel spanning Gemini, ELSA, vLLM, and Ollama, and reorganized the main navigation and search entry points around it.

### Key Milestones

- **AI Settings Panel:** Added a user-level settings panel for configuring Gemini, ELSA, vLLM, and Ollama, restricted Elsa configuration to URL/user/key/model ID inputs after dropping the Rapid API option, and exposed backend `.env` AI configuration defaults to the frontend as dynamic placeholders.
- **System & DB Config:** Deferred system settings changes to an explicit Apply button, added support for external PG inputs and DEV/TST Oracle DB selection, fixed database connection URI resolution in `update_user_schema.py`, and made the `check_fdalabel` route dynamically detect internal FDA connectivity (via secure port 8443) to gate internal resource links.
- **Token Usage Tab:** Defaulted guest users to the tokens tab and hid the AI/User sections for them, and added a model filter dropdown with a dynamic token-count summary.
- **Navigation Reorg:** Routed the main nav Search link to `/search`, moved Local Query under a Resources dropdown, renamed the header search button to AI Chat with corrected active-state highlighting, added cross-navigation links between AI Chat and Local Query, and renamed the dashboard header link to My Dashboard.
- **Elsa Model Naming:** Switched to displaying a human-readable Elsa model name in the UI and DrugTox assessments instead of the raw model ID.
- **Search Panel Cleanup:** Restored the local DB query header entry with a direct structured-query link, and removed the RLD-only and local-archive filters from the search panel.
