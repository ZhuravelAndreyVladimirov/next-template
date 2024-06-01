import React from "react";
import styles from "./element-box.module.scss";
import { BoxStyle, ElementBoxProps } from "./types";
import { convertHtmlProp } from "./helpers/convertHtmlProp";

export const ElementBox = ({
  tag = "div",
  className,
  style,
  fz,
  fw,
  ff,
  lh,
  color,
  scale,
  ...props
}: ElementBoxProps) => {
  const classes = `${styles.element} ${className}`;
  const boxStyle: BoxStyle = {};

  const propArr = [fz, fw, lh, ff, color];

  for (let index = 0; index < propArr.length; index++) {
    const el = propArr[index];
    if (el) {
      boxStyle[`--${el}`] = convertHtmlProp(el, scale);
    }
  }

  return React.createElement(tag, {
    className: classes,
    style: { ...boxStyle, ...style },
    ...props,
  });
};
