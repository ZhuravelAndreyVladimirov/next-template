import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Card.
 * Для использования компонента Card в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Card } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Card/Card.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Card> = {
  argTypes: {},
  args: {},
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Card',
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};
