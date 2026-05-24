import { Hono } from 'hono';
import { db } from '../db/dbIndex.js';
import logger from '../lib/logger.js';
import { authorsTable } from '../db/schema.js';

export const health = new Hono();

health.get('/', async (c) => {
  try {
    await db.select().from(authorsTable).limit(1);
    return c.json({ message: 'Database is running' }, 200);
  } catch (error) {
    logger.error(error);
    return c.json({ message: "Couldn't access database" }, 503);
  }
});
