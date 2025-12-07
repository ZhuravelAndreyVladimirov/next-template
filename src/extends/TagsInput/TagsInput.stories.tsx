import type { Meta, StoryObj } from '@storybook/react';

import { TagsInput } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента TagsInput.
 * Для использования компонента TagsInput в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { TagsInput } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/TagsInput/TagsInput.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof TagsInput> = {
  argTypes: {},
  args: {},
  component: TagsInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/TagsInput',
};

export default meta;
type Story = StoryObj<typeof TagsInput>;

export const Default: Story = {
  args: {},
};
