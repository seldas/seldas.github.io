---
title: "DBBtoolkits"
description: "A lightweight, offline-first desktop application containing a suite of high-performance scientific tools built with Tauri v2 and Rust."
github: "https://github.com/seldas/DBBToolkits"
status: "Active"
tags: ["Tauri v2", "Rust", "Desktop App", "Scientific Tools"]
order: 7
---

**DBBtoolkits** is a lightweight desktop utility suite designed to streamline daily scientific research tasks. By combining a modern web interface in a native desktop container via Tauri v2 and Rust, it provides 100% offline-ready micro-tools that ensure privacy for text, data, and citations.

### Embedded Utilities
- **Figure DPI Converter:** Rewrites metadata resolution headers in-memory (to 72, 150, 300, 600 DPI) for PNG, JPEG, and TIFF files without compromising image pixel array values.
- **BibTeX Citation Cleaner:** Scrubs Google Scholar or citation manager outputs for LaTeX, automatically curly-bracing acronyms (e.g. `{CNN}`) and removing redundancy.
- **LLM Toolkits & JSON Fixer:** Provides a CORS-free interface to test local model APIs (Ollama, vLLM) and automatically parses and repairs truncated LLM JSON payloads.
- **Universal Table Converter:** Dynamically shifts rows between copy-pasted Excel blocks and markdown table strings.
- **Privacy Diff & QR Code:** Features side-by-side text diff comparisons and custom SVG/PNG QR generators.
