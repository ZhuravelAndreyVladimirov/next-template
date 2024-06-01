import React from "react";
import styles from "./element-box.module.scss";
import { BoxStyle, ElementBoxProps } from "./types";
import { JoinClass } from "@/helpers/JoinClass";

export const ElementBox = ({
  tag = "div",
  className,
  style,
  fw,
  ...props
}: ElementBoxProps) => {
  const classes = JoinClass.merge(className, styles.element);
  const boxStyle: BoxStyle = {
    ...style,
  };

  if (fw) {
    boxStyle["--fw"] = `${fw}`;
  }

  return React.createElement(tag, {
    className: classes,
    style: boxStyle,
    ...props,
  });
};
