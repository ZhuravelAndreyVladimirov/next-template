"use client";

import {
  CSSVariablesResolver,
  MantineProvider,
  createTheme,
  rem,
} from "@mantine/core";
import { ReactNode } from "react";

import { roboto_reg } from "@/assets/font/fonts";
import { UiText } from "@/ui/UiText/UiText";

import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
interface CustomMantineProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  // при внесении правок в breakpoints поправь postcss.config.cjs
  breakpoints: {
    desktop: "90em",
    laptop: "64em",
    mobile: "36em",
    tablet: "48em",
  },

  colors: {},

  components: {
    Text: UiText,
  },

  defaultRadius: rem(5),
  fontSizes: {
    btn: rem(14),
  },
  headings: {
    fontFamily: roboto_reg.variable,
    fontWeight: "400",
    sizes: {
      h1: {
        fontSize: "var(--h1-fz)",
        fontWeight: "500",
        lineHeight: "140%",
      },
      h2: {
        fontSize: "var(--h2-fz)",
        fontWeight: "500",
        lineHeight: "120%",
      },
      h3: {
        fontSize: "var(--h3-fz)",
        fontWeight: "500",
        lineHeight: "110%",
      },
    },
  },
  luminanceThreshold: 1,
  primaryColor: "dark",
});

const resolver: CSSVariablesResolver = () => ({
  dark: {},
  light: {},
  variables: {},
});

export const CustomMantineProvider = ({
  children,
}: CustomMantineProviderProps) => {
  return (
    <MantineProvider
      cssVariablesResolver={resolver}
      defaultColorScheme="light"
      theme={theme}
      withStaticClasses={false}
    >
      {children}
    </MantineProvider>
  );
};
