# Week 5.1 — React Deep Dive

Going deeper into React by first looking at what life is like *without* it — then understanding exactly what problem React solves.

## What we learned

- **Pure JS state management pain** — without React, you have to manually track state in the DOM (e.g., read a number out of `innerText`, increment it, write it back)
- **Why this breaks down** — as UIs get complex, keeping the DOM in sync with your data becomes a tangled mess
- **React's mental model** — state lives in JavaScript (not the DOM); React syncs the DOM to match your state automatically

## Files

| File | What it does |
|------|-------------|
| `1_beforeReact_PUREJS.html` | A counter built in pure JS — shows the painful `parseInt(el.innerText)` pattern to read state back from the DOM |

## Key idea

In pure JS, the DOM *is* your state — you read from it and write to it directly. This is fragile and hard to scale.

React flips this around: **state lives in your JavaScript variables**. The DOM is just a reflection of that state. You never read state *from* the DOM; you only write to it.

```
Vanilla JS:  DOM ←→ state (messy, bidirectional)
React:       state → DOM (clean, one-way)
```

This one-way data flow is the heart of the React programming model.
