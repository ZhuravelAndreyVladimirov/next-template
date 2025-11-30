import type { Meta, StoryObj } from "@storybook/react";

import { Blockquote } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Blockquote.
 * Для использования компонента Blockquote в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Blockquote } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Blockquote/Blockquote.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Blockquote> = {
  argTypes: {},
  args: {},
  component: Blockquote,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Blockquote",
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {},
};
