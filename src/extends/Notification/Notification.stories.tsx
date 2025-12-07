import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Notification.
 * Для использования компонента Notification в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Notification } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Notification/Notification.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Notification> = {
  argTypes: {},
  args: {},
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Notification',
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {},
};
