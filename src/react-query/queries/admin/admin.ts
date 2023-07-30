import axios from "axios";
import { useQuery } from "react-query";
import {
  GET_ALL_APPOINTMENTS_ADMIN_QUERY_KEY,
  GET_ALL_PRODUCTS_ADMIN_QUERY_KEY,
  GET_ORDER_BY_ID_ADMIN_QUERY_KEY,
  GET_ORDER_HISTORY_ADMIN_QUERY_KEY,
} from "../../../utils/keys/keys";
import { commonQueryConfig } from "../utils";
import {
  GET_ALL_APPOINTMENTS_ADMIN_URL,
  GET_ALL_PRODUCTS_ADMIN_URL,
  GET_ORDER_BY_ID_ADMIN_URL,
  GET_ORDER_HISTORY_ADMIN_URL,
} from "../../../utils/paths/paths";
import { GetOrderHistoryAdminResponse, OrderHistoryItem } from "./types";
import { GetAppointmentsHistoryResponse } from "../user/types";
import { GetAllProductsResponse } from "../products/types";

export const useGetOrderHistoryAdminQuery = (
  token: string,
  enabled: boolean
) => {
  const apiQuery = async (): Promise<GetOrderHistoryAdminResponse> => {
    const { data } = await axios.get(GET_ORDER_HISTORY_ADMIN_URL, {
      headers: { "auth-token": token },
    });
    return data;
  };

  return useQuery(GET_ORDER_HISTORY_ADMIN_QUERY_KEY, apiQuery, {
    ...commonQueryConfig,
    enabled,
  });
};

export const useGetOrderByIdAdminQuery = (
  orderId: string,
  token: string,
  enabled: boolean
) => {
  const apiQuery = async (): Promise<OrderHistoryItem> => {
    const { data } = await axios.get(
      `${GET_ORDER_BY_ID_ADMIN_URL}/${orderId}`,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  };

  return useQuery(GET_ORDER_BY_ID_ADMIN_QUERY_KEY, apiQuery, {
    ...commonQueryConfig,
    enabled,
  });
};

export const useGetAppointmentsHistoryAdminQuery = (
  token: string,
  enabled: boolean
) => {
  const apiQuery = async (): Promise<GetAppointmentsHistoryResponse> => {
    const { data } = await axios.get(GET_ALL_APPOINTMENTS_ADMIN_URL, {
      headers: { "auth-token": token },
    });
    return data;
  };

  return useQuery(GET_ALL_APPOINTMENTS_ADMIN_QUERY_KEY, apiQuery, {
    ...commonQueryConfig,
    enabled,
  });
};

export const useGetAllProductsAdminQuery = (token: string) => {
  const apiQuery = async (): Promise<GetAllProductsResponse> => {
    const { data } = await axios.get(GET_ALL_PRODUCTS_ADMIN_URL, {
      headers: { "auth-token": token },
    });
    return data;
  };

  return useQuery(
    GET_ALL_PRODUCTS_ADMIN_QUERY_KEY,
    apiQuery,
    commonQueryConfig
  );
};
