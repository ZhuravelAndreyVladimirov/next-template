import type { Meta, StoryObj } from "@storybook/react";

import { RingProgress } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента RingProgress.
 * Для использования компонента RingProgress в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { RingProgress } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/RingProgress/RingProgress.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof RingProgress> = {
  argTypes: {},
  args: {
    sections: [
      { value: 40, color: "blue" },
      { value: 30, color: "green" },
      { value: 30, color: "yellow" },
    ],
  },
  component: RingProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/RingProgress",
};

export default meta;
type Story = StoryObj<typeof RingProgress>;

export const Default: Story = {
  args: {
    sections: [
      { value: 40, color: "blue" },
      { value: 30, color: "green" },
      { value: 30, color: "yellow" },
    ],
  },
};
