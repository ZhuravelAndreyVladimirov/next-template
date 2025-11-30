import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Modal.
 * Для использования компонента Modal в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Modal } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Modal/Modal.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Modal> = {
  argTypes: {},
  args: {},
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/Modal",
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};
