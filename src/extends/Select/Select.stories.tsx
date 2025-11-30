import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Select.
 * Для использования компонента Select в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Select } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Select/Select.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Select> = {
  argTypes: {},
  args: {},
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
