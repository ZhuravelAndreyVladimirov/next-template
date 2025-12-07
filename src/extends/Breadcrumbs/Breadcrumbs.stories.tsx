import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Breadcrumbs.
 * Для использования компонента Breadcrumbs в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Breadcrumbs } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Breadcrumbs/Breadcrumbs.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Breadcrumbs> = {
  argTypes: {},
  args: {},
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Breadcrumbs',
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {},
};
