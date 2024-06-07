import { ElementBox, ElementBoxProps } from "@/core";
import React from "react";

export interface UiTextProps extends ElementBoxProps {
  tag?: "p" | "span" | "code" | "q" | "strong" | "i" | "em";
}

export const UiText = ({ tag = "p", ...props }: UiTextProps) => {
  return <ElementBox tag={tag} {...props} />;
};
