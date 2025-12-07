import { Text } from '@mantine/core';

export const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <Text size="sm" c="dimmed">
      © {year} Next Template
    </Text>
  );
};
