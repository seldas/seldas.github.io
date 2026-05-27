---
title: "AskFDALabel"
description: "A grounded conversational search and analytical assistant for U.S. Food and Drug Administration (FDA) drug labeling documents using RAG."
github: "https://github.com/seldas/askFDALabel"
status: "Active"
tags: ["RAG", "Clinical NLP", "Next.js", "Flask", "PostgreSQL", "pgvector"]
order: 3
---

**AskFDALabel** is a full-stack labeling intelligence suite designed to automate the extraction, annotation, profiling, and classification of adverse event data from FDA drug labeling documents.

### Key Modules
- **Conversational Search:** Grounded conversational search workspace querying the `FDALabel` database (with over 150,000 documents) using Gemini/Llama and `pgvector` semantic retrieval.
- **Project Dashboard:** Main review interface for uploading SPL XML/ZIP files, creating annotations, saving notes, and reviewing drug-safety assessments.
- **Label Comparison:** Side-by-side comparison workspace for comparing up to four labels with section-level differences and AI-generated summaries.
- **askDrugTox & Device Intelligence:** Modules for browsing harmonized toxicity datasets and openFDA medical device IFU comparisons.
