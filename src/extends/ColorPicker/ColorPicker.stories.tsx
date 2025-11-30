import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента ColorPicker.
 * Для использования компонента ColorPicker в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { ColorPicker } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/ColorPicker/ColorPicker.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof ColorPicker> = {
  argTypes: {},
  args: {},
  component: ColorPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/ColorPicker",
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {},
};
