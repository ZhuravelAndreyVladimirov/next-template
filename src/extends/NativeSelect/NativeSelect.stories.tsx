import type { Meta, StoryObj } from "@storybook/react";

import { NativeSelect } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента NativeSelect.
 * Для использования компонента NativeSelect в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { NativeSelect } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/NativeSelect/NativeSelect.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof NativeSelect> = {
  argTypes: {},
  args: {},
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/NativeSelect",
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  args: {},
};
