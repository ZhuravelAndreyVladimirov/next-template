"use client";
import { Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC } from "react";

interface AuthFormValues {
  login: string;
  password: string;
}

export const AuthModal: FC = () => {
  const form = useForm<AuthFormValues>({
    initialValues: {
      login: "",
      password: "",
    },
    validate: {
      login: (value) => (value.length >= 3 ? null : "Логин слишком короткий"),
      password: (value) => (value.length >= 6 ? null : "Минимум 6 символов"),
    },
  });

  return (
    <Box component="form" onSubmit={form.onSubmit(() => {})}>
      <Stack>
        <TextInput
          label="Логин"
          placeholder="Введите логин"
          {...form.getInputProps("login")}
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
