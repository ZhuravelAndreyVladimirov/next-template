import type { Meta, StoryObj } from "@storybook/react";

import { JsonInput } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента JsonInput.
 * Для использования компонента JsonInput в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { JsonInput } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/JsonInput/JsonInput.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof JsonInput> = {
  argTypes: {},
  args: {},
  component: JsonInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/JsonInput",
};

export default meta;
type Story = StoryObj<typeof JsonInput>;

export const Default: Story = {
  args: {},
};
