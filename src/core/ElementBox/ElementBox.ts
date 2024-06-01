import React from "react";
import styles from "./element-box.module.scss";
import { BoxStyle, ElementBoxProps } from "./types";
import { JoinClass } from "@/helpers/JoinClass";

export const ElementBox = ({
  tag = "div",
  className,
  style,
  fs,
  fw,
  lh,
  ...props
}: ElementBoxProps) => {
  const classes = JoinClass.merge(className, styles.element);
  const boxStyle: BoxStyle = {
    ...style,
  };

  if (fw) {
    boxStyle["--fw"] = `${fw}`;
  }

  if (fs) {
    boxStyle["--fs"] = `${fs}${typeof fs === "number" ? "px" : ""}`;
  }

  if (lh) {
    boxStyle["--lh"] = `${lh}${typeof lh === "number" ? "px" : ""}`;
  }

  return React.createElement(tag, {
    className: classes,
    style: boxStyle,
    ...props,
  });
};
