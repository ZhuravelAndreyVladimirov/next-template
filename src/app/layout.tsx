import { UserService } from "@/api/UserService/UserService";
import { Header, MountedWrapper } from "@/components";
import { StyleHelper } from "@/helpers";
import { RootProvider } from "@/providers/RootProvider";
import { UserHydrationProvider } from "@/providers/UserHydrationProvider";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
} from "@mantine/core";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { ReactNode } from "react";

import { fontVariable } from "@/assets/font/fonts";

export const metadata: Metadata = {
  description:
    "ШАблон приложения на next.js при создании приложения стоит в первую очередь изменить мета теги",
  title: "Шаблон",
};

const htmlClasses = StyleHelper.merge(...fontVariable);

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  let user = null;
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    let res = null;
    if (token) {
      res = await UserService.getMe({ token });
      user = res.user;
      console.log("[SSR] User:", user);
    } else {
      console.log("[SSR] Нет токена в cookie");
    }
  } catch (e) {
    console.error("[SSR] Не удалось получить пользователя:", e);
  }
  return (
    <html className={htmlClasses} lang="ru">
      <head>
        <MountedWrapper>
          <ColorSchemeScript />
        </MountedWrapper>
      </head>
      <body>
        <RootProvider>
          <UserHydrationProvider SSRUser={user} />
          <AppShell>
            <AppShellHeader>
              <Header SSRUser={user} />
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
            <AppShellFooter></AppShellFooter>
          </AppShell>
        </RootProvider>
      </body>
    </html>
  );
}
