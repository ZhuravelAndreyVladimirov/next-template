"use client";

import { Button, rem } from "@mantine/core";

export const ExtensionButton = Button.extend({
  defaultProps: {
    radius: rem(5),
    size: "md",
    variant: "outline",
  },
  styles: (theme, props) => ({}),
  vars: (theme, props) => ({ root: {} }),
});
