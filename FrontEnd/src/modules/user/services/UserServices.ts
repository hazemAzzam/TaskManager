import apiClient from "../../../common/clients/apiClient";
import { ENDPOINTS } from "../../../common/constants/endpoints";

export const getAllUsers = async <T>(): Promise<T> => {
  const { data } = await apiClient.get(`${ENDPOINTS.USERS}`);

  return data;
};
