import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Checkbox.
 * Для использования компонента Checkbox в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Checkbox } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Checkbox/Checkbox.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Checkbox> = {
  argTypes: {},
  args: {},
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Checkbox",
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};
