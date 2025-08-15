import { Route, Routes } from "react-router-dom";
import TasksPage from "../pages/TasksPage";
import TaskPageLayout from "../layouts/TaskPageLayout";

export default function TaskRouters() {
  return (
    <Routes>
      <Route element={<TaskPageLayout />}>
        <Route index={true} element={<TasksPage />} />
      </Route>
    </Routes>
  );
}
