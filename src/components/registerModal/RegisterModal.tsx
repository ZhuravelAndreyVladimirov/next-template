"use client";
import { Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC } from "react";

interface RegisterFormValues {
  confirmPassword: string;
  email: string;
  login: string;
  password: string;
}

export const RegisterModal: FC = () => {
  const form = useForm<RegisterFormValues>({
    initialValues: {
      confirmPassword: "",
      email: "",
      login: "",
      password: "",
    },
    validate: {
      confirmPassword: (value, values) =>
        value === values.password ? null : "Пароли не совпадают",
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Некорректный email",
      // login не обязательный, убираем валидацию
      password: (value) => (value.length >= 6 ? null : "Минимум 6 символов"),
    },
  });

  return (
    <Box component="form" onSubmit={form.onSubmit(() => {})}>
      <Stack>
        <TextInput
          label="Email"
          placeholder="Введите email"
          {...form.getInputProps("email")}
          required
        />
        <TextInput
          label="Логин"
          placeholder="Введите логин"
          {...form.getInputProps("login")}
          // required убран
        />
        <PasswordInput
          label="Пароль"
          placeholder="Введите пароль"
          {...form.getInputProps("password")}
          required
        />
        <PasswordInput
          label="Подтверждение пароля"
          placeholder="Повторите пароль"
          {...form.getInputProps("confirmPassword")}
          required
        />
        <Button color="dark" fullWidth type="submit">
          Зарегистрироваться
        </Button>
      </Stack>
    </Box>
  );
};
