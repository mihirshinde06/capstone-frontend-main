import axios from "axios";
import { useMutation } from "react-query";
import {
  CANCEL_AN_ORDER_ADMIN_URL,
  CANCEL_AN_ORDER_URL,
  COMPLETE_AN_ORDER_ADMIN_URL,
  PLACE_AN_ORDER_URL,
} from "../../../utils/paths/paths";
import {
  CancelAnOrderResponse,
  CompleteAnOrderResponse,
  PlaceAnOrderPayload,
} from "./types";

export const usePlaceAnOrderMutation = (token: string) => {
  return useMutation(async (formData: PlaceAnOrderPayload) => {
    await axios.post(PLACE_AN_ORDER_URL, formData, {
      headers: { "auth-token": token },
    });
  });
};

export const useCancelAnOrderMutation = (orderId: string, token: string) => {
  return useMutation(async () => {
    const { data } = await axios.patch<CancelAnOrderResponse>(
      `${CANCEL_AN_ORDER_URL}/${orderId}`,
      null,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};

export const useCancelAnOrderAdminMutation = (
  orderId: string,
  token: string
) => {
  return useMutation(async () => {
    const { data } = await axios.patch<CancelAnOrderResponse>(
      `${CANCEL_AN_ORDER_ADMIN_URL}/${orderId}`,
      null,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};

export const useCompleteAnOrderAdminMutation = (
  orderId: string,
  token: string
) => {
  return useMutation(async () => {
    const { data } = await axios.patch<CompleteAnOrderResponse>(
      `${COMPLETE_AN_ORDER_ADMIN_URL}/${orderId}`,
      null,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};
