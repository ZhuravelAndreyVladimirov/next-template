"use client";

import { StyleHelper } from "@/helpers";
import { Button } from "@mantine/core";

import styles from "./ExtensionButton.module.scss";

type PartialBtnVars = Partial<
  Record<
    | "--button-bd"
    | "--button-bg"
    | "--button-color"
    | "--button-fz"
    | "--button-height"
    | "--button-hover"
    | "--button-hover-color"
    | "--button-justify"
    | "--button-padding-x"
    | "--button-radius",
    string | undefined
  >
>;

export const ExtensionButton = Button.extend({
  classNames: (t, { sm }) => {
    return {
      root: StyleHelper.merge(styles.root, sm ? styles.sm : undefined),
    };
  },
  defaultProps: {
    ff: "heading",
  },
  vars: (t, props) => {
    const result: PartialBtnVars = {};
    if (props.variant === "white") {
      result["--button-bg"] = "var(--white)";
      result["--button-color"] = "var(--black)";
      result["--button-hover"] = "var(--hover-button-black)";
      result["--button-hover-color"] = "var(--white)";
    } else if (props.variant === "light") {
      result["--button-bg"] = "var(--20-black)";
      result["--button-color"] = "var(--black)";
      result["--button-hover"] = "var(--hover-button-black)";
      result["--button-hover-color"] = "var(--white)";
    } else {
      result["--button-bg"] = "var(--black)";
      result["--button-color"] = "var(--white)";
      result["--button-hover"] = "var(--80-black)";
    }

    return { root: result };
  },
});
