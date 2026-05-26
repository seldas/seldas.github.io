---
title: "LabelComp Update: Integrating LLM Summaries for Warnings"
date: "2026-05-26"
project: "labelcomp"
tags: ["LLMs", "Clinical NLP", "FDA Labeling"]
---

Today we introduced a major semantic enhancement to the LabelComp text pipeline. Instead of running simple keyword diffs on the FDA labeling files, we've integrated a lightweight Llama-based clinician model to summarize warning sections and highlight *what changed* in plain natural language.

### What's New
- **Clinician Summaries:** Generates concise medical summaries of labeling updates.
- **Section Parsing:** Improved parsing of safety bulletins and FDA SPL (Structured Product Labeling) formats.
- **Error Reduction:** Reduced false positives on formatting shifts (like header changes and line breaks) by 40%.
