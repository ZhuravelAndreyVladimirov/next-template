import type { Meta, StoryObj } from "@storybook/react";

import { Overlay } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Overlay.
 * Для использования компонента Overlay в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Overlay } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Overlay/Overlay.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Overlay> = {
  argTypes: {},
  args: {},
  component: Overlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Overlay",
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  args: {},
};
