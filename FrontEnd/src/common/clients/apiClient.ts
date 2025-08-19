import axios from "axios";
import { useAccessRefreshTokenStore } from "../stores/accessRefreshTokenStore";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = useAccessRefreshTokenStore.getState().access;

    if (accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
