---
title: "AskFDALabel: Search Performance Tuning & database Indexing"
date: "2026-03-17"
project: "askfdalabel"
tags: ["Database Performance", "pgvector", "FDA SPL"]
---

This week we worked on resolving performance bottlenecks in search result highlights and pgvector vector indexing.

### Key Updates
- **Search Optimization:** Optimized SQL queries and added postgres indexing filters to speed up general SPL section search.
- **Reference Tagging:** Implemented dynamic reference tags (RLD/RS indicators) inside the label details view.
- **Snippet Bookmarks:** Introduced bookmarklet-based ELSA text snippet helpers.
