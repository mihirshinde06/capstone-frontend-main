import {
  GetOrderHistoryResponse,
  OrderHistoryItem,
} from "../../../react-query/queries/user/types";

export interface IOrderHistoryProps {
  orderHistoryData?: GetOrderHistoryResponse;
}

export interface IOrderHistoryTableProps {
  orderHistoryData?: GetOrderHistoryResponse;
}

export interface IOrderHistoryTableRowProps {
  orderDetails: OrderHistoryItem;
}

export interface IOrderDetailsDialogProps {
  open: boolean;
  handleClose: () => void;
  orderId: string;
}

export interface ICancelOrderConfirmationDialogProps {
  open: boolean;
  handleClose: () => void;
  orderId: string;
}

export interface ICompleteOrderConfirmationDialogProps {
  open: boolean;
  handleClose: () => void;
  orderId: string;
}
