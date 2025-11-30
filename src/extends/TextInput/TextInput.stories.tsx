import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента TextInput.
 * Для использования компонента TextInput в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { TextInput } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/TextInput/TextInput.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof TextInput> = {
  argTypes: {},
  args: {},
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/TextInput",
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {},
};
