import { Hono } from 'hono';
import { db } from '../../db/dbIndex.js';
import logger from '../../lib/logger.js';
import { authorsTable } from '../../db/schema.js';
import { redisClient } from '../../redis/redisIndex.js';
import { HEALTH_MESSAGE, DbStatus } from './healthTypes.js';

export const health = new Hono();

health.get('/', async (c) => {
  const status: DbStatus = { postgres: false, redis: false };

  try {
    await db.select().from(authorsTable).limit(1);
    status.postgres = true;
  } catch (error) {
    logger.error(error);
    status.postgres = false;
  }

  try {
    await redisClient.ping();
    status.redis = true;
  } catch (error) {
    logger.error(error);
    status.redis = false;
  }

  const isHealthy = status.postgres && status.redis;
  const statusCode = isHealthy ? 200 : 503;

  logger.info({ dbRunning: status });
  return c.json(
    {
      message: isHealthy ? HEALTH_MESSAGE.OK : HEALTH_MESSAGE.DEGRADED,
      services: status,
    },
    statusCode,
  );
});
