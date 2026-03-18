# Week 4.2 — Introduction to React

React is a JavaScript library for building user interfaces. Instead of manually updating the DOM, you describe *what the UI should look like* and React handles the updates.

## What we learned

- **Components** — reusable building blocks of a React UI; each component is just a function that returns JSX
- **JSX** — HTML-like syntax written inside JavaScript; gets compiled to regular `React.createElement()` calls
- **`useState` hook** — lets a component remember and update values (like a counter); when state changes, React re-renders the component
- **Event handlers** — attaching `onClick` and other events directly in JSX
- **Vite** — a fast build tool and dev server for modern React projects

## Files

| File | What it does |
|------|-------------|
| `src/App.jsx` | Main React component with a counter using `useState` |
| `src/main.jsx` | Entry point — mounts the React app into the HTML page |
| `index.html` | HTML shell that React injects into |
| `vite.config.js` | Vite bundler configuration |

## Running the project

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Key idea

With vanilla JS, you manually find DOM elements and update them. With React, you just update state — React figures out the minimum changes needed and updates the DOM for you.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```
