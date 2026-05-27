---
title: "AskMyFAERS: Project/Case Series Streamlining"
date: "2026-05-21"
project: "askmyfaers"
tags: ["Project Redundancy", "Database Schema"]
---

This week we redesigned the project configuration workflow to reduce duplicate structures between Projects and Case Series.

### Key Updates
- **Case Series Redundancy Resolution:** Consolidated case setup so that creating a Project automatically provisions a default Case Series, immediately routing you to the ingestion screen.
- **SCAT Availability Checks:** Added pre-flight REST verification checks and user safety alerts in React to ensure SCAT servers are running before loading narrative highlights.
- **API 404 Handlers:** Refined routing middleware to fail pre-flight queries gracefully.
