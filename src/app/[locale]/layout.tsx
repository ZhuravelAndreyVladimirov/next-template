import { ClientAnalytics, ClientAppShell, ClientColorScheme } from '@/components';
import { StyleHelper } from '@/helpers';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

import { fontVariable } from '@/assets/font/fonts';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  description:
    'ШАблон приложения на next.js при создании приложения стоит в первую очередь изменить мета теги',
  title: 'Шаблон',
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
    <html className={htmlClasses} lang={locale}>
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
