"use client";

import { RootProvider } from "@/providers/RootProvider";
import { AppShell } from "@mantine/core";
import { ReactNode } from "react";

interface ClientAppShellProps {
  children: ReactNode;
}

export const ClientAppShell = ({ children }: ClientAppShellProps) => {
  return (
    <RootProvider>
      <AppShell>
        <AppShell.Header>{/* {Header content} */}</AppShell.Header>
        <AppShell.Main>{children}</AppShell.Main>
        <AppShell.Footer>{/* Footer content */}</AppShell.Footer>
      </AppShell>
    </RootProvider>
  );
};
