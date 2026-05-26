---
title: "HetEnc: Deep Autoencoder Model for Gene Expression Analysis"
date: "2026-05-15"
project: "hetenc"
tags: ["Autoencoders", "Deep Learning", "Bioinformatics"]
---

We've uploaded the core training and validation pipeline for the **HetEnc** deep learning model. The repository contains Python scripts to pre-process raw RNA-seq expression profiles and feed them through the heterogeneous autoencoder.

### Highlights
- **Reconstruction Loss:** Validated low reconstruction loss across multiple tumor cohorts.
- **Dimensionality Reduction:** Compressed 20,000+ features down to 128 latent representations while retaining 95%+ classification accuracy on downstream survival models.
- **Python Setup:** Added a `conda` environment file to make training reproducible on local GPUs.
