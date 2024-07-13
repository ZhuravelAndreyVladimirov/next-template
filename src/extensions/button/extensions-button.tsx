"use client";

import { Button } from "@mantine/core";
import styles from "./extensions-button.module.scss";

type PartialBtnVars = Partial<
  Record<
    | "--button-justify"
    | "--button-height"
    | "--button-padding-x"
    | "--button-fz"
    | "--button-radius"
    | "--button-bg"
    | "--button-hover"
    | "--button-hover-color"
    | "--button-color"
    | "--button-bd",
    string | undefined
  >
>;

export const ExtensionButton = Button.extend({
  defaultProps: {
    ff: "heading",
  },
  vars: (t, props) => {
    const result: PartialBtnVars = {};
    if (props.variant === "white") {
      result["--button-bg"] = "var(--white)";
      result["--button-color"] = "var(--black)";
      result["--button-hover"] = "var(--20-black)";
    } else if (props.variant === "light") {
      result["--button-bg"] = "var(--20-black)";
      result["--button-color"] = "var(--black)";
      result["--button-hover"] = "var(--50-black)";
    } else {
      result["--button-bg"] = "var(--black)";
      result["--button-color"] = "var(--white)";
      result["--button-hover"] = "var(--50-black)";
    }

    return { root: result };
  },
  classNames: () => {
    return {
      root: styles.root,
    };
  },
});
