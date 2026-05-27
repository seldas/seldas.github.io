---
title: "AskMyFAERS: LLM Token Tracking & Dashboard Integration"
date: "2026-05-25"
project: "askmyfaers"
tags: ["Monitoring", "FastAPI", "Token Tracking"]
---

Today we introduced token usage monitoring features to provide administrative visibility into LLM resource utilization during large-scale ICSR review campaigns.

### Key Milestones
- **Token Tracking Database Schema:** Added backend SQLAlchemy tables to log input/output token counts for each query session.
- **Admin Monitoring Panel:** Built a React administration dashboard showing real-time token logs, average query latencies, and active model loads.
- **Worker Configuration:** Fixed dynamic model toggles and Celery worker importing issues under the unified docker-compose stack.
