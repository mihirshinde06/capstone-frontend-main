export interface GetUserDetailsResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  resetPasswordToken?: any;
  resetPasswordExpires?: any;
  __v: number;
}

export type GetOrderHistoryResponse = OrderHistoryItem[];

export interface OrderHistoryItem {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  streetName: string;
  city: string;
  country: string;
  postalCode: string;
  totalCost: string;
  deliveryMethod: string;
  orderItems: OrderItem[];
  date: string;
  status: string;
  userId: string;
  __v: number;
}

export interface OrderItem {
  itemInCart: ItemInCart;
  quantity: number;
  subtotal: number;
}

export interface ItemInCart {
  _id: string;
  image: string;
  quantity: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  category: string;
  __v: number;
}

export interface Appointment {
  _id: string;
  name: string;
  address: string;
  mobileNumber: number;
  dateAndTime: string;
  status: string;
  userId: string;
  __v: number;
}

export type GetAppointmentsHistoryResponse = Appointment[];
