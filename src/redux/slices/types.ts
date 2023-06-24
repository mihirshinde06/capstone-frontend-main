import { Product } from "../../react-query/queries/products/types";

export interface IShoppingCartItem {
  itemInCart: Product;
  quantity: number;
  subtotal: number;
}
