import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Progress.
 * Для использования компонента Progress в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Progress } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Progress/Progress.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Progress> = {
  argTypes: {},
  args: {},
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Progress",
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {},
};
