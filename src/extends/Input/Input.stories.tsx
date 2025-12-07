import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Input.
 * Для использования компонента Input в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Input } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Input/Input.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Input> = {
  argTypes: {},
  args: {},
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Input',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};
