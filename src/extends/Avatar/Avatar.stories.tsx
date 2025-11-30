import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Avatar.
 * Для использования компонента Avatar в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Avatar } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Avatar/Avatar.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Avatar> = {
  argTypes: {},
  args: {},
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Avatar",
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};
