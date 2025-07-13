import { create } from "zustand";

export interface User {
  created_at: string;
  email: string;
  id: number;
  login: string;
  updated_at: string;
}

interface UserState {
  resetUser: () => void;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User) => void;
  user: User | null;
}

export const useUserStore = create<UserState>((set) => ({
  resetUser: () => set({ user: null }),
  setUser: (user) => set({ user }),
  user: null,
}));
