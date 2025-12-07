'use client';

import { ClientFooter, ClientHeader } from '@/components';
import { RootProvider } from '@/providers/RootProvider';
import { AppShell } from '@mantine/core';
import { ReactNode } from 'react';

interface ClientAppShellProps {
  children: ReactNode;
}

export const ClientAppShell = ({ children }: ClientAppShellProps) => {
  return (
    <RootProvider>
      <AppShell padding="md" header={{ height: 80 }} footer={{ height: 64 }}>
        <AppShell.Header withBorder>
          <ClientHeader />
        </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
        <AppShell.Footer withBorder>
          <ClientFooter />
        </AppShell.Footer>
      </AppShell>
    </RootProvider>
  );
};
