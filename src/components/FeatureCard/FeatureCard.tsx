"use client";

import { Card, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import {
  IconBrandSpeedtest,
  IconChartBar,
  IconLock,
  IconPlug,
  IconShield,
  IconUsers,
  IconCloud,
  IconCode,
  IconDatabase,
  IconDeviceDesktop,
  IconRocket,
  IconWorld,
  IconCheck,
  IconStar,
  IconTrendingUp,
  IconSettings,
  IconBell,
  IconHeart,
  IconThumbUp,
} from "@tabler/icons-react";

type IconName =
  | "IconBrandSpeedtest"
  | "IconChartBar"
  | "IconLock"
  | "IconPlug"
  | "IconShield"
  | "IconUsers"
  | "IconCloud"
  | "IconCode"
  | "IconDatabase"
  | "IconDeviceDesktop"
  | "IconRocket"
  | "IconWorld"
  | "IconCheck"
  | "IconStar"
  | "IconTrendingUp"
  | "IconSettings"
  | "IconBell"
  | "IconHeart"
  | "IconThumbUp";

const iconMap: Record<
  IconName,
  React.ComponentType<React.ComponentProps<typeof IconBrandSpeedtest>>
> = {
  IconBrandSpeedtest,
  IconChartBar,
  IconLock,
  IconPlug,
  IconShield,
  IconUsers,
  IconCloud,
  IconCode,
  IconDatabase,
  IconDeviceDesktop,
  IconRocket,
  IconWorld,
  IconCheck,
  IconStar,
  IconTrendingUp,
  IconSettings,
  IconBell,
  IconHeart,
  IconThumbUp,
};

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const Icon = iconMap[icon];

  return (
    <Card shadow="sm" padding="lg" radius="md" h="100%">
      <Stack gap="md">
        <ThemeIcon size={60} radius="md" variant="light" color="blue">
          <Icon size={30} />
        </ThemeIcon>
        <Title order={3} size="h4">
          {title}
        </Title>
        <Text size="sm" c="dimmed">
          {description}
        </Text>
      </Stack>
    </Card>
  );
};
