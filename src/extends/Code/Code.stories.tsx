import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Code.
 * Для использования компонента Code в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Code } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Code/Code.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Code> = {
  argTypes: {},
  args: {},
  component: Code,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Code",
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {},
};
