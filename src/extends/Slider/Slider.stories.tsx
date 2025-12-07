import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Slider.
 * Для использования компонента Slider в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Slider } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Slider/Slider.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Slider> = {
  argTypes: {},
  args: {},
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Slider',
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {},
};
