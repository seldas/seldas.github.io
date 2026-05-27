---
title: "GANomics: Web-App Dashboard & Ablation Panels"
date: "2026-03-12"
project: "ganomics"
tags: ["FastAPI", "React", "Dashboard"]
---

This week we restructured the training loop and biomarker calculations to expose them via a unified **FastAPI and Vite/React web dashboard**.

### Key Updates
- **Interactive UI Dashboard:** Added the Project Studio (to manage microarray/RNA-seq dataset uploads) and the Session Overview panel.
- **Ablation Settings:** Implemented parameters for training size experiments and CUDA-bound parallel runs.
- **Biomarker Pathway Analysis:** Added support for Fisher's Exact Test ORA pathway calculations, Jaccard overlaps, and t-SNE plot generators.
