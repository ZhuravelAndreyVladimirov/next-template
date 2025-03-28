import { MountedWrapper } from "@/components";
import { StyleHelper } from "@/helpers";
import { RootProvider } from "@/providers/RootProvider";
import { ColorSchemeScript } from "@mantine/core";
import { Metadata } from "next";
import { ReactNode } from "react";

import { fontVariable } from "@/assets/font/fonts";

export const metadata: Metadata = {
  description:
    "ШАблон приложения на next.js при создании приложения стоит в первую очередь изменить мета теги",
  title: "Шаблон",
};

const htmlClasses = StyleHelper.merge(...fontVariable);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={htmlClasses} lang="ru">
      <head>
        <MountedWrapper>
          <ColorSchemeScript />
        </MountedWrapper>
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
