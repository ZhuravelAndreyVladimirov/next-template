"use client";

import { useBearStore } from "@/store/example";
import { Button, Flex, Text, Title } from "@mantine/core";

export const Bears = () => {
  const bears = useBearStore((state) => state.bears);
  const handleClick = useBearStore((state) => state.increase);
  return (
    <Flex direction="column" gap={20}>
      <Title order={2}>Пример работы стора</Title>
      <Text>{bears}</Text>
      <Button onClick={() => handleClick(1)} sm>
        Click
      </Button>
    </Flex>
  );
};
