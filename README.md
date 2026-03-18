# JavaScript Learning Journey — Harkirat Cohort

A full-stack JavaScript learning path, from HTML basics all the way to React and databases. Each folder is one week of the cohort.

## Learning Path

| Folder | Topic | What's inside |
|--------|-------|---------------|
| [week-0](./week-0/) | HTML & CSS | Webpage structure and styling basics |
| [WEEK-1](./WEEK-1/) | JS Fundamentals | Variables, arrays, functions, callbacks, setTimeout |
| [WEEK-1-ASYN-JS](./WEEK-1-ASYN-JS/) | Async JavaScript | Callbacks → Promises → Async/Await, file I/O |
| [WEEK-1-OOP-JS](./WEEK-1-OOP-JS/) | OOP in JS | Classes, constructors, methods, `new` keyword |
| [WEEK-2.2-NODE.js](./WEEK-2.2-NODE.js/) | Node.js | Running JS on a server, built-in `http` module |
| [WEEK-2.5-EXPRESS](./WEEK-2.5-EXPRESS/) | Express.js | Routing, middleware, file serving |
| [WEEK-2.6-MAP&FILTER](./WEEK-2.6-MAP&FILTER/) | Array Methods | `.map()`, `.filter()`, `.forEach()`, custom implementations |
| [WEEK-3.1](./WEEK-3.1/) | Middleware & Validation | Zod schema validation, CORS, global error handling |
| [WEEK-3.2(fetch,AUTH,MONGO)](./WEEK-3.2(fetch,AUTH,MONGO)/) | Auth & Database | Fetch API, JWT authentication, MongoDB + Mongoose |
| [WEEK-4.1_DOM](./WEEK-4.1_DOM/) | DOM Manipulation | Selecting elements, changing styles, events, setInterval |
| [WEEK-4.2_REACTjs](./WEEK-4.2_REACTjs/) | React Basics | Components, JSX, useState hook, Vite setup |
| [WEEK-4.2_RECONICLATION](./WEEK-4.2_RECONICLATION/) | Virtual DOM | Reconciliation, diffing algorithm, why React is fast |
| [WEEK-5.1_REACT_DEEP_DIVE](./WEEK-5.1_REACT_DEEP_DIVE/) | React Deep Dive | Why React exists, one-way data flow, state vs DOM |

## The Big Picture

This repo follows a natural progression:

```
HTML/CSS  →  JS Basics  →  Async JS  →  Node/Express  →  Auth + DB  →  React
(visuals)    (logic)       (timing)     (backend)         (full-stack)  (frontend)
```

Each week builds on the previous one. By the end, you have all the pieces needed to build a full-stack web app.

## Running backend examples

Most weeks use Node.js. To run any backend file:

```bash
node WEEK-X/filename.js
# or with auto-reload:
npx nodemon WEEK-X/filename.js
```

## Running the React app

```bash
cd WEEK-4.2_REACTjs
npm install
npm run dev
```

## Dependencies (root)

The root `package.json` includes shared backend dependencies:

- **express** — web server framework
- **jsonwebtoken** — JWT creation and verification
- **mongoose** — MongoDB object modeling
- **zod** — schema validation
- **dotenv** — loading environment variables
- **cors** — Cross-Origin Resource Sharing middleware
- **nodemon** — auto-restart server on file changes
