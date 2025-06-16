import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  setUser: (u: User | null) => void;

  openLogout: boolean;
  setOpenLogout: (value: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  openLogout: false,
  setOpenLogout: (value) => set({ openLogout: value }),

  user: null,
  setUser: (user) => set({ user }),
}));
