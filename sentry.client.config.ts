import * as Sentry from "@sentry/nextjs";

const tracesSampleRate = Number(
  process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE ?? "0",
);
const replaysOnErrorSampleRate = Number(
  process.env.NEXT_PUBLIC_SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE ?? "0",
);
const replaysSessionSampleRate = Number(
  process.env.NEXT_PUBLIC_SENTRY_REPLAYS_SESSION_SAMPLE_RATE ?? "0",
);

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
  tracesSampleRate,
  replaysSessionSampleRate,
  replaysOnErrorSampleRate,
  environment: process.env.NEXT_PUBLIC_APP_ENV ?? process.env.NODE_ENV,
});
