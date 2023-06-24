export interface IRegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export type RegisterUserResponse = {
  token: string;
};

export type LoginUserResponse = {
  token: string;
};

export interface IUpdatePassword {
  password: string;
}

export interface UpdatePasswordResponse {}
