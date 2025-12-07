import {
  Badge,
  Card,
  Code,
  Container,
  Divider,
  Group,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconAdjustments,
  IconAlertTriangle,
  IconBook2,
  IconBrandDocker,
  IconBrandNextjs,
  IconBug,
  IconChecks,
  IconHeartbeat,
  IconPalette,
  IconScript,
  IconServer,
  IconShieldCheck,
  IconSitemap,
  IconTerminal2,
  IconWorld,
} from "@tabler/icons-react";
import type { IconProps } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { ComponentType } from "react";

type IconComponent = ComponentType<IconProps>;

const iconProps: IconProps = { size: 20, stroke: 1.6 };

interface FeatureItem {
  icon: IconComponent;
  title: string;
  description: string;
}

const renderFeatureGrid = (title: string, items: FeatureItem[]) => (
  <Stack gap="md">
    <Title order={2} size="h3">
      {title}
    </Title>
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
      {items.map((item) => (
        <Card key={item.title} withBorder radius="md" p="md">
          <Group align="flex-start" gap="sm">
            <ThemeIcon variant="light" size={34} radius="md">
              <item.icon {...iconProps} />
            </ThemeIcon>
            <Stack gap={4}>
              <Text fw={600}>{item.title}</Text>
              <Text size="sm" c="dimmed">
                {item.description}
              </Text>
            </Stack>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  </Stack>
);

export const PreviewScreen = async () => {
  const t = await getTranslations("preview");

  const stackItems: FeatureItem[] = [
    {
      description: t("stack.items.core.description"),
      icon: IconBrandNextjs,
      title: t("stack.items.core.title"),
    },
    {
      description: t("stack.items.ui.description"),
      icon: IconPalette,
      title: t("stack.items.ui.title"),
    },
    {
      description: t("stack.items.state.description"),
      icon: IconAdjustments,
      title: t("stack.items.state.title"),
    },
    {
      description: t("stack.items.sentry.description"),
      icon: IconShieldCheck,
      title: t("stack.items.sentry.title"),
    },
    {
      description: t("stack.items.storybook.description"),
      icon: IconBook2,
      title: t("stack.items.storybook.title"),
    },
  ];

  const qualityItems: FeatureItem[] = [
    {
      description: t("quality.items.lint.description"),
      icon: IconChecks,
      title: t("quality.items.lint.title"),
    },
    {
      description: t("quality.items.tests.description"),
      icon: IconBug,
      title: t("quality.items.tests.title"),
    },
    {
      description: t("quality.items.cli.description"),
      icon: IconTerminal2,
      title: t("quality.items.cli.title"),
    },
  ];

  const opsItems: FeatureItem[] = [
    {
      description: t("ops.items.github.description"),
      icon: IconServer,
      title: t("ops.items.github.title"),
    },
    {
      description: t("ops.items.docker.description"),
      icon: IconBrandDocker,
      title: t("ops.items.docker.title"),
    },
    {
      description: t("ops.items.env.description"),
      icon: IconWorld,
      title: t("ops.items.env.title"),
    },
  ];

  const observabilityItems: FeatureItem[] = [
    {
      description: t("observability.items.health.description"),
      icon: IconHeartbeat,
      title: t("observability.items.health.title"),
    },
    {
      description: t("observability.items.seo.description"),
      icon: IconSitemap,
      title: t("observability.items.seo.title"),
    },
    {
      description: t("observability.items.errors.description"),
      icon: IconAlertTriangle,
      title: t("observability.items.errors.title"),
    },
  ];

  const scripts = [
    { command: "yarn dev", description: t("scripts.dev") },
    { command: "yarn build / yarn start", description: t("scripts.build") },
    { command: "yarn lint / yarn lint:fix", description: t("scripts.lint") },
    { command: "yarn format / yarn format:check", description: t("scripts.format") },
    { command: "yarn typecheck", description: t("scripts.typecheck") },
    { command: "yarn test / yarn test:watch / yarn test:coverage", description: t("scripts.test") },
    { command: "yarn storybook / yarn build-storybook", description: t("scripts.storybook") },
    { command: "yarn analyze:chunks", description: t("scripts.analyze") },
  ];

  const quickstartSteps = [
    t("quickstart.steps.corepack"),
    t("quickstart.steps.install"),
    t("quickstart.steps.env"),
    t("quickstart.steps.dev"),
  ];

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Card withBorder radius="md" p="xl">
          <Stack gap="sm">
            <Badge size="lg" variant="light">
              {t("hero.badge")}
            </Badge>
            <Title order={1}>{t("hero.title")}</Title>
            <Text size="lg" c="dimmed">
              {t("hero.subtitle")}
            </Text>
          </Stack>
        </Card>

        <Card withBorder radius="md" p="xl">
          {renderFeatureGrid(t("stack.title"), stackItems)}
        </Card>

        <Card withBorder radius="md" p="xl">
          {renderFeatureGrid(t("quality.title"), qualityItems)}
        </Card>

        <Card withBorder radius="md" p="xl">
          <Stack gap="md">
            <Group justify="space-between" align="flex-end">
              <Stack gap={4}>
                <Title order={2} size="h3">
                  {t("scripts.title")}
                </Title>
                <Text size="sm" c="dimmed">
                  {t("scripts.subtitle")}
                </Text>
              </Stack>
            </Group>
            <List
              spacing="sm"
              icon={
                <ThemeIcon variant="light" size={30} radius="md">
                  <IconScript {...iconProps} />
                </ThemeIcon>
              }
            >
              {scripts.map((item) => (
                <ListItem key={item.command}>
                  <Stack gap={4}>
                    <Code>{item.command}</Code>
                    <Text size="sm" c="dimmed">
                      {item.description}
                    </Text>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Card>

        <Card withBorder radius="md" p="xl">
          {renderFeatureGrid(t("ops.title"), opsItems)}
          <Divider my="lg" />
          {renderFeatureGrid(t("observability.title"), observabilityItems)}
        </Card>

        <Card withBorder radius="md" p="xl">
          <Stack gap="md">
            <Title order={2} size="h3">
              {t("quickstart.title")}
            </Title>
            <List type="ordered" spacing="sm">
              {quickstartSteps.map((step) => (
                <ListItem key={step}>
                  <Text size="sm">{step}</Text>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};
