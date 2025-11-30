import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Image.
 * Для использования компонента Image в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Image } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Image/Image.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Image> = {
  argTypes: {},
  args: {},
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Image",
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {},
};
