import apiClient from "../../../common/clients/apiClient";
import { ENDPOINTS } from "../../../common/constants/endpoints";
import type { TaskData } from "../schemas/TaskFormSchema";
import type { TaskType } from "../types/TaskType";

export const GetTasks = async (): Promise<TaskType[]> => {
  const { data } = await apiClient.get<TaskType[]>(ENDPOINTS.TASKS);

  return data;
};

export const PostTask = async (task: TaskData) => {
  const { data } = await apiClient.post(`${ENDPOINTS.TASKS}/`, task);

  return data;
};
