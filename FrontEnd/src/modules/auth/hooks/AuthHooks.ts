import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/AuthServices";
import { useAccessRefreshTokenStore } from "../../../common/stores/accessRefreshTokenStore";

export const useLogin = () => {
  const { saveToken } = useAccessRefreshTokenStore();
  return useMutation({
    mutationFn: loginService,
    onSuccess(data, variables, context) {
      saveToken(data);
    },
  });
};
