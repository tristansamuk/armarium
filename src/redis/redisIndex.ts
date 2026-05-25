import { createClient } from 'redis';

const createRedisClient = async () => {
  const client = createClient();
  await client.connect();
  return client;
};

export const redisClient = await createRedisClient();
