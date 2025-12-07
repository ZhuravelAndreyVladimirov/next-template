import type { Meta, StoryObj } from '@storybook/react';

import { PinInput } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента PinInput.
 * Для использования компонента PinInput в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { PinInput } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/PinInput/PinInput.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof PinInput> = {
  argTypes: {},
  args: {},
  component: PinInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/PinInput',
};

export default meta;
type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  args: {},
};
