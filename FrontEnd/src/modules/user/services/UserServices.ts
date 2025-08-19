import apiClient from "../../../common/clients/apiClient";
import { ENDPOINTS } from "../../../common/constants/endpoints";

export const getAllUsers = async <T>(): Promise<T> => {
  const { data } = await apiClient.get(`${ENDPOINTS.USERS.ROOT}`);

  return data;
};

export const updateUser = async <T>(id: string, user: T): Promise<T> => {
  const { data } = await apiClient.put(`${ENDPOINTS.USERS}/${id}/`, user);

  return data;
};

export const uploadUserProfilePicture = async <T>(
  formData: FormData
): Promise<T> => {
  const { data } = await apiClient.post(
    `${ENDPOINTS.USERS.UPLOAD_PROFILE_PICTURE}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};

// export const getUserAnalysis = async <T>(id: string): Promise<T> => {
//   // const {data} = await apiClient.get(`${ENDPOINTS.TASKS.}`)
//   return Promise.resolve();
// };
