import { Grid, Typography, Rating, IconButton, Tooltip } from "@mui/material";
import zoomIcon from "../../../assets/images/zoom-icon.svg";
import shoppingCartColorIcon from "../../../assets/images/shopping-cart-color-icon.svg";
import { IProductsListItemProps } from "./types";
import { formatPrice } from "../../../utils/utils";
import ProductListItemDetails from "./ProductListItemDetails";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../../redux/slices/shoppingCartSlice";
import React from "react";

const ProductsListItem = ({ product }: IProductsListItemProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();

  const { itemsInCart } = useAppSelector((state) => state.shoppingCart);

  const shoppingCartItem = {
    itemInCart: product,
    quantity: 1,
    subtotal: parseFloat(product.price),
  };

  const checkIfItemExists = () => {
    return itemsInCart.some(
      (item) => item.itemInCart._id === shoppingCartItem.itemInCart._id
    );
  };

  return (
    <>
      <Grid
        container
        padding="1rem"
        mb={3}
        sx={{
          cursor: "pointer",
          ":hover": {
            background: "#F6F5FF",
          },
        }}
      >
        <Grid item md={4} pr={1}>
          <img
            src={product.image}
            alt="products list item"
            style={{ width: "95%" }}
          />
        </Grid>
        <Grid item padding="1rem" md={8}>
          <Typography
            fontSize={18}
            fontWeight={500}
            sx={{ color: "#111C85", wordWrap: "break-word" }}
            mb={1}
          >
            {product.name}
          </Typography>
          <Grid container alignItems="center" gap={2}>
            <Grid item>{formatPrice(product.price)}</Grid>
            <Grid item>
              <Rating
                name="read-only"
                value={parseFloat(product.rating)}
                readOnly
                precision={0.5}
              />
            </Grid>
          </Grid>
          <Typography
            fontSize={16}
            sx={{ color: "#9295AA", wordWrap: "break-word" }}
            mt={2}
            mb={2}
          >
            {product.description}
          </Typography>
          <Grid container alignItems="center" gap={2}>
            <Grid item>
              <Tooltip
                title={checkIfItemExists() ? "Remove from cart" : "Add to cart"}
              >
                <IconButton
                  onClick={() =>
                    dispatch(
                      checkIfItemExists()
                        ? removeItemFromCart(product._id)
                        : addItemToCart(shoppingCartItem)
                    )
                  }
                >
                  {/* <img
                    src={
                      checkIfItemExists() ? cancelIcon : shoppingCartColorIcon
                    }
                    alt="shopping-cart"
                    style={{
                      background: "#FB2E86",
                      padding: "0.5rem",
                      borderRadius: "50%",
                    }}
                  /> */}

                  {checkIfItemExists() ? (
                    <img
                      src={shoppingCartColorIcon}
                      alt="shopping-cart"
                      style={{
                        background: "#f28cb8bd",
                        padding: "0.5rem",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <img
                      src={shoppingCartColorIcon}
                      alt="shopping-cart"
                      style={{
                        // background: "#FB2E86",
                        padding: "0.5rem",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="View">
                <IconButton onClick={handleClickOpen}>
                  <img
                    src={zoomIcon}
                    alt="zoom"
                    style={{ padding: "0.5rem" }}
                  />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ProductListItemDetails
        open={open}
        handleClose={handleClose}
        productId={product._id}
        shoppingCartItem={shoppingCartItem}
        checkIfItemExists={checkIfItemExists}
      />
    </>
  );
};

export default ProductsListItem;
