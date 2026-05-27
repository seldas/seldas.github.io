---
title: "AskFDALabel: PostgreSQL Conversion & Semantic Search Redesign"
date: "2026-03-06"
project: "askfdalabel"
tags: ["PostgreSQL", "Database Migration", "Semantic Search"]
---

This week we fully retired our historical SQLite settings to migrate our database stack completely to **PostgreSQL with pgvector**.

### Key Updates
- **SQLite to PostgreSQL Migration:** Re-wrote database scripts and configuration maps to accommodate PostgreSQL schemas.
- **Semantic Search Redesign:** Updated the semantic vector lookup scripts to optimize index creation, using a local model running on port `8849`.
- **Autocomplete Filters:** Standardized autocomplete search functions and resolved a critical bug related to doc-type checks.
