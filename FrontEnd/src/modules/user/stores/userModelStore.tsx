import { create } from "zustand";
import type { UserType } from "../types/UserType";

type UserModalType = {
  showUserModal: boolean;
  user: UserType | null;

  openUserModal: (user: UserType) => void;
  closeUserModal: () => void;
};

export const useUserModelStore = create<UserModalType>((set) => ({
  showUserModal: false,
  user: null,
  openUserModal: (user) => {
    set({
      showUserModal: true,
      user: user,
    });
  },
  closeUserModal: () => {
    set({
      showUserModal: false,
      user: null,
    });
  },
}));
