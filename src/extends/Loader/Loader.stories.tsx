import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Loader.
 * Для использования компонента Loader в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Loader } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Loader/Loader.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Loader> = {
  argTypes: {},
  args: {},
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Loader',
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {},
};
