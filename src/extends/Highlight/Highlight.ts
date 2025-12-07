import { Highlight } from '@mantine/core';

import styles from './Highlight.module.scss';

/**
 * 🚨 ВАЖНО: Никогда не используйте этот файл напрямую в проекте! 🚨
 *
 * Этот файл предназначен исключительно для конфигурации Mantine и демонстрации компонента Highlight.
 * Для использования компонента Highlight в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Highlight } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Highlight/Highlight.ts — это приведёт к ошибкам и нарушению архитектуры.
 *
 * Если вы видите это сообщение в консоли — вы импортировали Highlight напрямую, что ЗАПРЕЩЕНО!
 */
if (process.env.NODE_ENV !== 'production') {
  const stack = new Error().stack;
  if (!stack?.includes('CustomMantineProvider')) {
    console.error(`[ARCHITECTURE ERROR] 🚨`);
  }
}

export const UiHighlight = Highlight.extend({
  classNames() {
    return { root: styles.root };
  },
});
