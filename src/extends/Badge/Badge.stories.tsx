import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Badge.
 * Для использования компонента Badge в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Badge } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Badge/Badge.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Badge> = {
  argTypes: {},
  args: {},
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Badge',
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
};
