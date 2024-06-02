import React from "react";
import styles from "./element-box.module.scss";
import { ElementBoxProps } from "./types";
import { convertHtmlProp } from "./helpers/convertHtmlProp";

export const ElementBox = ({
  tag = "div",
  className,
  style,
  fz,
  fw,
  ff,
  lh,
  fs,
  color,
  font,
  fv,
  fv_num,
  scale,
  ...props
}: ElementBoxProps) => {
  const classes = `${styles.element}${className ? " " + className : ""}`;
  const styleProps = { fz, fw, lh, ff, c: color, fs, font, fv, fv_num };

  const boxStyle: Record<string, string> = {};

  for (const [key, value] of Object.entries(styleProps)) {
    if (value) {
      boxStyle[`--${key}`] = convertHtmlProp(value, scale);
    }
  }

  return React.createElement(tag, {
    className: classes,
    style: { ...boxStyle, ...style },
    ...props,
  });
};
