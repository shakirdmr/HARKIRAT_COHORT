# Week 4.1 — DOM Manipulation

Before React, there's the DOM. Understanding how JavaScript directly controls what you see on screen is essential for understanding *why* React exists.

## What we learned

- **DOM** (Document Object Model) — the browser's representation of a webpage as a tree of objects you can manipulate with JavaScript
- **Selecting elements** — `document.getElementById()`, `document.querySelector()`
- **Changing styles** — updating `element.style.backgroundColor` and other CSS properties via JS
- **`setInterval()`** — running a function repeatedly on a timer
- **Event handlers** — reacting to user actions like clicks

## Files

| File | What it does |
|------|-------------|
| `DOM.js` | Cycles through background colors every second using `setInterval` |
| `index.html` | HTML page that loads and runs `DOM.js` |
| `DOM_CHEAT_SHEET.html` | Quick reference for common DOM methods |

## Key idea

The DOM is live — any change you make with JavaScript instantly updates what the user sees. `document.getElementById("box").style.color = "red"` changes a color right now, with no page reload.

This direct manipulation is powerful but gets messy at scale. That's exactly the problem React was designed to solve.
