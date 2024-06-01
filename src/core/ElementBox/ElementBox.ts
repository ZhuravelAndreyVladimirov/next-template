import React from "react";
import { ElementBoxProps } from "./types";
import { JoinClass } from "@/helpers/JoinClass";

export const ElementBox = ({ tag = "div", fs, ...props }: ElementBoxProps) => {
  const classes = JoinClass.merge(fs ? `text-${fs}` : undefined);
  return React.createElement(tag, { className: classes, ...props });
};
