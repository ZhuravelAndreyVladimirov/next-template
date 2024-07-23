"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

export const ThemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme({
    getInitialValueInEffect: true,
  });
  return (
    <ActionIcon
      aria-label="Toggle color scheme"
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      size="xl"
      variant="default"
    >
      TOGG
    </ActionIcon>
  );
};
