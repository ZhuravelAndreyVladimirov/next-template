import type { Meta, StoryObj } from '@storybook/react';

import { Kbd } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Kbd.
 * Для использования компонента Kbd в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Kbd } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Kbd/Kbd.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Kbd> = {
  argTypes: {},
  args: {},
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Kbd',
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {},
};
