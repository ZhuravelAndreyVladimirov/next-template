import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { locales } from './i18n';

const routing = defineRouting({
  locales,
  defaultLocale: 'ru',
  localePrefix: 'as-needed',
});

export const { Link, useRouter, usePathname, redirect } = createNavigation(routing);
