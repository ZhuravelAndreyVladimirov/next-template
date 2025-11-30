import type { Meta, StoryObj } from "@storybook/react";

import { UnstyledButton } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента UnstyledButton.
 * Для использования компонента UnstyledButton в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { UnstyledButton } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/UnstyledButton/UnstyledButton.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof UnstyledButton> = {
  argTypes: {},
  args: {},
  component: UnstyledButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/UnstyledButton",
};

export default meta;
type Story = StoryObj<typeof UnstyledButton>;

export const Default: Story = {
  args: {},
};
