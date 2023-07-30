import axios from "axios";
import { useMutation } from "react-query";
import { AddProductResponse, RemoveProductResponse } from "./types";
import {
  ADD_PRODUCT_ADMIN_URL,
  REMOVE_PRODUCT_ADMIN_URL,
} from "../../../utils/paths/paths";

export const useRemoveProductAdminMutation = (
  productId: string,
  token: string
) => {
  return useMutation(async () => {
    const { data } = await axios.delete<RemoveProductResponse>(
      `${REMOVE_PRODUCT_ADMIN_URL}/${productId}`,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};

export const useAddProductAdminMutation = (token: string) => {
  return useMutation(async (formData: FormData) => {
    const { data } = await axios.post<AddProductResponse>(
      ADD_PRODUCT_ADMIN_URL,
      formData,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};
