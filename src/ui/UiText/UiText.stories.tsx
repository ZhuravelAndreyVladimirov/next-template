import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@mantine/core";

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Text.
 * Для использования компонента текста в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Text } from "@mantine/core";
 *
 * Не импортируйте ничего из src/ui/UiText/UiText.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Text> = {
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      description: "Размер текста",
      options: ["lg", "md", "sm"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  title: "UI Компоненты/UiText",
};

export default meta;
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Body: Story = {
  args: {
    children: "lorem text Body",
    size: "lg",
  },
};

export const Body1: Story = {
  args: {
    children: "lorem text Body 1",
    size: "md",
  },
};

export const Body2: Story = {
  args: {
    children: "lorem text Body 2",
    size: "sm",
  },
};

export const Decoration: Story = {
  args: {
    children: "lorem text Body Decoration",
    decoration: true,
  },
};

export const Captions: Story = {
  args: {
    caption: true,
    children: "lorem text Body caption",
  },
};
