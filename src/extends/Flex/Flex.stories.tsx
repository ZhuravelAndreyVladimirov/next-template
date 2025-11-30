import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Flex.
 * Для использования компонента Flex в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Flex } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Flex/Flex.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Flex> = {
  argTypes: {},
  args: {},
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Flex",
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {},
};
