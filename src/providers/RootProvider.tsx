'use client';

import { ModalsProvider } from '@mantine/modals';
import { ReactNode } from 'react';

import { CustomMantineProvider } from './CustomMantineProvider';

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider = ({ children }: RootProviderProps) => (
  <CustomMantineProvider>
    <ModalsProvider>{children}</ModalsProvider>
  </CustomMantineProvider>
);
