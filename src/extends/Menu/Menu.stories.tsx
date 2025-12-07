import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Menu.
 * Для использования компонента Menu в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Menu } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Menu/Menu.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Menu> = {
  argTypes: {},
  args: {},
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Menu',
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {},
};
