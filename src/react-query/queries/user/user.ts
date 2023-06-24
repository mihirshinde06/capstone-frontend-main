import axios from "axios";
import { useQuery } from "react-query";
import {
  GET_ORDER_BY_ID_QUERY_KEY,
  GET_ORDER_HISTORY_QUERY_KEY,
  GET_USER_DETAILS_QUERY_KEY,
} from "../../../utils/keys/keys";
import {
  GET_ORDER_BY_ID_URL,
  GET_ORDER_HISTORY_URL,
  GET_USER_DETAILS_URL,
} from "../../../utils/paths/paths";
import { commonQueryConfig } from "../utils";
import {
  GetOrderHistoryResponse,
  GetUserDetailsResponse,
  OrderHistoryItem,
} from "./types";

export const useGetUserDetailsQuery = (token: string) => {
  const apiQuery = async (): Promise<GetUserDetailsResponse> => {
    const { data } = await axios.get(GET_USER_DETAILS_URL, {
      headers: { "auth-token": token },
    });
    return data;
  };

  return useQuery(GET_USER_DETAILS_QUERY_KEY, apiQuery, commonQueryConfig);
};

export const useGetOrderHistoryQuery = (token: string, enabled: boolean) => {
  const apiQuery = async (): Promise<GetOrderHistoryResponse> => {
    const { data } = await axios.get(GET_ORDER_HISTORY_URL, {
      headers: { "auth-token": token },
    });
    return data;
  };

  return useQuery(GET_ORDER_HISTORY_QUERY_KEY, apiQuery, {
    ...commonQueryConfig,
    enabled,
  });
};

export const useGetOrderByIdQuery = (
  orderId: string,
  token: string,
  enabled: boolean
) => {
  const apiQuery = async (): Promise<OrderHistoryItem> => {
    const { data } = await axios.get(`${GET_ORDER_BY_ID_URL}/${orderId}`, {
      headers: { "auth-token": token },
    });
    return data;
  };

  return useQuery(GET_ORDER_BY_ID_QUERY_KEY, apiQuery, {
    ...commonQueryConfig,
    enabled,
  });
};
