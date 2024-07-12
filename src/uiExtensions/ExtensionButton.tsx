"use client";

import { Button, rem } from "@mantine/core";

export const ExtensionButton = Button.extend({
  defaultProps: {
    radius: "default",
    variant: "outline",
    ff: "heading",
    fz: {
      base: rem(12),
      xs: rem(14),
      sm: rem(18),
      md: rem(22),
      lg: rem(24),
      xl: rem(28),
    },
    fw: "400",

    classNames: {},
  },
  styles: (theme, props) => {
    console.log(theme, props);

    return {};
  },
  vars: (theme, props) => {
    if (props.variant === "outline") {
      return {
        root: {
          "--button-bg": "transparent",
          "--button-bd": `${rem(1)} solid black`,
        },
      };
    }

    return { root: {} };
  },
});
