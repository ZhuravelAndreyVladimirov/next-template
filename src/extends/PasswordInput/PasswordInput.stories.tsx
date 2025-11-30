import type { Meta, StoryObj } from "@storybook/react";

import { PasswordInput } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента PasswordInput.
 * Для использования компонента PasswordInput в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { PasswordInput } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/PasswordInput/PasswordInput.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof PasswordInput> = {
  argTypes: {},
  args: {},
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/PasswordInput",
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {},
};
