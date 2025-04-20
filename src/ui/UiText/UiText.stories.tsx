import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@mantine/core";

const meta: Meta<typeof Text> = {
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      description: "Тип текста",
      options: ["lg", "md", "sm", "decoration", "caption"],
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
  title: "UI Компоненты/Text",
};

export default meta;
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Body: Story = {
  args: {
    children: "lorem text Body",
    variant: "lg",
  },
};

export const Body1: Story = {
  args: {
    children: "lorem text Body 1",
    variant: "md",
  },
};

export const Body2: Story = {
  args: {
    children: "lorem text Body 2",
    variant: "sm",
  },
};

export const Decoration: Story = {
  args: {
    children: "lorem text Body Decoration",
    variant: "decoration",
  },
};

export const Captions: Story = {
  args: {
    children: "lorem text Body caption",
    variant: "caption",
  },
};
