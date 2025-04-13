"use client";

import {
  CSSVariablesResolver,
  MantineProvider,
  createTheme,
  rem,
} from "@mantine/core";
import { ReactNode } from "react";

import { roboto_reg } from "@/assets/font/fonts";

import "@mantine/core/styles.layer.css";
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

  colors: {
    black: [
      "#f5f5f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b2b2b2",
      "#8e8e8e",
      "#6e6e6e",
      "#525252",
      "#393939",
      "#262626",
      "#121212",
    ],
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },

  components: {},

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
  dark: {
    "--20-black": "rgba(51, 51, 51, 0.2)",
    "--30-black": "rgba(51, 51, 51, 0.3)",
    "--50-black": "rgba(51, 51, 51, 0.5)",
    "--80-black": "rgba(51, 51, 51, 0.8)",
    "--black": "#f8f8f8",
    "--hover-button-black": "#212121",
    "--white": "#333",
  },
  light: {
    "--20-black": "rgba(51, 51, 51, 0.2)",
    "--30-black": "rgba(51, 51, 51, 0.3)",
    "--50-black": "rgba(51, 51, 51, 0.5)",
    "--80-black": "rgba(51, 51, 51, 0.8)",
    "--black": "#333",
    "--hover-button-black": "#212121",
    "--white": "#f8f8f8",
  },
  variables: {
    "--20-black": "rgba(51, 51, 51, 0.2)",
    "--30-black": "rgba(51, 51, 51, 0.3)",
    "--50-black": "rgba(51, 51, 51, 0.5)",
    "--80-black": "rgba(51, 51, 51, 0.8)",
    "--black": "#333",
    "--hover-button-black": "#212121",
    "--white": "#f8f8f8",
  },
});

export const CustomMantineProvider = ({
  children,
}: CustomMantineProviderProps) => {
  return (
    <MantineProvider
      cssVariablesResolver={resolver}
      defaultColorScheme="light"
      forceColorScheme="light"
      theme={theme}
      withStaticClasses={false}
    >
      {children}
    </MantineProvider>
  );
};
