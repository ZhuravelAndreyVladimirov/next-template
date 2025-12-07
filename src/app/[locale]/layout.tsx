import { ClientAnalytics, ClientAppShell, ClientColorScheme } from '@/components';
import { StyleHelper } from '@/helpers';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

import { fontVariable } from '@/assets/font/fonts';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const siteName = 'Next Template';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteName,
    template: '%s | Next Template',
  },
  description: 'Современный шаблон Next.js + Mantine с i18n, темизацией и готовностью под PWA.',
  openGraph: {
    title: siteName,
    description: 'Современный шаблон Next.js + Mantine с i18n, темизацией и готовностью под PWA.',
    url: '/',
    siteName,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'Современный шаблон Next.js + Mantine с i18n, темизацией и готовностью под PWA.',
    images: ['/og-image.svg'],
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    title: siteName,
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b7285',
};

const htmlClasses = StyleHelper.merge(...fontVariable);

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html className={htmlClasses} data-mantine-color-scheme="light" lang={locale}>
      <head>
        <ClientColorScheme />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientAnalytics />
          <ClientAppShell>{children}</ClientAppShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
