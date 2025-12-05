"use client";
import { ThemeToggle } from "@/components";
import { Anchor, Flex, Group, SegmentedControl } from "@mantine/core";
import { useLocale } from "next-intl";
import React from "react";
import { type Locale } from "@/i18n";
import { Link, usePathname, useRouter } from "@/navigation";

import style from "./Header.module.scss";

export const Header = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (value: string) => {
    const newLocale = value as Locale;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Flex className={style.root} justify={"space-between"} align="center">
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

      <Group gap="md">
        {/* Навигация */}
        <Group gap="xs">
          <Link href="/static-test" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Anchor component="span" size="sm" style={{ cursor: 'pointer' }}>
              Static Test
            </Anchor>
          </Link>
          <Link href="/dynamic-test" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Anchor component="span" size="sm" style={{ cursor: 'pointer' }}>
              Dynamic Test
            </Anchor>
          </Link>
        </Group>

        {/* Переключатель локали */}
        <SegmentedControl
          value={locale}
          onChange={handleLocaleChange}
          data={[
            { label: 'RU', value: 'ru' },
            { label: 'EN', value: 'en' },
          ]}
          size="sm"
        />

        <ThemeToggle />
      </Group>
    </Flex>
  );
};
