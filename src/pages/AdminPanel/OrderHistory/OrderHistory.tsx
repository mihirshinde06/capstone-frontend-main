import { Typography, Box } from "@mui/material";
import OrderHistoryTable from "./OrderHistoryTable";
import { IOrderHistoryProps } from "./types";

const OrderHistory = ({ orderHistoryData }: IOrderHistoryProps) => {
  return (
    <Box mb={4}>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#151875",
          marginBottom: "2rem",
        }}
      >
        Order History
      </Typography>
      <Box
        sx={{
          borderRadius: ".188rem",
          background: "#F4F4FC",
          padding: "1.5rem 2rem",
        }}
      >
        <OrderHistoryTable orderHistoryData={orderHistoryData} />
      </Box>
    </Box>
  );
};

export default OrderHistory;
