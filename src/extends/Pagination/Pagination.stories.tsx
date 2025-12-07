import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Pagination.
 * Для использования компонента Pagination в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Pagination } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Pagination/Pagination.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Pagination> = {
  argTypes: {},
  args: {},
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Pagination',
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
};
