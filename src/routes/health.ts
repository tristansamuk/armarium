import { Hono } from 'hono';
import { db } from '../db/dbIndex.js';
import logger from '../lib/logger.js';
import { authorsTable } from '../db/schema.js';
import { createClient } from 'redis';

export const health = new Hono();

health.get('/', async (c) => {
  try {
    await db.select().from(authorsTable).limit(1);

    const client = createClient();
    await client.connect();

    logger.info({ dbRunning: { postgres: true, redis: client.isReady } });

    client.destroy();

    return c.json({ message: 'Database is running' }, 200);
  } catch (error) {
    logger.error(error);
    return c.json({ message: "Couldn't access database" }, 503);
  }
});
