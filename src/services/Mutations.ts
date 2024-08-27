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
      login(variables.email, data.UserType);
      localStorage.setItem("refresh_token", JSON.stringify({ Token: data.RefreshToken, Email: variables.email, UserType: data.UserType }));
      console.log(JSON.parse(localStorage.getItem("refresh_token")!));
    },
    onError: (error) => console.log(error)
  });
}

const useLogoutMutation = () => {
  const { logout } = useUserStore();

  return useMutation({
    mutationFn: (email: object) => Api.logout(email),

    onSuccess: () => {
      logout();
      localStorage.removeItem("refresh_token");
    }
  });
}

const useRefreshToken = () => {

  return useMutation({
    mutationFn: (refreshToken: object) => Api.refreshToken(refreshToken),

    onSuccess: (data) => {
      const latestStatus = JSON.parse(localStorage.getItem('refresh_token')!);
      const updatedStatus = { ...latestStatus, UserType: data.UserType }
      localStorage.setItem("refresh_token", JSON.stringify(updatedStatus));
    },

    onError: () => {
      localStorage.removeItem("refresh_token");
    }
  });
}

const useLessorEmail = () => {
  const { setUserInfo } = useUserStore();

  return useMutation({
    mutationFn: (email: string) => Api.individualLessor(email),

    onSuccess: (data) => {
      console.log(data);
      setUserInfo(data);
    }
  });
}

const useLesseeEmail = () => {
  const { setUserInfo } = useUserStore();

  return useMutation({
    mutationFn: (email: string) => Api.individualLessee(email),

    onSuccess: (data) => {
      setUserInfo(data);
    }
  });
}

export const Mutations = {
  useLoginMutation,
  useLogoutMutation,
  useRefreshToken,
  useLessorEmail,
  useLesseeEmail
}