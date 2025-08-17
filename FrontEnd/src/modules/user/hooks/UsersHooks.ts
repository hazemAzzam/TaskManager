import { QueryClient, useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getAllUsers } from "../services/UserServices";

export const useGetUsers = <T>(): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
};
