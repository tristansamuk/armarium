import pino from "pino";

const logger = pino(
  {
    level: process.env.LOG_LEVEL ?? "info",
  },
  // In development, use pino-pretty for readable logs.
  process.env.NODE_ENV === "development"
    ? pino.transport({
        target: "pino-pretty",
        options: {
          colorize: true,
          ignore: "pid,hostname",
        },
      })
    : // In production, write output raw JSON.
      undefined,
);

export default logger;
