import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Table.
 * Для использования компонента Table в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Table } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Table/Table.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Table> = {
  argTypes: {},
  args: {},
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Table',
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {},
};
