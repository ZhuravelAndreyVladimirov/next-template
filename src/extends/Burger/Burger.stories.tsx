import type { Meta, StoryObj } from "@storybook/react";

import { Burger } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Burger.
 * Для использования компонента Burger в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Burger } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Burger/Burger.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Burger> = {
  argTypes: {},
  args: {},
  component: Burger,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Burger",
};

export default meta;
type Story = StoryObj<typeof Burger>;

export const Default: Story = {
  args: {},
};
