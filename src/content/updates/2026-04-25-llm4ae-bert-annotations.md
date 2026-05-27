---
title: "LLM4AE: BioBERT clinical entity extraction pipeline"
date: "2026-04-25"
project: "llm4ae"
tags: ["Transformer NER", "BioBERT", "Batch Processing"]
---

Today we completed the integration of the fine-tuned BioBERT-based Named Entity Recognition (NER) pipeline into the main application backend.

### Key Milestones
- **Multi-GPU Batch Inference:** Configured parallel inference script `development/NER/scripts/batch_annotate.py` supporting GPU scheduling.
- **Offset Alignment:** Resolved a critical bug in narrative JSON character offsets when merging model inference spans from chunked paragraphs.
- **AI Processing Adjustments:** Optimized local Flask server token generation parameters to reduce response latency during narrative summaries.
