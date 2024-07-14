import { Title } from "@mantine/core";

import styles from "./extensions-title.module.scss";

export const ExtensionTitle = Title.extend({
  defaultProps: {
    c: "var(--title-c)",
  },
  classNames: () => {
    return {
      root: styles.root,
    };
  },
});
