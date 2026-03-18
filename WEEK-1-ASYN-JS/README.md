# Week 1 — Asynchronous JavaScript

Real apps need to do things like read files, call APIs, and wait for databases — without freezing up. This week is all about how JavaScript handles that.

## What we learned

- **Callbacks** — the old-school way to handle async operations
- **Promises** — a cleaner way to deal with async; chains `.then()` calls instead of nesting callbacks
- **Async / Await** — the modern, readable way to write async code (looks synchronous)
- **File I/O** — reading files in Node.js using `fs.readFile()`
- **Event loop** — understanding *why* `console.log` order can be surprising in async code

## Files

| File | What it does |
|------|-------------|
| `usingCallbacks.js` | Classic callback pattern for async work |
| `usingPromises.js` | Wrapping `fs.readFile` in a Promise |
| `ASYNC_AWAIT.js` | Rewriting promises using `async/await` |
| `PROMISES_TEMP.js` | Scratch pad for experimenting with promises |
| `terminalTheme.js` | Terminal color/theme helpers |
| `file.txt` | Sample file used in the read examples |

## Key idea

Callbacks → Promises → Async/Await is the evolution of handling async code. All three do the same thing; `async/await` just makes it easiest to read and reason about. Under the hood, it's still promises.
