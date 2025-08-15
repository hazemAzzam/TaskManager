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

export const UpdateTask = async (id: string, task: TaskData) => {
  const { data } = await apiClient.put(`${ENDPOINTS.TASKS}/${id}/`, task);

  return data;
};

export const DeleteTask = async (id: string) => {
  const response = await apiClient.delete(`${ENDPOINTS.TASKS}/${id}/`);

  if (response.status === 204) return true;
  throw new Error("Failed to delete the task");
};
