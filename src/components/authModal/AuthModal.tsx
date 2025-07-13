"use client";
import { Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC } from "react";

interface AuthFormValues {
  email: string;
  password: string;
}

export const AuthModal: FC = () => {
  const form = useForm<AuthFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (value.length >= 3 ? null : "Логин слишком короткий"),
      password: (value) => (value.length >= 6 ? null : "Минимум 6 символов"),
    },
  });

  const handleSubmit = async (values: AuthFormValues) => {
    let AuthModule;
    try {
      AuthModule = await import("@/api/Auth/Auth");
    } catch (importError) {
      // обработка ошибки импорта
      return;
    }

    try {
      await AuthModule.Auth.login(values);
    } catch (loginError) {
      // обработка ошибки логина
      return;
    }
    try {
      const { closeModal } = await import("@mantine/modals");
      closeModal("auth-modal");
    } catch (closeModalError) {
      // обработка ошибки закрытия модального окна
    }
  };
  return (
    <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Email"
          placeholder="Введите email"
          {...form.getInputProps("email")}
          required
        />
        <PasswordInput
          label="Пароль"
          placeholder="Введите пароль"
          {...form.getInputProps("password")}
          required
        />
        <Button color="dark" fullWidth type="submit">
          Войти
        </Button>
      </Stack>
    </Box>
  );
};
