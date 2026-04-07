---
title: "The IDE is Not Infrastructure. It's a Product."
date: "2024-02-20"
category: "Product Engineering"
excerpt: "When you move the tool engineers use during job interviews, every crash is a failed hire."
---

# The IDE is Not Infrastructure. It's a Product.

At HackerRank, candidates use the IDE for hours during high-stakes technical interviews. It's not a tool they chose  it's a tool we imposed. That distinction matters.

## The Migration Decision

We were running on Theia, an open-source IDE framework. It worked, but it was limiting. Extensions were hard to build. The UX felt foreign to candidates who lived in VS Code all day.

The decision to migrate wasn't primarily technical. It was a product decision: **the IDE is the surface area of the assessment experience.** If it feels broken, the assessment feels broken. If it feels familiar, candidates can focus on the problem.

## What "Treating It Like a Product" Means

- **Oncall during migration**: I served as oncall engineer throughout. Not because the code was fragile, but because the *experience* was fragile. A broken IDE during an interview is a failed hire  for the candidate and the company.
- **Extension API integration**: We needed the IDE to support custom tooling  language servers, debugging pipelines, test runners. VS Code's Extension API made this possible without building everything from scratch.
- **Measuring success by candidate experience**: Not uptime. Not load time. Did candidates feel comfortable? Did they stop noticing the IDE and start focusing on the problem?

## The Lesson

Infrastructure teams think about uptime. Product teams think about outcomes. The best engineering happens when you hold both in your head at once.
