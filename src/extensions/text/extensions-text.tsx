import { Text } from "@mantine/core";

import styles from "./extensions-text.module.scss";

export const ExtensionText = Text.extend({
  classNames() {
    return { root: styles.root };
  },
});
