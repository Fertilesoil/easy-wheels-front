import { useMutation } from "@tanstack/react-query";
import { UserLoginDto, UserLoginSuccessDto } from "@/types/Types";
import { Api, connection } from "./Api";
import { useUserStore } from '@/stores/UserStore';

const useLoginMutation = () => {
  const { login } = useUserStore();

  return useMutation({
    mutationFn: (data: UserLoginDto) => Api.login(data),

    onSuccess: (data: UserLoginSuccessDto, variables) => {
      connection.defaults.headers.common.Authorization = data.AccessToken;
      console.log("Token de acesso: ", data.AccessToken);
      login(variables.email);
      localStorage.setItem("refresh_token", JSON.stringify({ Token: data.RefreshToken, Email: variables.email }));
    },
    onError: (error) => console.log(error)
  });
}

const useLogoutMutation = () => {
  const { logout } = useUserStore();

  return useMutation({
    mutationFn: (email: object) => Api.logout(email),

    onSuccess: (data) => {
      logout();
      console.log(data);
    }
  });
}

const useRefreshToken = () => {
  
  return useMutation({
    mutationFn: (refreshToken: object) => Api.refreshToken(refreshToken)
  });
}

export const Mutations = {
  useLoginMutation,
  useLogoutMutation,
  useRefreshToken
}