import type { Meta, StoryObj } from "@storybook/react";

import { Group } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Group.
 * Для использования компонента Group в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Group } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Group/Group.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Group> = {
  argTypes: {},
  args: {},
  component: Group,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Group",
};

export default meta;
type Story = StoryObj<typeof Group>;

export const Default: Story = {
  args: {},
};
