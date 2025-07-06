import { Text } from "@mantine/core";

import styles from "./UiText.module.scss";

export const UiText = Text.extend({
  classNames() {
    return { root: styles.root };
  },
});
