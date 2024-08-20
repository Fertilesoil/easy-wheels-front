import React from 'react'
import { Mutations } from '@/services/Mutations';
import { useUserStore } from '@/stores/UserStore';
import { useNavigate } from 'react-router-dom';
import { FormField, FormLogin, FormButton, FormWrapper } from '@/components/Form';
import { UserLoginDto } from '@/types/Types';

const Login = () => {

  const navigate = useNavigate();
  const { mutate, isSuccess, data } = Mutations.useRefreshToken();
  const loginMutation = Mutations.useLoginMutation();
  const { login } = useUserStore();

  const [userLogin, setUserLogin] = React.useState<UserLoginDto>({} as UserLoginDto);

  const saveValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserLogin((state) => ({
      ...state,
      [name]: value
    }));
    console.log(userLogin);
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(userLogin);
  }

  React.useEffect(() => {
    if (loginMutation.status === "success")
      navigate('/');
  }, [loginMutation.status]);

  React.useEffect(() => {
    const refreshToken = JSON.parse(localStorage.getItem('refresh_token')!);

    if (refreshToken !== undefined) {
      mutate({ Token: refreshToken.Token.split(" ")[1], Email: refreshToken.Email });

      if (isSuccess) {
        login(data.Email);
        navigate('/');
      }
    }
  }, [isSuccess]);

  return (
    <FormWrapper>
      <FormLogin name='Login' onSubmit={handleLogin}>
        <FormField fieldName='Email' type='text' name='email' value={userLogin.email} fn={saveValues} />
        <FormField fieldName='Senha' type='password' name='password' value={userLogin.password} fn={saveValues} />

        <FormButton type='submit'>
          {loginMutation.isPending ? "Carregando" : "Login"}
        </FormButton>
      </FormLogin>
    </FormWrapper>
  )
}

export default Login