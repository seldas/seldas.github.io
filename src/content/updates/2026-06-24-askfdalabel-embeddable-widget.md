---
title: "AskFDALabel: Embeddable Widget — Built, Iterated, Retired"
date: "2026-06-24"
project: "askfdalabel"
tags: ["Embeddable Widget", "Elsa Integration", "Bug Fixes"]
---

Today we built an embeddable AskFDALabel widget for the snippet page, chased it through several rounds of bug fixes and an Elsa v4 interface migration, and ultimately pulled it out of the codebase entirely.

### Key Milestones
- **Widget Build:** Added the askdrugtox widget and snippet page, then renamed it to the askfdalabel widget and gave it a floating icon, a toggle switch, and a close button that removes it from the DOM.
- **Early Bug Fixes:** Fixed an `appendChild` error on initialization and an invalid URL constructor error triggered when `currentScript.src` was empty.
- **Elsa v4 Compatibility:** Elsa's underlying interface moved to v4 mid-stream, requiring the widget to be updated for the new HTML structure; also resolved Lexical editor compatibility issues, updated the drug tag format, and appended a diagnostic script to `elsa_4_architecture.md`.
- **Race Condition Fix:** Resolved a Lexical submission race condition with a React-safe streaming text replacement approach.
- **Widget Removal:** After testing against the new Elsa v4 interface, completely removed all Elsa widgets and snippet references from the codebase.
