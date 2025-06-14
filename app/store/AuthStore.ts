import { create } from "zustand";

interface AuthStore {
  openLogout: boolean;
  setOpenLogout: (value: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  openLogout: false,
  setOpenLogout: (value) => set({ openLogout: value }),
}));
