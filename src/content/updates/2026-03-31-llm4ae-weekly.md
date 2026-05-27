---
title: "LLM4AE: Base Path Deploy Configuration"
date: "2026-03-31"
project: "llm4ae"
tags: ["Routing", "System Configuration"]
---

This week we unified deployment setups to establish consistent routing prefixes for Next.js and NGINX containers.

### Key Updates
- **Standardized Base Paths:** Integrated environment variables (`NEXT_PUBLIC_BASE_PATH`) to allow clean routing behind a nested proxy.
- **Cleanup:** Retired legacy scripts to streamline the development server configuration.
