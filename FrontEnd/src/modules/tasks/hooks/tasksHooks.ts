import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeleteTask, GetTasks, PostTask, UpdateTask } from "../services/tasksServices";
import type { TaskType } from "../types/TaskType";
import type { TaskData } from "../schemas/TaskFormSchema";

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

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, task }: { id: string; task: TaskData }) => UpdateTask(id, task),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
