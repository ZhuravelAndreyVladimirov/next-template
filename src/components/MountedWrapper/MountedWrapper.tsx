"use client";

import React, { useEffect, useState } from "react";

export interface MountedWrapperProps {
  children: React.ReactNode;
}

export const MountedWrapper = ({ children }: MountedWrapperProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return children;
};
