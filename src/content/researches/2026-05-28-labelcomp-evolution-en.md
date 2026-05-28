---
title: "askFDALabel 3.0: From PDF to SPL—The Objective Evolution of Label Compare and Best Practices"
date: "2026-05-28"
highlights:
  - "Objectively evaluate the early attempts of PDF+BERT models and their high accuracy and practical value in specific entity extraction tasks (such as adverse events)."
  - "Deep dive into the core evolution of Label Compare in askFDALabel 3.0: supporting multi-text summarization, interactive Q&A, and high-speed data flow based on SPL."
---

# From PDF to SPL: The Evolution and Best Practices of the Label Compare Architecture

In our previous dev log discussing the roadmap for askFDALabel 3.0, we mentioned introducing Agentic AI (like Label Compare) as a highly efficient solution for repetitive and rigid review workflows. Today, let's dive deeper: Under the current askFDALabel ecosystem, how exactly do we implement Label Compare as a core workspace? And why do we consider the current architecture to be the "Best Practice" for solving this problem?

## 1. The Historical Cornerstone: The Highlights of the PDF + BERT Solution

For FDA reviewers or pharmaceutical R&D personnel, tracking safety updates in drug labeling is a tedious, high-frequency, and incredibly draining repetitive task.

To automate this workflow, there have been numerous attempts across academia and industry. A highly representative milestone is a paper I previously authored and published in *Drug Safety* (*LabelComp*, DOI: [10.1007/s40264-024-01468-8](https://doi.org/10.1007/s40264-024-01468-8)). In this paper, we developed a tool also named **LabelComp**. Its core logic was: **Targeting the universally circulated PDF format of drug labels, it leveraged text extraction techniques combined with a specially trained BERT model to automatically identify changes in Adverse Event (AE) terminology.**

From an engineering and results standpoint, this approach was a massive success (achieving an F1 Score of 0.795-0.936 for this specific task). Because a vast amount of original documents in real-world workflows are still PDFs, this strategy of "training small models specifically for targeted entities (like AEs)" retains an irreplaceable applicability and continues to play a vital role internally today.

## 2. The Evolution in askFDALabel 3.0: Core Feature Upgrades of Label Compare

However, when building the next-generation Label Compare module within the askFDALabel platform, we realized that the demands of reviewers go far beyond simply "finding new adverse events." We needed a solution with broader applicability and deeper interactivity.

The current Label Compare module has evolved into a powerful 3-in-1 workflow:
1. **Textual Aligned Comparison**: Accurately extracting and displaying text-level differences side-by-side.
2. **AI Summarization Based on Aligned Text**: Allowing Large Language Models (LLMs) to directly distill the "substantive differences."
3. **Interactive Q&A**: Engaging in direct dialogue with the AI right on top of the differing text.

This is not just an expansion in scope from AE extraction to full-document comparison; it represents a fundamental shift in how AI is utilized.

### Breaking the Limits of Traditional NLP: Elegantly Solving Multi-Document Comparison
In the past, if three or more versions of a drug label needed to be compared simultaneously, traditional NLP technologies (even BERT) faced a monumental challenge: **Multi-document alignment is a notoriously difficult algorithmic problem, making it nearly impossible to achieve high accuracy while remaining readable.**

In our current architecture, we support the **simultaneous comparison of multiple SPL files (more than 2)**. By introducing modern LLMs, we cleverly "skip" the mechanical and often messy forced alignment of multiple files. Instead, we directly feed the variations across these versions to the LLM for **Summarization**. The AI can synthesize the core changes across multiple versions just as a human reader would. Using large models to bypass the bottlenecks of traditional algorithms is precisely the unique advantage brought by Agentic AI.

### Providing a Conversational Foundation: Interactivity Beyond Traditional Tools
With traditional comparison tools, the task ends once the difference report is generated. But in askFDALabel, the extracted and aligned set of similar texts provides a **perfect conversational foundation (Context)**.
After viewing the AI's summary, a reviewer can continue via interactive Q&A to dig deeper into the medical implications or potential impact of a specific, subtle modification. This continuous experience of "spotting a difference -> probing deeper" is something static, discriminative models like traditional NLP or BERT simply cannot achieve.

## 3. Why Shift to SPL? Data-Driven Ecosystem Synergy

Beyond feature upgrades, the biggest shift at the technical foundation was moving from PDF to the SPL (Structured Product Labeling) XML format. This doesn't mean PDFs have lost their value; rather, it stems from considerations regarding **data source availability and interconnectivity** when building a large-scale platform.

**1. Efficient Acquisition and Updating**: Compared to PDFs, which have messy structures and diverse origins, officially published SPL data maintains extremely high consistency. This means our backend can perform ultra-fast data scraping, parsing, and automatic updates, ensuring that the data source for comparisons is always the most current.
**2. Ecosystem Synergy**: SPL inherently possesses rigorous structural tags. The parsed data can be tightly bound to the core database underlying askFDALabel. This high level of data compatibility ensures the Label Compare module is not an isolated island, but deeply rooted within the entire platform's ecosystem.

## 4. Looking Ahead: Making Changes "Visible" and "Trackable"

Having solved multi-document comparison and interactive Q&A, the future evolution of LabelComp will align even closer with the deeper needs of reviewers: not just identifying "what changed," but answering "does it matter?" and "what is the trend?" We are currently actively advancing development in the following two core directions:

**1. Intelligent Triage & Highlighting (Surfacing "High-Impact" Changes)**
A reviewer's biggest fear is not missing an update, but drowning in a sea of trivial modifications (like formatting tweaks or synonym replacements). The future LabelComp will introduce **"Impact Triage"**:
*   **Semantic Severity Assessment**: The AI will score differences based on their clinical and regulatory significance. For instance, a shift in the population definition within `Contraindications` or a `Boxed Warning` will be instantly highlighted in red and pinned to the top, while simple punctuation fixes or rephrasing will be automatically collapsed.
*   **Personalized Review Anchors**: Reviewers will be able to input their specific "review intent" (e.g., *"Focus primarily on new safety signals in the pregnant population for this drug"*). The system will dynamically adjust the weighting of the comparison results to push highly relevant modifications front and center.

**2. Longitudinal Tracking and Dynamic Evolution (Longitudinal Tracking)**
Reviewing is often a continuous process spanning a long timeline, rather than a single horizontal comparison.
*   **Lifecycle Maps of Safety Signals**: For specific changes a reviewer is tracking (e.g., an adverse reaction incidence rising from 1% to 3%, then to 5%), the system should be able to visualize this as an evolving chronological timeline.
*   **Class Labeling Tracking**: When the system detects a new severe warning added to Drug A, it should **proactively prompt** the reviewer if other drugs with the same target or mechanism of action have similar modification histories, helping reviewers quickly build a macroscopic understanding of class-wide safety.

## 5. Conclusion

From a highly targeted PDF+BERT tool specialized for specific tasks, to the current SPL+LLM hybrid architecture that integrates "Comparison, Summarization, and Q&A" and easily handles multi-file comparisons—Label Compare has undergone an objective and profound evolution. This has not only vastly broadened the system's operational scope but also provided the ultimate best-practice template for further liberating experts from repetitive tasks in the future.
