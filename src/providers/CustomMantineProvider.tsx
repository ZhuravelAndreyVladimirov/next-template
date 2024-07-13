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
  },
  fontSizes: {
    btn: rem(14),
  },
  luminanceThreshold: 1,
  defaultRadius: rem(0),
});

export const CustomMantineProvider = ({
  children,
}: CustomMantineProviderProps) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
