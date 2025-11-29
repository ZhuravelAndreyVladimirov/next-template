"use client";
import { StyleHelper } from "@/helpers";
import { Button, useMantineColorScheme } from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import React from "react";

import styles from "./ThemeToggle.module.scss";

export interface ThemeToggleProps {}

export const ThemeToggle = ({}: ThemeToggleProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const mounted = useMounted();

  const isDark = colorScheme === "dark";

  return (
    <Button
      onClick={toggleColorScheme}
      size="lg"
      radius="lg"
      classNames={{ root: styles.button }}
      leftSection={
        <div className={styles.leftSectionContainer}>
          <span
            className={
              mounted
                ? isDark
                  ? styles.sunDisappear
                  : styles.sunAppear
                : styles.sunAppear
            }
            suppressHydrationWarning
          >
            ☀️
          </span>
          {/* Звездочки для темной темы */}
          {mounted && isDark && (
            <div className={styles.starsContainer}>
              <span className={styles.star1}>⭐</span>
              <span className={styles.star2}>⭐</span>
              <span className={styles.star3}>⭐</span>
            </div>
          )}
        </div>
      }
      rightSection={
        <div className={styles.rightSectionContainer}>
          <span
            className={
              mounted
                ? isDark
                  ? styles.moonAppear
                  : styles.moonDisappear
                : styles.moonDisappear
            }
            suppressHydrationWarning
          >
            🌙
          </span>
          {/* Облачко для светлой темы */}
          {mounted && !isDark && <span className={styles.cloud}>☁️</span>}
        </div>
      }
    >
      <span
        className={StyleHelper.merge(
          styles.buttonContent,
          mounted
            ? isDark
              ? styles.buttonContentRight
              : styles.buttonContentLeft
            : styles.buttonContentLeft,
        )}
        suppressHydrationWarning
      />
    </Button>
  );
};
