import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента MultiSelect.
 * Для использования компонента MultiSelect в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { MultiSelect } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/MultiSelect/MultiSelect.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof MultiSelect> = {
  argTypes: {},
  args: {},
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/MultiSelect',
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {},
};
