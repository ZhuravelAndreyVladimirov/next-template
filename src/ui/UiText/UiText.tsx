import React from "react";

export interface UiTextProps extends React.HTMLProps<HTMLElement> {
  tag: "p" | "span" | "code" | "q" | "strong" | "i" | "em";
}

export const UiText = ({ tag, ...props }: UiTextProps) => {
  return React.createElement(tag, props);
};
