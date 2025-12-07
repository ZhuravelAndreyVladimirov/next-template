import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Tabs.
 * Для использования компонента Tabs в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Tabs } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Tabs/Tabs.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Tabs> = {
  argTypes: {},
  args: {},
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Tabs',
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
};
