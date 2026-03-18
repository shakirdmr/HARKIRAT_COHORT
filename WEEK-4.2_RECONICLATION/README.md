# Week 4.2 — Virtual DOM & Reconciliation

One of React's core ideas is the **Virtual DOM**. This week explores what it is, why it exists, and how it works.

## What we learned

- **The problem with raw DOM updates** — updating `innerHTML` re-creates everything, even parts that didn't change; this is slow
- **Virtual DOM** — a lightweight JavaScript copy of the real DOM; React keeps this in memory
- **Reconciliation** — the process of comparing the old virtual DOM tree with the new one to find *exactly* what changed
- **Diffing algorithm** — how React walks both trees and only updates the real DOM nodes that are different

## Files

| File | What it does |
|------|-------------|
| `index.html` | Manual counter example using `innerHTML` — shows the brute-force approach |
| `check_VDOM_chnage.html` | Simulates virtual DOM diffing: builds old and new UI trees, compares them, and only updates what changed |

## Key idea

Instead of re-rendering the entire page on every change, React:
1. Creates a new Virtual DOM tree when state changes
2. Diffs it against the previous Virtual DOM tree
3. Calculates the minimum set of real DOM changes needed
4. Applies only those changes

This is why React feels fast even in complex UIs — it does the minimal amount of real DOM work.
