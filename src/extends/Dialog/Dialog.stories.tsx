import type { Meta, StoryObj } from '@storybook/react';

import { Dialog } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Dialog.
 * Для использования компонента Dialog в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Dialog } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Dialog/Dialog.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Dialog> = {
  argTypes: {},
  args: {},
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Dialog',
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
};
