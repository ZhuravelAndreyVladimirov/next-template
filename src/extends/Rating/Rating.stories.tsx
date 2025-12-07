import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Rating.
 * Для использования компонента Rating в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Rating } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Rating/Rating.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Rating> = {
  argTypes: {},
  args: {},
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Rating',
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {},
};
