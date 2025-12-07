import type { Meta, StoryObj } from '@storybook/react';

import { Indicator } from '@mantine/core';

/**
 * ВАЖНО: Никогда не используйте этот файл напрямую в проекте.
 *
 * Этот файл предназначен исключительно для конфигурации Storybook и демонстрации компонента Indicator.
 * Для использования компонента Indicator в приложении импортируйте его только из библиотеки Mantine:
 *
 *   import { Indicator } from '@mantine/core';
 *
 * Не импортируйте ничего из src/extends/Indicator/Indicator.stories.tsx — это приведёт к ошибкам и нарушению архитектуры.
 */

const meta: Meta<typeof Indicator> = {
  argTypes: {},
  args: {},
  component: Indicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'UI Компоненты/Indicator',
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
  args: {},
};
