import { Hono } from 'hono';
import { db } from '../db/dbIndex.js';
import logger from '../lib/logger.js';
import { authorsTable } from '../db/schema.js';
import { redisClient } from '../redis/redisIndex.js';

export const health = new Hono();

const status = { postgres: false, redis: false };

health.get('/', async (c) => {
  try {
    await db.select().from(authorsTable).limit(1);
    status.postgres = true;
  } catch (error) {
    logger.error(error);
  }

  try {
    await redisClient.ping();
    status.redis = true;
  } catch (error) {
    logger.error(error);
  }

  const isHealthy = status.postgres && status.redis;
  const statusCode = isHealthy ? 200 : 503;

  logger.info({ dbRunning: status });
  return c.json(
    { message: isHealthy ? 'OK' : 'degraded', services: status },
    statusCode,
  );
});
