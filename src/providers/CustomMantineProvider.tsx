"use client";

import { ReactNode } from "react";
import {
  createTheme,
  CSSVariablesResolver,
  MantineProvider,
  rem,
} from "@mantine/core";
import { roboto_reg } from "@/assets/font/fonts";
import { ExtensionButton } from "@/extensions";

import "@mantine/core/styles.layer.css";
interface CustomMantineProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  // при внесении правок в breakpoints поправь postcss.config.cjs
  breakpoints: {
    mobile: "36em",
    tablet: "48em",
    laptop: "64em",
    desktop: "90em",
  },

  components: {
    Button: ExtensionButton,
  },
  headings: {
    fontFamily: roboto_reg.variable,
    fontWeight: "400",
    sizes: {
      h1: { fontSize: rem(45) },
    },
  },
  fontSizes: {
    btn: rem(14),
  },
  luminanceThreshold: 1,
  defaultRadius: rem(5),
});

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--black": "#333",
    "--white": "#f8f8f8",
    "--80-black": "rgba(51, 51, 51, 0.8)",
    "--50-black": "rgba(51, 51, 51, 0.5)",
    "--30-black": "rgba(51, 51, 51, 0.3)",
    "--20-black": "rgba(51, 51, 51, 0.2)",
    "--hover-button-black": "#212121",
  },
  light: {},
  dark: {},
});

export const CustomMantineProvider = ({
  children,
}: CustomMantineProviderProps) => (
  <MantineProvider
    cssVariablesResolver={resolver}
    withStaticClasses={false}
    theme={theme}
  >
    {children}
  </MantineProvider>
);
