import { Text } from "@mantine/core";

import styles from "./UiText.module.scss";

/**
 * 🚨 ВАЖНО: Никогда не используйте этот файл напрямую в проекте! 🚨
 *
 * Этот файл предназначен исключительно для конфигурации Mantine и демонстрации компонента Text.
 * Для использования компонента текста в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Text } from "@mantine/core";
 *
 * Не импортируйте ничего из src/ui/UiText/UiText.ts — это приведёт к ошибкам и нарушению архитектуры.
 *
 * Если вы видите это сообщение в консоли — вы импортировали UiText напрямую, что ЗАПРЕЩЕНО!
 */
if (process.env.NODE_ENV !== "production") {
  // Исключение: разрешён импорт из CustomMantineProvider
  const stack = new Error().stack;
  if (!stack?.includes("CustomMantineProvider")) {
    // eslint-disable-next-line no-console
    console.error(
      "[ARCHITECTURE ERROR] 🚨 Вы импортировали src/ui/UiText/UiText.ts напрямую! Используйте только import { Text } from '@mantine/core'.",
    );
  }
}

export const UiText = Text.extend({
  classNames() {
    return { root: styles.root };
  },
});
