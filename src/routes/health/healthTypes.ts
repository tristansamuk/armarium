export interface DbStatus {
  postgres: boolean;
  redis: boolean;
}

export const HEALTH_MESSAGE = {
  OK: 'Ok',
  DEGRADED: 'degraded',
} as const;

export interface HealthEndpointResponse {
  message: (typeof HEALTH_MESSAGE)[keyof typeof HEALTH_MESSAGE];
  services: DbStatus;
}
