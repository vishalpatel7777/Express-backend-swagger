# Backend API

A simple Express.js REST API with full CRUD operations for user management and Swagger UI documentation.

## Tech Stack

- **Runtime:** Node.js (ESM)
- **Framework:** Express 5
- **Package Manager:** pnpm
- **Docs:** Swagger UI (`swagger-jsdoc` + `swagger-ui-express`)

## Getting Started

```bash
pnpm install
pnpm dev
```

Server runs at `http://localhost:3000` by default.

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/get-user` | Get all users |
| POST | `/api/create-user` | Create a new user |
| PUT | `/api/update-user/:id` | Update a user by ID |
| DELETE | `/api/delete-user/:id` | Delete a user by ID |

### Request / Response Examples

**GET /api/get-user**
```json
[
  { "id": 1, "name": "John Doe" },
  { "id": 2, "name": "Jane Smith" }
]
```

**POST /api/create-user**
```json
// Request body
{ "name": "Jane Smith" }

// Response 201
{ "id": 3, "name": "Jane Smith" }
```

**PUT /api/update-user/:id**
```json
// Request body
{ "name": "Jane Doe" }

// Response 200
{ "id": 3, "name": "Jane Doe" }
```

**DELETE /api/delete-user/:id**
```
Response 204 — No Content
Response 404 — { "error": "User not found" }
```

## API Documentation

Swagger UI is available at:

```
http://localhost:3000/docs
```

## Project Structure

```
backend/
├── app.js          # Entry point, Express + Swagger setup
├── routes/
│   └── users.js    # User CRUD routes with Swagger annotations
├── .env            # Environment variables
└── package.json
```

> **Note:** User data is stored in-memory and resets on server restart. There is no database connected.
