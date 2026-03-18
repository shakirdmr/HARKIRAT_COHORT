# Week 2.5 — Express.js

Writing raw HTTP servers gets tedious fast. Express is a minimal framework that makes building web servers much cleaner and faster.

## What we learned

- **Express setup** — creating an app with `express()`
- **Middleware** — functions that run on every request (e.g., `express.json()` parses incoming JSON bodies)
- **Routing** — defining what happens when a user hits a specific URL (`app.get`, `app.post`, etc.)
- **HTTP status codes** — sending back proper codes like `200 OK`, `404 Not Found`
- **File serving** — sending files as responses

## Files

| File | What it does |
|------|-------------|
| `index.js` | Main Express app with middleware and route handlers |
| `FileServing.js` | Example of serving static files |
| `todos.txt` / `tods.txt` | Sample to-do data used by the server |

## Key idea

Express wraps the raw `http` module with a much nicer API. Middleware is the superpower — every request passes through a chain of middleware functions before hitting your route handler.

```js
const express = require("express");
const app = express();

app.use(express.json()); // middleware: parse JSON bodies

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello!" });
});

app.listen(3000);
```
