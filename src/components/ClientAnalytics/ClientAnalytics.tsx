'use client';

import { captureMessage } from '@sentry/nextjs';
import {
  type ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { useEffect } from 'react';

const toUrl = (
  pathname?: string | null,
  searchParams?: ReadonlyURLSearchParams | null,
) => {
  if (!pathname) {
    return '/';
  }

  const search = searchParams?.toString();
  if (search) {
    return `${pathname}?${search}`;
  }

  return pathname;
};

export const ClientAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = toUrl(pathname, searchParams);
    const extra = {
      url,
      timestamp: new Date().toISOString(),
    };

    captureMessage('page.view', { level: 'info', extra });
    console.debug('[telemetry] page.view', extra);
  }, [pathname, searchParams]);

  return null;
};
