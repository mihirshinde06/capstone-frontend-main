import { Typography } from "@mui/material";

import OrderHistoryTableHeader from "./OrderHistoryTableHeader";
import OrderHistoryTableRow from "./OrderHistoryTableRow";
import { IOrderHistoryTableProps } from "./types";

const OrderHistoryTable = ({ orderHistoryData }: IOrderHistoryTableProps) => {
  return (
    <>
      <OrderHistoryTableHeader />
      {orderHistoryData && orderHistoryData?.length > 0 ? (
        orderHistoryData?.map((order) => (
          <OrderHistoryTableRow orderDetails={order} />
        ))
      ) : (
        <Typography fontWeight={700} mb={1} sx={{ color: "#1D3178" }}>
          There are no orders yet!
        </Typography>
      )}
    </>
  );
};

export default OrderHistoryTable;
