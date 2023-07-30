import {
  Slide,
  Dialog,
  Grid,
  Typography,
  Rating,
  Button,
  IconButton,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { IProductListItemDetailsProps } from "./types";
import { useGetProductByIdQuery } from "../../../react-query/queries/products/products";
import Loader from "../../../components/Loader/Loader";
import { formatPrice } from "../../../utils/utils";
import cancelIcon from "../../../assets/images/cancel-icon.svg";
import { useAppDispatch } from "../../../redux/hooks";
import {
  removeItemFromCart,
  addItemToCart,
} from "../../../redux/slices/shoppingCartSlice";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductListItemDetails = ({
  open,
  handleClose,
  productId,
  shoppingCartItem,
  checkIfItemExists,
}: IProductListItemDetailsProps) => {
  const { data, isLoading } = useGetProductByIdQuery(productId, open);

  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="md"
    >
      {isLoading ? (
        <Loader sx={{ padding: "5rem" }} />
      ) : (
        <Grid container padding="1rem">
          <Grid item sm={4} p={2}>
            <img src={data?.image} alt="product" style={{ width: "100%" }} />
          </Grid>
          <Grid item sm={7} pt={2} pb={2} pl={4} pr={2}>
            <Typography
              fontSize={36}
              fontWeight={500}
              sx={{ color: "#0D134E", wordWrap: "break-word" }}
            >
              {data?.name}
            </Typography>
            <Grid container mb={1} mt={1}>
              <Grid item>
                <Rating
                  name="read-only"
                  value={parseFloat(data?.rating || "")}
                  readOnly
                  precision={0.5}
                  size="small"
                />
              </Grid>
              <Grid item>
                <Typography fontSize={14} sx={{ color: "#0D134E" }}>
                  ({Math.floor(Math.random() * 1000) + 100})
                </Typography>
              </Grid>
            </Grid>
            <Typography
              fontSize={16}
              sx={{ color: "#0D134E", marginBottom: "1rem" }}
            >
              {formatPrice(data?.price || "")}
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={500}
              sx={{
                color: "#A9ACC6",
                margin: "1rem 0",
                wordWrap: "break-word",
              }}
            >
              {data?.description}
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                color: "#0D134E",
                marginBottom: "1rem",
              }}
              variant="outlined"
              onClick={() =>
                dispatch(
                  checkIfItemExists()
                    ? removeItemFromCart(productId)
                    : addItemToCart(shoppingCartItem)
                )
              }
            >
              {checkIfItemExists() ? "Remove from cart" : "Add to cart"}
            </Button>
            <Typography
              fontSize={16}
              fontWeight={500}
              sx={{ color: "#0D134E" }}
            >
              Category - {data?.category.toUpperCase().replaceAll("-", " ")}
            </Typography>
          </Grid>
          <Grid item textAlign="center" sm={1}>
            <IconButton onClick={handleClose}>
              <img
                src={cancelIcon}
                alt="close"
                style={{ transform: "scale(2)" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Dialog>
  );
};

export default ProductListItemDetails;
