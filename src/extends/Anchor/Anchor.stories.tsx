import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Anchor.
 * Для использования компонента Anchor в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Anchor } from "@mantine/core";
 *
 * Не импортируйте ничего из src/extends/Anchor/Anchor.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Anchor> = {
  argTypes: {},
  args: {},
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Anchor",
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {},
};
