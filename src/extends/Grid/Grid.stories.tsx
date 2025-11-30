import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Grid.
 * Для использования компонента Grid в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Grid } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Grid/Grid.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Grid> = {
  argTypes: {},
  args: {},
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Grid",
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {},
};
