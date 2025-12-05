'use client';

import { Header } from "@/components";
import { RootProvider } from "@/providers/RootProvider";
import { AppShell } from "@mantine/core";
import { ReactNode } from "react";

interface ClientAppShellProps {
  children: ReactNode;
}

export default function ClientAppShell({ children }: ClientAppShellProps) {
  return (
    <RootProvider>
      <AppShell>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
        <AppShell.Footer>{/* Footer content */}</AppShell.Footer>
      </AppShell>
    </RootProvider>
  );
}
