import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Switch.
 * Для использования компонента Switch в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Switch } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Switch/Switch.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Switch> = {
  argTypes: {},
  args: {},
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Switch',
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};
