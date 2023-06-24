import { Product } from "../../../react-query/queries/products/types";

export interface IProductsListItemProps {
  product: Product;
}

export interface IProductsListProps {
  setResults: React.Dispatch<React.SetStateAction<number>>;
}

export interface IProductListItemDetailsProps {
  open: boolean;
  handleClose: () => void;
  productId: string;
  shoppingCartItem: {
    itemInCart: Product;
    quantity: number;
    subtotal: number;
  };
  checkIfItemExists: () => boolean;
}
