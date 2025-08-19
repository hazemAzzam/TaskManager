import apiClient from "../../../common/clients/apiClient";
import { ENDPOINTS } from "../../../common/constants/endpoints";
import type { LoginCredentials, TokenRefreshType } from "../types";

export const loginService = async (cred: LoginCredentials): Promise<TokenRefreshType> => {
  const { data } = await apiClient.post(ENDPOINTS.AUTH.TOKEN, cred);

  return data;
};
