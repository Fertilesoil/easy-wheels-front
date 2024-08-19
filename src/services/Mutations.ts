import { useMutation } from "@tanstack/react-query";
import { SuccessDto, UserLoginDto } from "../types/Types";
import { Api, connection } from "./Api";
import { useUserStore } from '../stores/UserStore';

const useLoginMutation = () => {
  const { setEmail } = useUserStore();
  
  return useMutation({
    mutationFn: (data: UserLoginDto) => Api.login(data),

    onSuccess: (data: SuccessDto, variables) => {
      connection.defaults.headers.common['Authorization'] = data.AccessToken;
      console.log(data.AccessToken);
      setEmail(variables.email);
    },
    onError: (error) => console.log(error)
  });
}

const useLogoutMutation = () => {

  return useMutation({
    mutationFn: (email: object) => Api.logout(email),

    onSuccess: (data) => {
      console.log(data);
    }
  });
}

export const Mutations = {
  useLoginMutation,
  useLogoutMutation
}