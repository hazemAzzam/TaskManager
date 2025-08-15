import React from "react";
import { Outlet } from "react-router-dom";
import { useUserModelStore } from "../stores/userModelStore";
import UserForm from "../forms/UserForm";

export default function UserPageLayout() {
  const { showUserModal } = useUserModelStore();
  return (
    <div className="relative">
      {showUserModal && <UserForm />}
      <Outlet />
    </div>
  );
}
