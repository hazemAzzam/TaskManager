import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/AuthServices";
import { useAuthStore } from "../stores/useAuthStore";

export const useLogin = () => {
  const { saveToken } = useAuthStore();
  return useMutation({
    mutationFn: loginService,
    onSuccess(data, variables, context) {
      saveToken(data);
    },
  });
};
