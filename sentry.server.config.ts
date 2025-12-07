import * as Sentry from "@sentry/nextjs";

const tracesSampleRate = Number(process.env.SENTRY_TRACES_SAMPLE_RATE ?? "0");

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enabled: Boolean(process.env.SENTRY_DSN),
  tracesSampleRate,
  environment: process.env.APP_ENV ?? process.env.NODE_ENV,
});
