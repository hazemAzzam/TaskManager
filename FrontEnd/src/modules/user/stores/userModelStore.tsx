import { create } from "zustand";
import type { UserType } from "../types/UserType";

type UserModalType = {
  showUserModal: boolean;
  showProfileModal: boolean;
  user: UserType | null;

  openUserModal: (user: UserType) => void;
  closeUserModal: () => void;
  openProfileModal: (user: UserType) => void;
};

export const useUserModelStore = create<UserModalType>((set) => ({
  showUserModal: false,
  showProfileModal: false,
  user: null,
  openProfileModal: (user) => {
    set({
      showProfileModal: true,
      showUserModal: false,
      user: user,
    });
  },
  openUserModal: (user) => {
    set({
      showUserModal: true,
      showProfileModal: false,
      user: user,
    });
  },
  closeUserModal: () => {
    set({
      showUserModal: false,
      showProfileModal: false,
      user: null,
    });
  },
}));
