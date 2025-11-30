import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Stepper.
 * Для использования компонента Stepper в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Stepper } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Stepper/Stepper.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Stepper> = {
  argTypes: {},
  args: {},
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Stepper",
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {},
};
