import TaskPageLayout from "../layouts/TaskPageLayout";
import TasksPage from "../pages/TasksPage";
import { GetTasks } from "../services/tasksServices";
import queryClient from "../../../common/clients/reactQueryClient";
import type { RouteObject } from "react-router-dom";

export const TASKS_QUERY_KEY = "tasks";

const taskRoutes: RouteObject = {
  path: "/tasks",
  element: <TaskPageLayout />,
  children: [
    {
      index: true,
      element: <TasksPage />,
      loader: () =>
        queryClient.fetchQuery({
          queryKey: [TASKS_QUERY_KEY],
          queryFn: GetTasks,
        }),
    },
  ],
};

export default taskRoutes;
