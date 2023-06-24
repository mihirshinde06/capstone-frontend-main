import { SelectChangeEvent } from "@mui/material";
import { IShoppingCartItem } from "../../redux/slices/types";

export interface ICheckOutProductDetailsProps {
  shoppingCartItem: IShoppingCartItem;
}

export interface ICheckOutFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    streetName: string;
    city: string;
    country: string;
    postalCode: string;
    totalCost: string;
    orderItems: IShoppingCartItem[];
  };
  handleChangeFormData: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  deliveryMethod: string;
  handleChangeDeliveryMethod: (event: SelectChangeEvent) => void;
}
