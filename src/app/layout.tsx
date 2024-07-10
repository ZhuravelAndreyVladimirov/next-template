import { fontVariable } from "@/assets/font/fonts";
import { JoinClass } from "@/helpers/JoinClass";
import { RootProvider } from "@/providers/RootProvider";
import { ColorSchemeScript } from "@mantine/core";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Шаблон",
  description:
    "ШАблон приложения на next.js при создании приложения стоит в первую очередь изменить мета теги",
};

const htmlClasses = JoinClass.merge(...fontVariable);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={htmlClasses}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
