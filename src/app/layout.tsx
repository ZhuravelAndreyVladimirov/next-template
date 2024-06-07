import type { Metadata } from "next";
import "./globals.css";
import "@/style/reset.css";
import { roboto_reg } from "@/assets/font/fonts";
import { JoinClass } from "@/helpers/JoinClass";

export const metadata: Metadata = {
  title: "Next template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const htmlClasses = JoinClass.merge(roboto_reg.variable);

  return (
    <html lang="en" className={htmlClasses}>
      <body>{children}</body>
    </html>
  );
}
