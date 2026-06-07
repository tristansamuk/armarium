import { describe, expect, test } from 'vitest';
import { HEALTH_MESSAGE, HealthEndpointResponse } from '../healthTypes.js';
import app from '../../../server.js';

const mockHealthResponse: HealthEndpointResponse = {
  message: HEALTH_MESSAGE.OK,
  services: { postgres: true, redis: true },
};

describe('Health endpoint', () => {
  test('responds with a 200 status and a json health message', async () => {
    const res = await app.request('/health');
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('application/json');
    expect(await res.json()).toEqual(mockHealthResponse);
  });
});
