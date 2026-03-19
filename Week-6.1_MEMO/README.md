# Week 6.1 — React Performance: memo, useMemo, useCallback

This week is all about avoiding unnecessary re-renders in React. When a component re-renders, all its children re-render too — even if nothing they care about changed. These three tools help you control that.

## What we learned

- **`React.memo`** — wraps a component so it only re-renders when its props actually change
- **`useMemo`** — caches the result of an expensive calculation; only re-runs when dependencies change
- **`useCallback`** — caches a function reference so it stays the same across renders
- **`React.memo` + `useCallback` combo** — the real use case: pass a stable function as a prop to a memoized child so it doesn't re-render unnecessarily

## The key insight

| Hook / API | What it memoizes |
|---|---|
| `React.memo` | a **component** (skips re-render if props unchanged) |
| `useMemo` | a **value** (result of a function) |
| `useCallback` | a **function** (the function itself) |

`React.memo` alone is not enough — if you pass a function as a prop, it's recreated every render (new reference), so `React.memo` thinks the prop changed. You need `useCallback` to stabilize the reference.

## Pages / Routes

| Route | File | What it demonstrates |
|---|---|---|
| `/` | `ReactMemo.jsx` | Basic `React.memo` — skipping re-renders of a child |
| `/usememo` | `UseMemo.jsx` | `useMemo` — caching an expensive sum calculation |
| `/usecallback` | `UseCallback.jsx` | `useCallback` + `React.memo` — stable function reference passed to a child |
| `/todo` | `Todo.jsx` | Todo list example |
| `/wrapper` | `WraperComponent.jsx` | Wrapper component pattern |
| `/useeffect` | `UseEffect.jsx` | Basic `useEffect` |
| `/useeffect-improved` | `UseEffectImproved.jsx` | Improved `useEffect` patterns |

## Running the project

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## The problem useCallback solves

```jsx
// Every render creates a NEW function — React.memo on Child is useless
const increment = () => setCount(c => c + 1);

// Same function reference every render — React.memo on Child actually works
const increment = useCallback(() => setCount(c => c + 1), []);
```
