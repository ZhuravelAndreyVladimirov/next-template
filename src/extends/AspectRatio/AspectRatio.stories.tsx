import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента AspectRatio.
 * Для использования компонента AspectRatio в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { AspectRatio } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/AspectRatio/AspectRatio.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof AspectRatio> = {
  argTypes: {},
  args: {},
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/AspectRatio',
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {},
};
