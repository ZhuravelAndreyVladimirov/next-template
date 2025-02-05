import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "@mantine/core";

const variantOptions: ButtonProps["variant"][] = [
  "default",
  "filled",
  "gradient",
  "light",
  "outline",
  "subtle",
  "transparent",
  "white",
];

const meta: Meta<typeof Button> = {
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      description: "Тип кнопки",
      options: variantOptions,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  title: "UI Mantine Core/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Кнопка",
    disabled: false,
    h: 56,
    variant: "primary",
    w: 199,
  },
};
