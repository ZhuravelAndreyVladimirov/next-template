'use client';
import { Box, Button, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';

import { useUserStore } from '@/store/user';

interface RegisterFormValues {
  confirmPassword: string;
  email: string;
  login: string;
  password: string;
}

export const RegisterModal: FC = () => {
  const form = useForm<RegisterFormValues>({
    initialValues: {
      confirmPassword: '',
      email: '',
      login: '',
      password: '',
    },
    validate: {
      confirmPassword: (value, values) =>
        value === values.password ? null : 'Пароли не совпадают',
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Некорректный email'),
      // login не обязательный, убираем валидацию
      password: (value) => (value.length >= 6 ? null : 'Минимум 6 символов'),
    },
  });

  const { setUser } = useUserStore();

  const handleSubmit = async (values: RegisterFormValues) => {
    let AuthModule;
    try {
      AuthModule = await import('@/api/Auth/Auth');
    } catch (importError) {
      console.warn(importError);
      return;
    }

    try {
      const res = await AuthModule.Auth.register(values);

      setUser(res.user);
    } catch (loginError) {
      console.warn(loginError);
      return;
    }
    try {
      const { closeModal } = await import('@mantine/modals');
      closeModal('auth-modal');
    } catch (closeModalError) {
      console.warn(closeModalError);
    }
  };

  return (
    <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Email"
          placeholder="Введите email"
          {...form.getInputProps('email')}
          required
        />
        <TextInput
          label="Логин"
          placeholder="Введите логин"
          {...form.getInputProps('login')}
          // required убран
        />
        <PasswordInput
          label="Пароль"
          placeholder="Введите пароль"
          {...form.getInputProps('password')}
          required
        />
        <PasswordInput
          label="Подтверждение пароля"
          placeholder="Повторите пароль"
          {...form.getInputProps('confirmPassword')}
          required
        />
        <Button color="dark" fullWidth type="submit">
          Зарегистрироваться
        </Button>
      </Stack>
    </Box>
  );
};
