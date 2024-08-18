import { Roboto } from "next/font/google";

export const roboto_reg = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-regular",
  weight: "400",
});

export const fontVariable = [roboto_reg.variable];
