'use client';

import { useMounted } from '@mantine/hooks';
import React from 'react';

export interface MountedWrapperProps {
  children: React.ReactNode;
}

export const MountedWrapper = ({ children }: MountedWrapperProps) => {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }
  return children;
};
