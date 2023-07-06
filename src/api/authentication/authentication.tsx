import axios from "axios";
import {
  REGISTER_USER_URL,
  LOGIN_USER_URL,
  UPDATE_PASSWORD_URL,
  LOGIN_ADMIN_URL,
} from "../../utils/paths/paths";
import {
  IRegisterUser,
  RegisterUserResponse,
  ILoginUser,
  LoginUserResponse,
  IUpdatePassword,
  UpdatePasswordResponse,
  ILoginAdmin,
  LoginAdminResponse,
} from "./types";

export const registerUser = async (
  formData: IRegisterUser
): Promise<RegisterUserResponse> => {
  const { data } = await axios.post(REGISTER_USER_URL, formData);
  return data;
};

export const loginUser = async (
  formData: ILoginUser
): Promise<LoginUserResponse> => {
  const { data } = await axios.post(LOGIN_USER_URL, formData);
  return data;
};

export const loginAdmin = async (
  formData: ILoginAdmin
): Promise<LoginAdminResponse> => {
  const { data } = await axios.post(LOGIN_ADMIN_URL, formData);
  return data;
};

export const updatePassword = async (
  formData: IUpdatePassword,
  token: string
): Promise<UpdatePasswordResponse> => {
  const { data } = await axios.patch(
    `${UPDATE_PASSWORD_URL}/${token}`,
    formData
  );
  return data;
};
