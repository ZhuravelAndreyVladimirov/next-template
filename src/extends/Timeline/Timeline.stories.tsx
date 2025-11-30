import type { Meta, StoryObj } from "@storybook/react";

import { Timeline } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Timeline.
 * Для использования компонента Timeline в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Timeline } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Timeline/Timeline.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Timeline> = {
  argTypes: {},
  args: {},
  component: Timeline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Timeline",
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {},
};
