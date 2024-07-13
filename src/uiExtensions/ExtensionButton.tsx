"use client";

import { Button, rem } from "@mantine/core";

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
/**
 * @description use props variant white - to white btn, light - to gray btn, in all other cases it will be - black btn
 */

export const ExtensionButton = Button.extend({
  defaultProps: {
    // radius: "default",
    // ff: "heading",
    // fz: {
    //   base: rem(18),
    //   desktop: rem(20),
    // },
    // fw: "400",
  },
  styles: (theme, props) => {
    return {};
  },
  vars: (theme, props) => {
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
  classNames: (theme, props) => {
    return {
      root: "",
    };
  },
});
