import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Tooltip.
 * Для использования компонента Tooltip в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Tooltip } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Tooltip/Tooltip.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Tooltip> = {
  argTypes: {},
  args: {},
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Tooltip',
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
};
