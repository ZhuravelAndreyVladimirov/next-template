import React from "react";
import styles from "./element-box.module.scss";
import { BoxStyle, ElementBoxProps } from "./types";
import { JoinClass } from "@/helpers/JoinClass";

export const ElementBox = ({
  tag = "div",
  className,
  style,
  fz,
  fw,
  ff,
  lh,
  color,
  ...props
}: ElementBoxProps) => {
  const classes = JoinClass.merge(className, styles.element);
  const boxStyle: BoxStyle = {
    ...style,
  };

  if (fw) {
    boxStyle["--fw"] = `${fw}`;
  }

  if (fz) {
    boxStyle["--fz"] = `${fz}${typeof fz === "number" ? "px" : ""}`;
  }

  if (lh) {
    boxStyle["--lh"] = `${lh}${typeof lh === "number" ? "px" : ""}`;
  }

  if (ff) {
    boxStyle["--ff"] = `var(${ff})`;
  }

  if (color) {
    boxStyle["--c"] = color;
  }

  return React.createElement(tag, {
    className: classes,
    style: boxStyle,
    ...props,
  });
};
