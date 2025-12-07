'use client';

import { locales } from '@/i18n';
import { Link, usePathname } from '@/navigation';
import { Button } from '@mantine/core';
import { useLocale } from 'next-intl';

const stripLocaleFromPath = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;

  for (const loc of locales) {
    const prefix = `/${loc}`;

    if (normalized === prefix) return '/';
    if (normalized.startsWith(`${prefix}/`)) {
      const sliced = normalized.slice(prefix.length);
      return sliced.length ? sliced : '/';
    }
  }

  return normalized || '/';
};

export const LocaleToggle = () => {
  const pathname = usePathname();
  const locale = useLocale();

  console.log(locale);

  const pathWithoutLocale = stripLocaleFromPath(pathname);

  return (
    <Button.Group aria-label="Switch language">
      {locales.map((value) => {
        const active = value === locale;

        console.log(active);

        console.log(value, locale, active);
        return (
          <Button
            key={value}
            variant={active ? 'filled' : 'default'}
            aria-pressed={active}
            renderRoot={(props) => <Link {...props} href={pathWithoutLocale} locale={value} />}
          >
            {value.toUpperCase()}
          </Button>
        );
      })}
    </Button.Group>
  );
};
