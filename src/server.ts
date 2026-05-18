import 'dotenv/config';
import logger from './lib/logger.js';
import { serve } from '@hono/node-server';
import { logRequest } from './middleware/logRequest.js';
import { Hono } from 'hono';

const app = new Hono();

app.use(logRequest);

app.get('/', (c) => {
  return c.json({ name: 'Armarium', status: 'ok' });
});

const port = Number(process.env.PORT) || 3000;

serve({ fetch: app.fetch, port }, () => {
  logger.info({ port }, 'Server ready');
});

export default app;
