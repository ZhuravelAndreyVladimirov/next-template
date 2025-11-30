import type { Meta, StoryObj } from "@storybook/react";

import { VisuallyHidden } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента VisuallyHidden.
 * Для использования компонента VisuallyHidden в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { VisuallyHidden } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/VisuallyHidden/VisuallyHidden.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof VisuallyHidden> = {
  argTypes: {},
  args: {},
  component: VisuallyHidden,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/VisuallyHidden",
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  args: {},
};
