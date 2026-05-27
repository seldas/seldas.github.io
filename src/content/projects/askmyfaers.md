---
title: "AskMyFAERS"
description: "A professional-grade Pharmacovigilance (PV) analysis platform for secure, deep-dive review and annotation of Individual Case Safety Reports (ICSRs)."
github: "https://github.com/seldas/AskMyFAERS"
status: "Active"
tags: ["Pharmacovigilance", "FastAPI", "React", "Celery", "Redis", "PostgreSQL"]
order: 4
---

**AskMyFAERS** is a dedicated pharmacovigilance safety platform built to optimize clinical safety case annotations and causality assessments. By utilizing asynchronous task workers, AskMyFAERS processes narratives and produces standardized safety logs.

### Key Features
- **5-Stage PV Pipeline:** Guides experts step-by-step from raw case text narratives to final causality determination.
- **Asynchronous Processing:** Powered by FastAPI, Redis, and Celery to execute long-running AI case-definition agents in the background.
- **SCAT Annotation Integration:** Supports importing and exporting complex clinical relationship offsets aligned with SCAT entity loaders.
- **Causality Versioning:** Tracks history and versions of AI prompts, case definitions, and assessments.
