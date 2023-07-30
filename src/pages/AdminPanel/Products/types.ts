import {
  GetAllProductsResponse,
  Product,
} from "../../../react-query/queries/products/types";

export interface IProductsProps {
  products?: GetAllProductsResponse;
}

export interface IProductsTableProps {
  productsData?: GetAllProductsResponse;
}

export interface IProductsTableRowProps {
  productDetails: Product;
}

export interface IRemoveProductConfirmationDialogProps {
  open: boolean;
  handleClose: () => void;
  productId: string;
}

export interface IAddProductProps {
  open: boolean;
  handleClose: () => void;
}
