import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'ru',

  // Show locale prefix only for non-default locale (ru - without prefix, en - with prefix)
  localePrefix: 'as-needed',

  // Disable automatic locale detection from browser
  localeDetection: false,
});

export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for:
  // - Paths starting with `/api`, `/_next`, or `/_vercel`
  // - Paths containing a dot (e.g., `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
