import { IShoppingCartItem } from "../../../redux/slices/types";

export interface PlaceAnOrderPayload {
  firstName: string;
  lastName: string;
  email: string;
  streetName: string;
  city: string;
  country: string;
  postalCode: string;
  totalCost: string;
  deliveryMethod: string;
  orderItems: IShoppingCartItem[];
}

export interface Order {
  firstName: string;
  lastName: string;
  email: string;
  streetName: string;
  city: string;
  country: string;
  postalCode: string;
  totalCost: string;
  deliveryMethod: string;
  orderItems: IShoppingCartItem[];
  date: string;
  status: string;
  userId: string;
  _id: string;
  __v: number;
}

export interface PlaceAnOrderResponse {
  msg: string;
  order: Order;
}

export interface CancelAnOrderResponse {
  msg: string;
}

export interface CompleteAnOrderResponse {
  msg: string;
}
