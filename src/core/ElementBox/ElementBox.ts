import React from "react";
import styles from "./element-box.module.css";
import { ElementBoxProps } from "./types";
import { convertHtmlProp } from "./helpers/convertHtmlProp";
import { getStyledProps } from "./helpers/getStyledProps";

export const ElementBox = ({
  tag = "div",
  className,
  style,
  scale,
  ...props
}: ElementBoxProps) => {
  const classes = `${styles.element}${className ? " " + className : ""}`;
  const [styleProps, otherProps] = getStyledProps({ scale, ...props });

  const boxStyle: Record<string, string> = {};

  for (const [key, value] of Object.entries(styleProps)) {
    if (value) {
      boxStyle[`--${key}`] = convertHtmlProp(value, scale);
    }
  }

  return React.createElement(tag, {
    className: classes,
    style: { ...boxStyle, ...style },
    ...otherProps,
  });
};
