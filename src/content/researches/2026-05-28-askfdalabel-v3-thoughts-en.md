---
title: "askFDALabel 3.0: Thoughts and Progress During Development"
date: "2026-05-28"
highlights:
  - "Introducing Agentic AI Functions (e.g., Label Compare / Toxicity Agents) to expand the platform's independent task-execution capabilities."
  - "Breaking traditional Semantic-RAG and DB-RAG bottlenecks to explore and construct a smarter Q&A architecture free from legacy database constraints."
---

# askFDALabel 3.0: Thoughts and Progress During Development

The first two versions of askFDALabel have recently reached a milestone. As we review our past work and prepare for version 3.0, our team has been having internal discussions, primarily focusing on how to further enhance the system's utility and functionality from two core directions:

## 1. Introducing Agentic AI / Skills to Expand Use Cases

A pure "search + Q&A" model struggles to fully meet the expectations of real users (such as Reviewers). In many cases, the presentation format provided by simple search is not ideal for the user's specific needs.

Take the **Label Compare** scenario as an example. The user's core requirement is actually very straightforward: input two files to be compared, and the system outputs the comparison results in a fixed format. Under this premise of "clear input + expected fixed output", traditional conversational retrieval seems inefficient. Therefore, introducing Agentic AI (or specific "Skills") is a much more suitable solution. Rather than just providing a generic search box, it is better to equip the system with multiple Agents capable of independently executing specific professional tasks.

The dedicated skills we plan to introduce in 3.0 include:
*   **Label Compare Agent**: Specifically designed to automatically compare key differences between different drug labels, or different versions of the same drug label.
*   **Toxicity Agents**: Intelligent agents dedicated to digging deep into and organizing complex data such as drug toxicities, side effects, and safety warnings.

With the addition of these specific Skills, the functional scope of askFDALabel will be significantly expanded.

## 2. Breaking the Bottlenecks of Traditional RAG to Improve AI Q&A Mechanisms

Our second point of discussion concerns the underlying AI search and Q&A mechanisms. Frankly speaking, we have not yet found a perfect final solution for this, and everything is still in the exploration phase. But to make progress, we first need to confront two obvious problems with traditional RAG:

**First is the limitation of Semantic-RAG.**
As we discussed during the version 2 update, the peculiarity of Drug Labeling is that the textual expression of many different drug labels is highly similar, and the real differences often hide in minute details. When performing semantic search in this context, the model is highly susceptible to being misled by similar text, leading to incorrect citation sources. Imagine if the AI used the labeling of a different drug to answer a Reviewer's question about the current drug—even if the final answer happens to not be completely wrong, this "mix-up" is extremely embarrassing and severe in a professional medical review.

**Second is the bottleneck of DB-RAG.**
While DB-RAG has advantages in structured data queries, its core issue is that the AI's actual performance is constrained by the capabilities of the underlying Database Query. If the query process relies on a traditional database like Oracle, which is inherently weak at natural language processing, then no matter how smart the top-level AI is, its overall performance in natural language conversion and retrieval will be heavily discounted.

It is precisely because we've seen the fatal flaws in these two traditional paths that we have decided to continue our exploration in version 3.0. Although we are still in the experimental stage, our direction is clear: to find a new retrieval architecture that can escape the constraints of traditional databases and accurately distinguish minute professional differences, thereby truly unleashing the high intelligence and generalizability of AI.
