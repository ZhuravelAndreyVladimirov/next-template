import type { Meta, StoryObj } from "@storybook/react";

import { List } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента List.
 * Для использования компонента List в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { List } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/List/List.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof List> = {
  argTypes: {},
  args: {},
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/List",
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {},
};
