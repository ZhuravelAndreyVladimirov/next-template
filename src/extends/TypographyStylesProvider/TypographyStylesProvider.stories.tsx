import type { Meta, StoryObj } from "@storybook/react";

import { TypographyStylesProvider } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента TypographyStylesProvider.
 * Для использования компонента TypographyStylesProvider в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { TypographyStylesProvider } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/TypographyStylesProvider/TypographyStylesProvider.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof TypographyStylesProvider> = {
  argTypes: {},
  args: {},
  component: TypographyStylesProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "UI Компоненты/TypographyStylesProvider",
};

export default meta;
type Story = StoryObj<typeof TypographyStylesProvider>;

export const Default: Story = {
  args: {},
};
