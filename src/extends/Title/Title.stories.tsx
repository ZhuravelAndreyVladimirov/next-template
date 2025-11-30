import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Title.
 * Для использования компонента Title в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Title } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Title/Title.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Title> = {
  argTypes: {},
  args: {},
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Title",
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {},
};
