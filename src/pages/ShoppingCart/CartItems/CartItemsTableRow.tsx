import { useEffect, useState } from "react";
import { Grid, Typography, IconButton, Divider, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ICartItemsTableRowProps } from "../types";
import { formatPrice } from "../../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  updateItemInCart,
  removeItemFromCart,
} from "../../../redux/slices/shoppingCartSlice";

const CartItemsTableRow = ({ product }: ICartItemsTableRowProps) => {
  const itemsInCart = useAppSelector((state) => state.shoppingCart.itemsInCart);

  const [quantity, setQuantity] = useState(
    itemsInCart.find((itemToFind) => itemToFind.itemInCart._id === product._id)
      ?.quantity || 0
  );

  const [subtotal, setSubTotal] = useState(
    itemsInCart.find((itemToFind) => itemToFind.itemInCart._id === product._id)
      ?.subtotal || 0
  );

  useEffect(() => {
    setSubTotal(quantity * parseFloat(product.price));
  }, [quantity, product]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      updateItemInCart({
        itemInCart: product,
        quantity,
        subtotal,
      })
    );
  }, [dispatch, product, quantity, subtotal]);

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={6}>
          <Grid container alignItems="center" gap={3}>
            <Grid item>
              {/* <Badge
                color="secondary"
                badgeContent={
                  <img
                    src={cancelIcon}
                    alt="remove-item"
                    style={{
                      height: "1.25rem",
                      width: "1.25rem",
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(removeItemFromCart(product._id))}
                  />
                }
                sx={{
                  "& .MuiBadge-anchorOriginTopRightRectangular": {
                    padding: "0 !important",
                  },
                }}
              >
               
              </Badge> */}
              <img
                src={product.image}
                alt="cart-item"
                style={{
                  width: "5.2rem",
                  borderRadius: ".15rem",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontSize={14}
                lineHeight={1.5}
                sx={{ color: "#000000" }}
              >
                {product.name}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "0",
                  textTransform: "none",
                  background: "#FF1788",
                  ":hover": { background: "#FF1788" },
                  marginTop: "0.4rem",
                  padding: "0.1rem 0.5rem",
                  // marginBottom: "1rem",
                }}
                onClick={() => dispatch(removeItemFromCart(product._id))}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={2}>
          <Typography fontSize={14} lineHeight={1.5} sx={{ color: "#15245E" }}>
            {formatPrice(product.price)}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Grid container alignItems={"center"} justifyContent="center">
            <Grid item>
              <IconButton
                onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
              >
                <RemoveIcon fontSize="small" sx={{ color: "#BEBFC2" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography
                fontSize={13}
                lineHeight={1.5}
                sx={{ color: "#343e5c" }}
              >
                {quantity}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => setQuantity(quantity + 1)}>
                <AddIcon fontSize="small" sx={{ color: "#b4bacd" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={2} textAlign="end">
          <Typography fontSize={14} lineHeight={1.5} sx={{ color: "#15245E" }}>
            {formatPrice(subtotal.toString())}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
    </>
  );
};

export default CartItemsTableRow;
