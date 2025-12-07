'use client';

import { Container, Group, Text } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';

import { LocaleToggle } from '../LocaleToggle';
import { ThemeToggle } from '../ThemeToggle';

export const ClientHeader = () => {
  return (
    <Container size="lg" px="md" py="sm">
      <Group justify="space-between" align="center" wrap="nowrap">
        <Group gap="xs" wrap="nowrap">
          <IconLanguage size={20} stroke={1.6} />
          <Text fw={700}>Next Template</Text>
        </Group>
        <Group gap="sm" wrap="nowrap">
          <LocaleToggle />
          <ThemeToggle />
        </Group>
      </Group>
    </Container>
  );
};
