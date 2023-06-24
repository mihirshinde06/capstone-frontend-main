import React from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import { clearCartItems } from "../../../redux/slices/shoppingCartSlice";

const CartItemsTableFooter = () => {
  const dispatch = useAppDispatch();

  return (
    <Box mt={5} textAlign="end">
      <Button
        variant="contained"
        sx={{
          borderRadius: "0",
          textTransform: "none",
          background: "#FF1788",
          ":hover": { background: "#FF1788" },
          padding: "0.3rem 1.5rem",
          marginBottom: "1rem",
        }}
        onClick={() => dispatch(clearCartItems())}
      >
        Clear Cart
      </Button>
    </Box>
  );
};

export default CartItemsTableFooter;
