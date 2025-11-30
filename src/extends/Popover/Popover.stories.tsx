import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Popover.
 * Для использования компонента Popover в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Popover } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Popover/Popover.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Popover> = {
  argTypes: {},
  args: {},
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Popover",
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
};
