---
title: "Bringing Safe AI to Drug Regulation: The AskFDALabel Framework"
academicTitle: "A framework enabling LLMs into regulatory environment for transparency and trustworthiness and its application to drug labeling document"
journal: "Regulatory Toxicology and Pharmacology"
date: "2024-04-02"
authors: "Leihong Wu, et al."
doi: "10.1016/j.yrtph.2024.105613"
doiUrl: "https://www.sciencedirect.com/science/article/pii/S0273230024000540"
pdfUrl: "/researches/1-s2.0-S0273230024000540-main.pdf"
pdfSize: "3.4 MB"
highlights:
  - "<strong>100% Data Privacy:</strong> Operates entirely within the agency's private servers. Sensitive or proprietary drug data never crosses the firewall."
  - "<strong>Hallucination Control:</strong> Using a localized Retrieval-Augmented Generation (RAG) flow, the text generator is mathematically constrained to only summarize the specific sections retrieved by the search engine."
  - "<strong>Full Auditing & Explainability:</strong> Unlike generic AI black boxes, every response includes clickable references and citations pointing to the exact paragraphs used, providing a complete audit trail."
  - "<strong>Equally Powerful, Fractions of the Cost:</strong> Proves that smaller, cost-effective models (like Llama-2 and Falcon) hosted locally match the accuracy of OpenAI's GPT-4 in specialized regulatory reviews."
---

Every day, regulatory agencies like the FDA review massive volumes of drug documents, clinical trials, and safety labeling updates. While Large Language Models (LLMs) like ChatGPT could theoretically help automate this tedious work, they present severe challenges: confidentiality rules prevent uploading proprietary drug data to external APIs, and AI 'hallucinations' can lead to dangerous errors. This paper presents AskFDALabel: a secure, local AI framework that solves both problems by combining semantic search indexers with secure open-source AI models running inside a private local network.
