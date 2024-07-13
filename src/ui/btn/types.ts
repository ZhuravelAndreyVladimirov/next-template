import { ButtonProps } from "@mantine/core";

export interface BtnProps extends Omit<ButtonProps, "size" | "variant"> {
  variant?: "white" | "light";
}
