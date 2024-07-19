import {
  ButtonProps,
  MantineSize,
  ButtonFactory,
  TitleProps,
  TextProps,
} from "@mantine/core";

declare module "@mantine/core" {
  export interface ButtonProps extends Omit<ButtonProps, "variant"> {
    variant?: "white" | "light";
    sm?: boolean;
  }

  export interface TitleProps extends Omit<TitleProps, "variant"> {
    variant?: "black" | "white";
  }

  export interface TextProps extends Omit<TextProps, "variant"> {
    variant?: "black" | "white";
  }
}
