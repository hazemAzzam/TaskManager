import { create } from "zustand";
import type { TokenRefreshType } from "../../modules/auth/types";
import { persist } from "zustand/middleware";

type AccessRefreshTokenStore = {
  access: string;
  refresh: string;

  saveToken: (tokens: TokenRefreshType) => void;
};

export const useAccessRefreshTokenStore = create<AccessRefreshTokenStore>()(
  persist(
    (set) => ({
      access: "",
      refresh: "",
      saveToken: (tokens) =>
        set({
          access: tokens.access,
          refresh: tokens.refresh,
        }),
    }),
    {
      name: "access-refresh-token-storage",
    }
  )
);
