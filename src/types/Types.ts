
export type EmailDto = {
  email: string;
}

export type TokenDto = {
  Token: string;
  Email: string;
  UserType: string;
}

export type UserLoginDto = {
  email: string;
  password: string;
}

export type UserLoginSuccessDto = {
  AccessToken: string;
  RefreshToken: string;
  UserType: string;
}