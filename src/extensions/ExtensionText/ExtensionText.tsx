import { Text } from "@mantine/core";

import styles from "./ExtensionText.module.scss";

export const ExtensionText = Text.extend({
  classNames() {
    return { root: styles.root };
  },
});
