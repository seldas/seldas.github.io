---
title: "AskMyFAERS: Elsa Cost Calibration & PostgreSQL Fixes"
date: "2026-05-26"
project: "askmyfaers"
tags: ["Cost Tracking", "PostgreSQL", "System Stability"]
---

Today we calibrated the Elsa clinical model API cost calculations and resolved several runtime database connection errors.

### Milestones
- **Elsa Cost Calculations:** Updated billing and token rate calculations for internal Elsa models to match standard API costs.
- **PostgreSQL Stability:** Fixed a persistent PostgreSQL database connection issue in the FastAPI server container.
- **Relocation Relocator:** Fixed a pagination offset relocation bug in the Celery task runner.
