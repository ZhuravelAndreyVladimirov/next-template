"use client";

import { Container, Group, Text } from "@mantine/core";

import { Copyright } from "../Copyright";

export const ClientFooter = () => {
  return (
    <Container size="lg" px="md" py="sm">
      <Group justify="space-between" align="center">
        <Copyright />
        <Text size="sm" c="dimmed">
          Made with Next.js & Mantine
        </Text>
      </Group>
    </Container>
  );
};
