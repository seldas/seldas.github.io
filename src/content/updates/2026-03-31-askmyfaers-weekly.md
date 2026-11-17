---
title: "askAEMS: Environment Routing & Base Path Fixes"
date: 2026-03-31
project: "askAEMS"
tags: ["Routing", "System Configuration"]
summary: "This week we unified deployment setups to establish consistent endpoint paths for sub-directory routing."
---

This week we unified deployment setups to establish consistent endpoint paths for sub-directory routing.

### Key Updates

- **Path Standardization:** Configured Vite and FastAPI endpoints to correctly respect nested subpath prefixing.
- **Docker Setup:** Consolidated container port declarations to allow local and production docker-compose stacks to run concurrently.
