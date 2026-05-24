import 'dotenv/config';
import logger from './lib/logger.js';
import { serve } from '@hono/node-server';
import { logRequest } from './middleware/logRequest.js';
import { Hono } from 'hono';
import { health } from './routes/health.js';

const app = new Hono();

// Middleware
app.use(logRequest);

// Routes
app.get('/', (c) => {
  return c.json({ name: 'Armarium', status: 'ok' });
});
app.route('/health', health);

// db test

// Entry point

const port = Number(process.env.PORT) || 3000;

serve({ fetch: app.fetch, port }, () => {
  logger.info({ port }, 'Server ready');
});

export default app;
