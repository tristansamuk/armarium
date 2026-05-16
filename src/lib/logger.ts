import pino from "pino";

const logger = pino(
  {
    // Log level controlled by environment variable.
    // Defaults to 'info' if not set.
    level: process.env.LOG_LEVEL ?? "info",
  },
  // In development, pipe output through pino-pretty for readable logs.
  // In production, pino writes raw JSON to stdout.
  process.env.NODE_ENV === "development"
    ? pino.transport({
        target: "pino-pretty",
        options: {
          colorize: true,
          ignore: "pid,hostname",
        },
      })
    : undefined,
);

export default logger;
