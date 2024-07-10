import { createTheme, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import "@mantine/core/styles.css";
import { ExtensionButton } from "@/uiExtensions";

interface CustomMantineProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  // при внесении правок в размеры поправь postcss.config.cjs
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  components: {
    Button: ExtensionButton,
  },
});

export const CustomMantineProvider = ({
  children,
}: CustomMantineProviderProps) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
