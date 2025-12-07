"use client";

import { Locale, locales } from "@/i18n";
import { usePathname, useRouter } from "@/navigation";
import { Container, Group, SegmentedControl, Text } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import { useLocale } from "next-intl";

import { ThemeToggle } from "../ThemeToggle";

export const ClientHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (value: string) => {
    router.replace(pathname, { locale: value as Locale });
  };

  return (
    <Container size="lg" px="md" py="sm">
      <Group justify="space-between" align="center" wrap="nowrap">
        <Group gap="xs" wrap="nowrap">
          <IconLanguage size={20} stroke={1.6} />
          <Text fw={700}>Next Template</Text>
        </Group>
        <Group gap="sm" wrap="nowrap">
          <SegmentedControl
            size="xs"
            value={locale}
            onChange={handleLocaleChange}
            data={locales.map((value) => ({
              label: value.toUpperCase(),
              value,
            }))}
            aria-label="Switch language"
          />
          <ThemeToggle />
        </Group>
      </Group>
    </Container>
  );
};
