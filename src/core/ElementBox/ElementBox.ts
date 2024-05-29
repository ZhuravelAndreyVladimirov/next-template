import React from "react";
import { ElementBoxProps } from "./types";

export const ElementBox = ({ tag = "div", ...props }: ElementBoxProps) => {
  return React.createElement(tag, props);
};
