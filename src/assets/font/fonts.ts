import { Roboto } from "next/font/google";

export const roboto_reg = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-regular",
});

export const fontVariable = [roboto_reg.variable];
