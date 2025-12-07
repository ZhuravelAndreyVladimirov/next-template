import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Container.
 * Для использования компонента Container в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Container } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Container/Container.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Container> = {
  argTypes: {},
  args: {},
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Container',
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {},
};
