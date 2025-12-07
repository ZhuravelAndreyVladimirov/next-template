import { API } from "@/api/API/API";
import { create } from "zustand";

export interface User {
  created_at: string;
  email: string;
  id: number;
  login: string;
  updated_at: string;
}

interface UserState {
  error: string | null;
  isLoading: boolean;
  loadUser: () => Promise<void>;
  refreshUser: () => Promise<void>;
  resetUser: () => void;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User) => void;
  user: User | null;
}

export const useUserStore = create<UserState>((set) => ({
  error: null,
  isLoading: false,
  loadUser: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await API.get<User>("/users/me");
      set({ user: data });
    } catch (error) {
      set({ error: (error as Error).message, user: null });
    } finally {
      set({ isLoading: false });
    }
  },
  refreshUser: async () => {
    set({ isLoading: true, error: null });
    try {
      await API.post("/auth/refresh");
      const { data } = await API.get<User>("/users/me");
      set({ user: data });
    } catch (error) {
      set({ error: (error as Error).message, user: null });
    } finally {
      set({ isLoading: false });
    }
  },
  resetUser: () => set({ user: null }),
  setUser: (user) => set({ user }),
  user: null,
}));
