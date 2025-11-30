import { Alert } from "@mantine/core";

import styles from "./Alert.module.scss";

/**
 * 🚨 ВАЖНО: Никогда не используйте этот файл напрямую в проекте! 🚨
 *
 * Этот файл предназначен исключительно для конфигурации Mantine и демонстрации компонента Alert.
 * Для использования компонента Alert в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Alert } from "@mantine/core";
 *
 * Не импортируйте ничего из src/extends/Alert/Alert.ts — это приведёт к ошибкам и нарушению архитектуры.
 *
 * Если вы видите это сообщение в консоли — вы импортировали Alert напрямую, что ЗАПРЕЩЕНО!
 */
if (process.env.NODE_ENV !== "production") {
  // Исключение: разрешён импорт из CustomMantineProvider
  const stack = new Error().stack;
  if (!stack?.includes("CustomMantineProvider")) {
    // eslint-disable-next-line no-console
    console.error(
      `[ARCHITECTURE ERROR] 🚨 Вы импортировали src/extends/Alert/Alert.ts напрямую! Используйте только import { Alert } from "@mantine/core".`,
    );
  }
}

export const UiAlert = Alert.extend({
  classNames() {
    return { root: styles.root };
  },
});
