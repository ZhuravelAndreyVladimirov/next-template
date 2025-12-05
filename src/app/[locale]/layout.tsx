import { Header, MountedWrapper } from "@/components";
import { StyleHelper } from "@/helpers";
import { RootProvider } from "@/providers/RootProvider";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
} from "@mantine/core";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";

import { fontVariable } from "@/assets/font/fonts";

// Layout остается динамическим (может обновляться на каждом запросе)
// Это позволяет использовать динамические данные в layout (например, пользователь, сессия и т.д.)

// Запретить динамическую генерацию для непредгенерированных локалей
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  description:
    "ШАблон приложения на next.js при создании приложения стоит в первую очередь изменить мета теги",
  title: "Шаблон",
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
        <MountedWrapper>
          <ColorSchemeScript />
        </MountedWrapper>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <RootProvider>
            <AppShell>
              <AppShellHeader>
                <Header />
              </AppShellHeader>
              <AppShellMain>{children}</AppShellMain>
              <AppShellFooter></AppShellFooter>
            </AppShell>
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
