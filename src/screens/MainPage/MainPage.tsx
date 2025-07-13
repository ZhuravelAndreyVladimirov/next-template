"use client";
import { Box, Button, Group, Text } from "@mantine/core";

import { useUserStore } from "@/store/user";

const handleOpenAuth = async () => {
  let AuthModalComponent;
  let openModalFn;
  try {
    const { AuthModal } = await import("@/components/authModal/AuthModal");
    AuthModalComponent = AuthModal;
  } catch (error) {
    // Можно добавить обработку ошибки (например, показать уведомление)
    console.error("Ошибка при загрузке AuthModal:", error);
    return;
  }
  try {
    const { openModal } = await import("@mantine/modals");
    openModalFn = openModal;
  } catch (error) {
    console.error("Ошибка при загрузке openModal:", error);
    return;
  }
  openModalFn({
    centered: true,
    children: <AuthModalComponent />,
    modalId: "auth-modal",
    withCloseButton: true,
  });
};

const handleOpenRegister = async () => {
  let RegisterModalComponent;
  let openModalFn;
  try {
    const { RegisterModal } = await import(
      "@/components/registerModal/RegisterModal"
    );
    RegisterModalComponent = RegisterModal;
  } catch (error) {
    // Можно добавить обработку ошибки (например, показать уведомление)
    console.error("Ошибка при загрузке RegisterModal:", error);
    return;
  }
  try {
    const { openModal } = await import("@mantine/modals");
    openModalFn = openModal;
  } catch (error) {
    console.error("Ошибка при загрузке openModal:", error);
    return;
  }
  openModalFn({
    centered: true,
    children: <RegisterModalComponent />,
    modalId: "register-modal",
    withCloseButton: true,
  });
};

export const MainPage = () => {
  const { user } = useUserStore();
  return (
    <Box p={40}>
      <Group justify="center">
        <Button color="dark" onClick={handleOpenAuth}>
          Авторизация
        </Button>
        <Button color="gray" onClick={handleOpenRegister}>
          Регистрация
        </Button>
      </Group>

      {user && (
        <Box>
          <Text>{user.email}</Text>
        </Box>
      )}
    </Box>
  );
};
