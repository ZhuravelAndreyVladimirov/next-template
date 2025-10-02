"use client";
import { Box, Text } from "@mantine/core";

import { useUserStore } from "@/store/user";

export const MainPage = () => {
  const { user } = useUserStore();
  return (
    <Box p={40}>
      {user && (
        <Box>
          <Text>Тестовое сообщение</Text>
        </Box>
      )}
    </Box>
  );
};
