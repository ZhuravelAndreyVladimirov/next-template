import type { Meta, StoryObj } from '@storybook/react';

import { MantineProvider, createTheme } from '@mantine/core';
import React from 'react';

import { ThemeToggle } from './ThemeToggle';

/**
 * Компонент переключения темы.
 *
 * Этот компонент отображает кнопку для переключения между светлой и тёмной темами.
 * При клике меняет своё состояние и цвет.
 */
const meta: Meta<typeof ThemeToggle> = {
  args: {},
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <MantineProvider
        defaultColorScheme="light"
        theme={createTheme({
          defaultRadius: 'md',
        })}
      >
        <div style={{ padding: '20px', minHeight: '100px' }}>
          <Story />
        </div>
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Компоненты/ThemeToggle',
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

/**
 * Базовый пример использования компонента ThemeToggle.
 * Кликните на кнопку, чтобы переключить тему и увидеть изменение цвета и состояния.
 */
export const Default: Story = {
  args: {},
};
