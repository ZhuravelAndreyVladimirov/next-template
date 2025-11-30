import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента SegmentedControl.
 * Для использования компонента SegmentedControl в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { SegmentedControl } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/SegmentedControl/SegmentedControl.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof SegmentedControl> = {
  argTypes: {},
  args: {},
  component: SegmentedControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/SegmentedControl",
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  args: {},
};
