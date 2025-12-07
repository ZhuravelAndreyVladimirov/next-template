import type { Meta, StoryObj } from '@storybook/react';

import { AppShell } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента AppShell.
 * Для использования компонента AppShell в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { AppShell } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/AppShell/AppShell.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof AppShell> = {
  argTypes: {},
  args: {},
  component: AppShell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/AppShell',
};

export default meta;
type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  args: {},
};
