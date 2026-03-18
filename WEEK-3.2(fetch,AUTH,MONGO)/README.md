# Week 3.2 — Fetch, JWT Authentication & MongoDB

This week brings together the full picture of a real backend: calling external APIs, authenticating users, and storing data in a database.

## What we learned

### Fetch API
- Making **GET** and **POST** requests from Node.js to external APIs
- Sending JSON in request bodies and reading JSON responses
- Handling errors with `try/catch`

### JWT (JSON Web Tokens)
- What a JWT is: a small, signed token that proves who a user is
- **`jwt.sign()`** — creates a token with a payload (e.g., user ID) and a secret key
- **`jwt.verify()`** — checks if a token is valid and hasn't been tampered with
- **`jwt.decode()`** — reads the payload without verifying (don't use for auth checks!)
- Validating email and password format with **Zod** before creating tokens

### MongoDB + Mongoose
- Connecting to a MongoDB database using `mongoose.connect()`
- Defining a **Schema** — the shape of your data (like a blueprint for a database document)
- Creating a **Model** from a schema to read/write to a collection
- Storing sensitive config (like DB URLs) in `.env` files using `dotenv`

## Files

| File | What it does |
|------|-------------|
| `fetch.js` | Fetch API examples: GET and POST requests with error handling |
| `JWT.js` | Basic JWT sign and verify |
| `JWT_EXAMPLES.js` | JWT with Zod validation for email/password |
| `mongoDB.js` | MongoDB connection and creating a user document |
| `schema_mongoose.js` | Mongoose User schema definition |
| `.env` | Environment variables (MongoDB connection URL — not committed) |

## Key idea

**Auth flow in simple terms:**
1. User logs in with email + password
2. Server checks credentials, then creates a JWT: `jwt.sign({ userId: "123" }, SECRET)`
3. Client stores the token and sends it with every future request
4. Server calls `jwt.verify(token, SECRET)` — if it passes, the user is authenticated

No need to store sessions on the server. The token itself carries proof of identity.
