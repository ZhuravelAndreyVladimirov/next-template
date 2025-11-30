import { Progress } from "@mantine/core";

import styles from "./Progress.module.scss";

/**
 * 🚨 ВАЖНО: Никогда не используйте этот файл напрямую в проекте! 🚨
 *
 * Этот файл предназначен исключительно для конфигурации Mantine и демонстрации компонента Progress.
 * Для использования компонента Progress в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Progress } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Progress/Progress.ts — это приведёт к ошибкам и нарушению архитектуры.
 *
 * Если вы видите это сообщение в консоли — вы импортировали Progress напрямую, что ЗАПРЕЩЕНО!
 */
if (process.env.NODE_ENV !== "production") {
  const stack = new Error().stack;
  if (!stack?.includes("CustomMantineProvider")) {
    console.error(`[ARCHITECTURE ERROR] 🚨`);
  }
}

export const UiProgress = Progress.extend({
  classNames() {
    return { root: styles.root };
  },
});
