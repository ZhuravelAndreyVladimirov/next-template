import { roboto_reg } from "@/assets/font/fonts";
import { JoinClass } from "@/helpers/JoinClass";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chakra",
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
