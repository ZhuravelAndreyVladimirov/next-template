import { createTheme, MantineProvider, rem } from "@mantine/core";
import { ReactNode } from "react";
import "@mantine/core/styles.css";
import { ExtensionButton } from "@/uiExtensions";
import { roboto_reg } from "@/assets/font/fonts";

interface CustomMantineProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  // при внесении правок в breakpoints поправь postcss.config.cjs
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    xxxl: "1931px",
  },
  components: {
    Button: ExtensionButton,
  },
  headings: {
    fontFamily: roboto_reg.variable,
    fontWeight: "400",
  },
  fontSizes: {
    btn: rem(10),
  },
  luminanceThreshold: 1,
  defaultRadius: rem(5),
});

export const CustomMantineProvider = ({
  children,
}: CustomMantineProviderProps) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
