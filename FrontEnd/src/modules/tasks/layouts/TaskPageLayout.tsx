import { useOpenModalStore } from "../stores/openModalStore";
import TaskForm from "../forms/TaskForm";
import { Outlet } from "react-router-dom";

export default function TaskPageLayout() {
  const { showTaskModal, mode, task } = useOpenModalStore();
  return (
    <div className="relative">
      {showTaskModal && <TaskForm />}
      <Outlet />
    </div>
  );
}
