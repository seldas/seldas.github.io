---
title: "GANomics"
description: "A Generative Adversarial Network (GAN) framework for bidirectional translation between legacy (Microarray) and modern (RNA-seq) transcriptomic platforms."
github: "https://github.com/seldas/GANomics"
status: "Completed"
tags: ["Deep Learning", "Bioinformatics", "GANs", "PyTorch", "FastAPI", "React"]
order: 6
---

**GANomics** is an adversarial generative translation framework that maps gene expression profiles bidirectionally between legacy microarray platforms and modern high-throughput RNA sequencing (RNA-seq).

### Key Features
- **Pair-Aware Feedback Loss:** Combines both paired and unpaired sample distributions to preserve transcript-level mapping and global expression dynamics.
- **Automated Training & Ablation:** Supports headless or dashboard-driven execution of hyperparameter ablation and sensitivity runs on multi-GPU nodes.
- **Biomarker Analytics Suite:** Features downstream Differencing Gene Expression (DEG) Jaccard calculation, Cross-Platform Classifier validation scenarios, and ORA pathway enrichments.
- **Inference Hub:** Allows researchers to feed raw expression tables and download platform-synchronized synthetic matrices.
