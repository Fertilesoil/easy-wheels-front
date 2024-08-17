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


export const Mutations = {
  useLoginMutation
}