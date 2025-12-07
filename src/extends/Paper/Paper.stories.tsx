import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Paper.
 * Для использования компонента Paper в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Paper } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Paper/Paper.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Paper> = {
  argTypes: {},
  args: {},
  component: Paper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Paper',
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {},
};
