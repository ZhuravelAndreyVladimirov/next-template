import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента ScrollArea.
 * Для использования компонента ScrollArea в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { ScrollArea } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/ScrollArea/ScrollArea.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof ScrollArea> = {
  argTypes: {},
  args: {},
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/ScrollArea',
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  args: {},
};
