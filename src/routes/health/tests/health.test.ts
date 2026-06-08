import { describe, expect, test, beforeAll, afterAll } from 'vitest';
import { HEALTH_MESSAGE, HealthEndpointResponse } from '../healthTypes.js';
import app from '../../../server.js';
import { GenericContainer, StartedTestContainer } from 'testcontainers';
import { createClient, RedisClientType } from 'redis';

// Note: redis now works, but need to get postgres set up here

const mockHealthResponse: HealthEndpointResponse = {
  message: HEALTH_MESSAGE.OK,
  services: { postgres: true, redis: true },
};

describe('Health endpoint', () => {
  let container: StartedTestContainer;
  let redisClient: RedisClientType;

  beforeAll(async () => {
    container = await new GenericContainer('redis:8')
      .withExposedPorts(6379)
      .start();

    redisClient = createClient({
      url: `redis://${container.getHost()}:${container.getMappedPort(6379)}`,
    });

    await redisClient.connect();
  });

  afterAll(async () => {
    redisClient.destroy();
    await container.stop();
  });

  test('responds with a 200 status and a json health message', async () => {
    const res = await app.request('/health');
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('application/json');
    expect(await res.json()).toEqual(mockHealthResponse);
  });
});
