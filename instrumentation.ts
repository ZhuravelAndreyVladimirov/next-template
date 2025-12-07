/**
 * Next.js requires an exported `register` function in `instrumentation.ts`.
 * The current version of `@sentry/nextjs` no longer provides a helper for this
 * file, and the SDK initializes itself via its config files instead. Export a
 * no-op to satisfy Next.js and avoid build-time errors.
 */
export function register() {
  // Intentionally empty – Sentry is configured via its own setup files.
}
