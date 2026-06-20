---
title: "AskFDALabel: Automatic Guest Logins & Auth Fixes"
date: "2026-06-04"
project: "askfdalabel"
tags: ["Auth", "Guest Mode", "Bug Fixes"]
---

Today we added auto guest login functionality for deep links, resolved authentication redirect issues on logout, and cleaned up header search routing titles.

### Key Milestones
- **Auto Guest Logins:** Configured deep-linked endpoints to automatically sign in users as guests when authentication is not required.
- **Logout Redirection:** Fixed a frontend routing loop where logging out did not redirect to the landing page.
- **Search Header Sync:** Aligned search header and local query title cards.
