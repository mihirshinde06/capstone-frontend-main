export type GetOrderHistoryAdminResponse = OrderHistoryItem[];

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
