"use client";
import { ThemeToggle } from "@/components";
import { Button, Flex, Group } from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import React from "react";

import { User, useUserStore } from "@/store/user";

import style from "./Header.module.scss";

export interface HeaderProps {
  SSRUser?: User | null;
}

const handleOpenAuth = async () => {
  const { openModal } = await import("@mantine/modals");
  const { AuthModal } = await import("@/components/authModal/AuthModal");
  openModal({
    centered: true,
    children: <AuthModal />,
    modalId: "auth-modal",
    withCloseButton: true,
  });
};

const handleOpenRegister = async () => {
  const { openModal } = await import("@mantine/modals");
  const { RegisterModal } = await import(
    "@/components/registerModal/RegisterModal"
  );
  openModal({
    centered: true,
    children: <RegisterModal />,
    modalId: "register-modal",
    withCloseButton: true,
  });
};

export const Header = ({ SSRUser }: HeaderProps) => {
  const { resetUser, user } = useUserStore();

  const mounted = useMounted();

  const handleLogout = async () => {
    try {
      const { Auth } = await import("@/api");
      await Auth.logout();
      resetUser();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Flex className={style.root} justify={"space-between"}>
      <div className={style.logo}>
        {/* Простой SVG-логотип */}
        <svg
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" fill="#22223B" r="16" />
          <path
            d="M10 22L16 10L22 22"
            stroke="#F2E9E4"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <circle cx="16" cy="19" fill="#F2E9E4" r="2" />
        </svg>
        <span className={style.logoText}>MyApp</span>
      </div>
      <div className={style.actions}>
        {(!user && mounted) || (!mounted && !SSRUser) ? (
          <Group gap={8}>
            <Button
              color="dark"
              onClick={handleOpenAuth}
              size="sm"
              variant="outline"
            >
              Войти
            </Button>
            <Button color="dark" onClick={handleOpenRegister} size="sm">
              Зарегистрироваться
            </Button>
          </Group>
        ) : (
          <Button
            color="red"
            onClick={handleLogout}
            size="sm"
            variant="outline"
          >
            Выйти
          </Button>
        )}
      </div>

      <ThemeToggle />
    </Flex>
  );
};
