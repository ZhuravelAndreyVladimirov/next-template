import { ReactNode } from "react";

import { CustomMantineProvider } from "./CustomMantineProvider";

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider = ({ children }: RootProviderProps) => (
  <CustomMantineProvider>{children}</CustomMantineProvider>
);
