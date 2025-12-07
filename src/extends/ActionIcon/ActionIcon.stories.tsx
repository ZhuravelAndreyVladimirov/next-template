import type { Meta, StoryObj } from '@storybook/react';

import { ActionIcon } from '@mantine/core';

const meta: Meta<typeof ActionIcon> = {
  argTypes: {},
  args: {},
  component: ActionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/ActionIcon',
};

export default meta;
type Story = StoryObj<typeof ActionIcon>;

export const Default: Story = {
  args: {},
};
