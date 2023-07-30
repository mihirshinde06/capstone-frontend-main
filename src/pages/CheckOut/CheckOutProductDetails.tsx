import { Grid, Typography } from "@mui/material";
import { ICheckOutProductDetailsProps } from "./types";
import { formatPrice } from "../../utils/utils";

const CheckOutProductDetails = ({
  shoppingCartItem,
}: ICheckOutProductDetailsProps) => {
  return (
    <Grid container padding={"1rem"}>
      <Grid item sm={4}>
        <img
          src={shoppingCartItem.itemInCart.image}
          alt="bagImg"
          style={{ width: "6.3rem" }}
        />
      </Grid>
      <Grid item sm={6}>
        <Typography
          sx={{
            color: "#000000",
            fontSize: "0.875rem",
            wordWrap: "break-word",
          }}
        >
          {shoppingCartItem.itemInCart.name}
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography sx={{ fontSize: "0.875rem" }} textAlign={"end"}>
          {formatPrice(shoppingCartItem.subtotal.toString())}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CheckOutProductDetails;
