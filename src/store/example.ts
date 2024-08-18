import { create } from "zustand";

interface BearState {
  bears: number;
  // eslint-disable-next-line no-unused-vars
  increase: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
