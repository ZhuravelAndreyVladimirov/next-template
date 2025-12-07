import type { Meta, StoryObj } from '@storybook/react';

import { FileInput } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента FileInput.
 * Для использования компонента FileInput в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { FileInput } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/FileInput/FileInput.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof FileInput> = {
  argTypes: {},
  args: {},
  component: FileInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/FileInput',
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  args: {},
};
