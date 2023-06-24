import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import CartItemsTableFooter from "./CartItemsTableFooter";
import CartItemsTableHeader from "./CartItemsTableHeader";
import CartItemsTableRow from "./CartItemsTableRow";

const CartItemsTable = () => {
  const { itemsInCart } = useAppSelector((state) => state.shoppingCart);

  return (
    <Box>
      {itemsInCart.length > 0 ? (
        <>
          <CartItemsTableHeader />
          {itemsInCart.map((item) => (
            <CartItemsTableRow
              product={item.itemInCart}
              key={item.itemInCart._id}
            />
          ))}
          <CartItemsTableFooter />
        </>
      ) : (
        <Typography>Your shopping cart is empty!</Typography>
      )}
    </Box>
  );
};

export default CartItemsTable;
