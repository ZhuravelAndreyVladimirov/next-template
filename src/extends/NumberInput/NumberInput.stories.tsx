import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента NumberInput.
 * Для использования компонента NumberInput в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { NumberInput } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/NumberInput/NumberInput.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof NumberInput> = {
  argTypes: {},
  args: {},
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/NumberInput',
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {},
};
