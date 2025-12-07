import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Autocomplete.
 * Для использования компонента Autocomplete в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Autocomplete } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Autocomplete/Autocomplete.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Autocomplete> = {
  argTypes: {},
  args: {},
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Autocomplete',
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {},
};
