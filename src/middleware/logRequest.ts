import { randomUUID } from "crypto";
import logger from "../lib/logger.js";
import { createMiddleware } from "hono/factory";

const REQ_ID = "reqId";

export const logReqest = createMiddleware(async (c, next) => {
  const start = Date.now();
  c.set(REQ_ID, randomUUID());

  await next(); // wait for other middleware to finish and response to be created

  logger.info({
    reqId: c.get(REQ_ID),
    method: c.req.method,
    path: c.req.path,
    status: c.res.status,
    duration: Date.now() - start,
  });
});
