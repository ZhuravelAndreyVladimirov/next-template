'use client';

import { Button, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import { captureException } from '@sentry/nextjs';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorPageProps) {
  const t = useTranslations('common.errorFallback');
  const params = useParams<{ locale?: string }>();

  useEffect(() => {
    captureException(error);
    console.error(error);
  }, [error]);

  const homeHref = params?.locale ? `/${params.locale}` : '/';

  return (
    <Container size="sm" py="xl">
      <Paper shadow="md" p="lg" radius="md" withBorder>
        <Stack gap="md">
          <Group gap="sm">
            <IconAlertTriangle aria-hidden color="var(--mantine-color-red-6)" size={28} />
            <Title order={2}>{t('title')}</Title>
          </Group>
          <Text c="dimmed">{t('description')}</Text>
          {error?.digest ? (
            <Text size="sm" c="dimmed">
              {t('requestId')}: {error.digest}
            </Text>
          ) : null}
          <Group>
            <Button onClick={reset}>{t('retry')}</Button>
            <Button component={Link} href={homeHref} variant="light">
              {t('home')}
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
