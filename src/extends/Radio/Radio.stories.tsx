import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Radio.
 * Для использования компонента Radio в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Radio } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Radio/Radio.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Radio> = {
  argTypes: {},
  args: {},
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Radio",
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};
