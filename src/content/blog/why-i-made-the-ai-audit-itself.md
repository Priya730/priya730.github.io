---
title: "Why I Made the AI Audit Itself"
date: "2025-03-15"
category: "Engineering · LLMs"
excerpt: "LLM output quality is not a model problem. It's a systems problem."
---

# Why I Made the AI Audit Itself

When we started generating assessment questions with LLMs at HackerRank, the first reaction from stakeholders was predictable: *"How do we know these are good?"*

That's the right question. And the wrong answer is "we'll have humans review them."

## The Problem With Human Review

Human review doesn't scale. If you're generating 500 questions a day, you need a team just to QA them. And humans are inconsistent  what one reviewer flags, another approves. The bottleneck moves from creation to validation.

## Making the System Self-Correcting

Instead of bolting on review, I built validation into the generation pipeline itself:

1. **LLM-as-Judge**  A second model evaluates each generated question against rubrics for clarity, correctness, difficulty calibration, and fairness.
2. **Vector Search Dedup**  Every new question is compared against the existing bank using embeddings. If it's too similar to something we already have, it's rejected or regenerated.
3. **Retry Loops**  Failed validations trigger regeneration with adjusted prompts, not human escalation.

The result? Questions that pass the pipeline are consistently higher quality than what the manual process produced  and they arrive in minutes, not days.

## The Takeaway

LLM output quality isn't about finding a better model. It's about building a system where bad output can't survive. The model is one component. The system is the product.
