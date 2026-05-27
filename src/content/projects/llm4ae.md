---
title: "LLM4AE"
description: "An advanced annotation and extraction platform for Pharmacovigilance (PV) professionals using LLMs and BioBERT."
github: "https://github.com/seldas/LLM4AE"
status: "Active"
tags: ["Pharmacovigilance", "BioBERT", "LLMs", "Next.js", "Flask", "NER"]
order: 5
---

**LLM4AE** (LLM-Powered Annotation & Extraction) is an advanced tool suite tailored for pharmacovigilance teams. It simplifies clinical narrative processing by combining LLM-grounded inferences with local BioBERT models.

### Key Features
- **Ingestion Pipelines:** Automates Excel imports from standard PV platforms like RxLogix and InfoVIP, extracting structured demographics and narrative bodies.
- **BioBERT NER Integration:** Fine-tuned local BioBERT transformer model detects clinical terms (drugs, adverse events, lab results) and reconciles character-offset boundaries.
- **Multi-Role Annotations:** Supports dual-panel SME annotation dashboards and consensus adjudication workflows.
- **ICSR Causality Scoring:** Prompts LLMs to estimate causality scales (Certain, Probable, Possible) mapping text references to WHO-UMC causality guidelines.
