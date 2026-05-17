import "dotenv/config";
import logger from "./lib/logger";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logReqest } from "./middleware/logReqest";

const app = new Hono();

app.use(logReqest);

app.get("/", (c) => {
  return c.json({ name: "Armarium", status: "ok" });
});

const port = Number(process.env.PORT);

serve({ fetch: app.fetch, port }, () => {
  logger.info({ port }, "Server ready");
});

export default app;
