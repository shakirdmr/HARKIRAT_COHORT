# Week 3.1 — Express Middleware & Input Validation

Building on Express basics, this week focuses on protecting your server from bad input and structuring middleware properly.

## What we learned

- **Middleware chains** — how a request flows through multiple middleware functions before reaching a route handler
- **Zod** — a schema validation library; define the exact shape of data you expect and reject anything that doesn't match
- **CORS** — Cross-Origin Resource Sharing; allows a frontend (e.g., running on port 5173) to talk to a backend (port 3000)
- **Global error handling** — a special middleware that catches errors thrown anywhere in your app
- **Fetch API (client-side)** — making HTTP requests from the browser and measuring response times

## Files

| File | What it does |
|------|-------------|
| `MIDDLEWARES.js` | Express server with Zod validation on a `/square` POST route and a global error handler |
| `client.js` | Browser-side fetch code that sends requests to the server and logs timing |
| `index.html` | Simple HTML page that loads `client.js` |

## Key idea

Never trust user input. Zod lets you declare exactly what data your route expects. If the request doesn't match, Zod throws an error and your global error handler catches it — keeping your routes clean.

```js
const schema = z.object({
  number: z.number()
});

app.post("/square", (req, res) => {
  const { number } = schema.parse(req.body); // throws if invalid
  res.json({ result: number * number });
});
```
