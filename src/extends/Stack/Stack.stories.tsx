import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Stack.
 * Для использования компонента Stack в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Stack } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Stack/Stack.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Stack> = {
  argTypes: {},
  args: {},
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Stack",
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {},
};
