---
title: "AskMyFAERS: Consensus Matrix Adjudication Grid & Dev Server Configurations"
date: "2026-05-27"
project: "askmyfaers"
tags: ["Consensus Matrix", "FastAPI", "Testing"]
---

This week we introduced the Consensus Matrix feature for collaborative ICSR reviews, cleaned up deprecated batch AI settings, and optimized independent dev and production server subpath configurations.

### Key Milestones
- **Consensus Matrix Integration:** Implemented the Consensus Matrix (adjudication grid) allowing case-series owners to resolve reviewer conflicts, backed by a mock data seeder script.
- **Server and Routing Adjustments:** Configured independent dev servers and a stable production server under the `/askmyfaers` subpath.
- **Admin Configuration Cleanup:** Removed the deprecated batch AI annotation menu option from the admin dashboard in favor of SCAT.
