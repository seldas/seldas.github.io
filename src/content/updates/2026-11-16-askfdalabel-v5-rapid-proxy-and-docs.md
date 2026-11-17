---
title: "AskFDALabel v5: RAPID Proxy Routing, Oracle Schema Reference & Wiki Updates"
date: 2026-11-16
project: "askfdalabel"
tags: ["AskFDALabel v5", "RAPID", "OpenFDA", "DailyMed", "Oracle", "Documentation"]
summary: "Added RAPID proxy routing and redirect gating for OpenFDA/DailyMed, refined admin and AI chat UI, and published comprehensive Oracle FDALabel schema and wiki documentation."
---

Following the v5 open-source launch, this week focused on production deployment routing for RAPID environments, UI/admin polish, and comprehensive technical documentation.

### Key Milestones

- **RAPID Proxy & Redirect Gate (`d18fbb3`, `e48bf10`, `64a6967`, `cde4c9e`):** Routed OpenFDA and DailyMed requests through the RAPID proxy with SSL adjustments, and added a RAPID redirect gate with availability checks for non-RAPID production mode.
- **Dashboard & Admin Polish (`3409f50`, `4fef340`):** Added an admin checkbox to hide deactivated users by default and restored font size scaling in the Label View AI chat.
- **Wiki & Oracle Schema Docs (`8b39a02`, `0f40929`):** Updated user wiki guides for recent v5 features and added a comprehensive Oracle FDALabel database schema reference.
