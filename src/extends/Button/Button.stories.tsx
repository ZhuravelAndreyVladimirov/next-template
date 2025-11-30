import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Button.
 * Для использования компонента Button в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Button } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Button/Button.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Button> = {
  argTypes: {},
  args: {},
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
};
