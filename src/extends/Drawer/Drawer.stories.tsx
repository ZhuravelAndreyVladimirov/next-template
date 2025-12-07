import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Drawer.
 * Для использования компонента Drawer в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Drawer } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Drawer/Drawer.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Drawer> = {
  argTypes: {},
  args: {},
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Drawer',
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {},
};
