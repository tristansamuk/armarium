# Armarium

A personal library api.

## Prerequisites

- [Node.js](https://nodejs.org) (v22+)
- [pnpm](https://pnpm.io) (v11+)
- [Docker](https://www.docker.com) (for Postgres and Redis)

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy the example env file and fill in your values:

   ```bash
   cp .env.example .env
   ```

3. Start the database and cache services:
   ```bash
   docker compose up -d
   ```

## Development

```bash
docker compose up -d
pnpm dev
```

The server will start on the port specified in your `.env` file (default: `3000`).

## Scripts

| Command      | Description                              |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | Start development server with hot reload |
| `pnpm build` | Compile TypeScript to `dist/`            |
| `pnpm lint`  | Run ESLint                               |
