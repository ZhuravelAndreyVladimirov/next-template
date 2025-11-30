import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Alert.
 * Для использования компонента Alert в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Alert } from "@mantine/core";
 *
 * Не импортируйте ничего из src/extends/Alert/Alert.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Alert> = {
  argTypes: {},
  args: {},
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Alert",
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {},
};
