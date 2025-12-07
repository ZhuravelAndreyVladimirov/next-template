import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Textarea.
 * Для использования компонента Textarea в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Textarea } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Textarea/Textarea.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Textarea> = {
  argTypes: {},
  args: {},
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Textarea',
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
};
