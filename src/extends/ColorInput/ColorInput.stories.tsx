import type { Meta, StoryObj } from '@storybook/react';

import { ColorInput } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента ColorInput.
 * Для использования компонента ColorInput в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { ColorInput } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/ColorInput/ColorInput.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof ColorInput> = {
  argTypes: {},
  args: {},
  component: ColorInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/ColorInput',
};

export default meta;
type Story = StoryObj<typeof ColorInput>;

export const Default: Story = {
  args: {},
};
