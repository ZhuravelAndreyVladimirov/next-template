'use client';
import { Box, Button, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FC } from 'react';

import { useUserStore } from '@/store/user';

interface AuthFormValues {
  email: string;
  password: string;
}

export const AuthModal: FC = () => {
  const form = useForm<AuthFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (value.length >= 3 ? null : 'Логин слишком короткий'),
      password: (value) => (value.length >= 6 ? null : 'Минимум 6 символов'),
    },
  });

  const { setUser } = useUserStore();

  const handleSubmit = async (values: AuthFormValues) => {
    try {
      let AuthModule;
      try {
        AuthModule = await import('@/api/Auth/Auth');
      } catch (importError) {
        console.warn(importError);
        return;
      }

      try {
        const res = await AuthModule.Auth.login(values);
        setUser(res.user);
      } catch (loginError) {
        console.warn(loginError);
        return;
      }
    } catch (loginError) {
      console.warn(loginError);
      return;
    } finally {
      try {
        const { closeModal } = await import('@mantine/modals');
        closeModal('auth-modal');
      } catch (closeModalError) {
        console.warn(closeModalError);
      }
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
        <PasswordInput
          label="Пароль"
          placeholder="Введите пароль"
          {...form.getInputProps('password')}
          required
        />
        <Button color="dark" fullWidth type="submit">
          Войти
        </Button>
      </Stack>
    </Box>
  );
};
