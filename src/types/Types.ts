
export type EmailDto = {
  email: string;
}

export type UserLoginDto = {
  email: string;
  password: string;
}

export type SuccessDto = {
  AccessToken: string;
}