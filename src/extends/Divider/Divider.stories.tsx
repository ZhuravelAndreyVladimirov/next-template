import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Divider.
 * Для использования компонента Divider в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Divider } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Divider/Divider.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Divider> = {
  argTypes: {},
  args: {},
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Divider',
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};
