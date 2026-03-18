# Week 2.6 — Array Methods: Map & Filter

Two of the most useful tools in JavaScript for working with lists of data.

## What we learned

- **`.map()`** — transforms every item in an array and returns a *new* array (original is untouched)
- **`.filter()`** — keeps only the items that pass a test, returns a new array
- **`.forEach()`** — loops over an array but doesn't return anything (used for side effects)
- **Immutability** — `map` and `filter` don't change the original array; they create new ones
- **Custom implementations** — built our own `map` function to understand how callbacks and indices work internally

## Files

| File | What it does |
|------|-------------|
| `map.js` | Examples of `.map()` transforming arrays; comparison with `.forEach()` |
| `mapINTERNAL.js` | A custom `myMap()` function built from scratch to show how map works internally |
| `filter.js` | Uses `.filter()` with a bitwise check to pull out even numbers |

## Key idea

These two methods let you work with data *declaratively* — you describe *what* you want, not *how* to loop. They're used everywhere in React and modern JavaScript.

```js
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(n => n * 2);      // [2, 4, 6, 8, 10]
const evens   = nums.filter(n => n % 2 === 0); // [2, 4]
```
