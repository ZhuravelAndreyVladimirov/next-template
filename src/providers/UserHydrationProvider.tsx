'use client';

import { useLayoutEffect } from 'react';

import { User, useUserStore } from '@/store/user';

export interface UserHydrationProviderProps {
  SSRUser?: User | null;
}
export const UserHydrationProvider = ({ SSRUser }: UserHydrationProviderProps) => {
  const { setUser } = useUserStore();

  useLayoutEffect(() => {
    if (SSRUser) {
      setUser(SSRUser);
    }
  }, []);

  return <></>;
};
