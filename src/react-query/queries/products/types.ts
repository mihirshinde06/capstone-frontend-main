export interface Product {
  image: string;
  quantity: number;
  name: string;
  description: string;
  price: string;
  rating: string;
  category: string;
  _id: string;
  __v: number;
}

export interface GetAllProductsResponse {
  msg: string;
  products: Product[];
}
