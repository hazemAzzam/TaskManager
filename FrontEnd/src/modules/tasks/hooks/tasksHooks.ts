import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetTasks, PostTask } from "../services/tasksServices";
import type { TaskType } from "../types/TaskType";

export const useGetTasks = () => {
  return useQuery<TaskType[]>({
    queryKey: ["tasks"],
    queryFn: GetTasks,
  });
};

export const usePostTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
