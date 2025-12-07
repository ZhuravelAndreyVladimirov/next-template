import type { Meta, StoryObj } from '@storybook/react';

import { Highlight } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Highlight.
 * Для использования компонента Highlight в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Highlight } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Highlight/Highlight.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Highlight> = {
  argTypes: {},
  args: {},
  component: Highlight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Highlight',
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  args: {},
};
