import type { Meta, StoryObj } from "@storybook/react";

import { Center } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Center.
 * Для использования компонента Center в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Center } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Center/Center.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Center> = {
  argTypes: {},
  args: {},
  component: Center,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Center",
};

export default meta;
type Story = StoryObj<typeof Center>;

export const Default: Story = {
  args: {},
};
