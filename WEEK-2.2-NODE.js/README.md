# Week 2.2 — Node.js & HTTP Servers

JavaScript normally runs in the browser. Node.js lets it run on a server — this is where backend development begins.

## What we learned

- **Node.js** — running JavaScript outside the browser
- **`http` module** — Node's built-in tool for creating web servers
- **Request & Response** — every web interaction is a client asking (request) and a server answering (response)
- **Ports** — servers listen on a specific port (e.g., `3000`) for incoming connections

## Files

| File | What it does |
|------|-------------|
| `HTTP_SERVER.js` | Creates a basic HTTP server on port 3000 that responds to any request |
| `start.js` | Entry point / startup script |
| `DATA.txt` | Sample data used in server responses |

## Key idea

With just Node's built-in `http` module, you can spin up a server that listens for browser requests and sends back responses. This is the raw foundation that frameworks like Express are built on top of.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node!");
});

server.listen(3000);
```
