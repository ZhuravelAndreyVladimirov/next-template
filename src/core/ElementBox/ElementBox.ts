import React from "react";
import { ElementBoxProps } from "./types";
import { JoinClass } from "@/helpers/JoinClass";
import fontWidth from "./styles/font-width.module.scss";

export const ElementBox = ({
  tag = "div",
  fs,
  fw,
  ...props
}: ElementBoxProps) => {
  const classes = JoinClass.merge(fw ? fontWidth[`fw_${fw}`] : undefined);
  return React.createElement(tag, { className: classes, ...props });
};
