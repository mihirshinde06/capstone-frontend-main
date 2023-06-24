import React from "react";
import { Grid, Typography } from "@mui/material";

const CartItemsTableHeader = () => {
  return (
    <Grid container alignItems="center" mb={5}>
      <Grid item sm={6}>
        <Typography fontSize={20} fontWeight={700} sx={{ color: "#1D3178" }}>
          Product
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography fontSize={20} fontWeight={700} sx={{ color: "#1D3178" }}>
          Price
        </Typography>
      </Grid>
      <Grid item sm={2} textAlign="center">
        <Typography fontSize={20} fontWeight={700} sx={{ color: "#1D3178" }}>
          Quantity
        </Typography>
      </Grid>
      <Grid item sm={2} textAlign="end">
        <Typography fontSize={20} fontWeight={700} sx={{ color: "#1D3178" }}>
          Total
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CartItemsTableHeader;
