import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  Box,
  SelectChangeEvent,
  useMediaQuery,
} from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import CheckOutProductDetails from "./CheckOutProductDetails";
import useCalculateTotal from "../../hooks/useCalculateTotal";
import { formatPrice } from "../../utils/utils";
import { useAppSelector } from "../../redux/hooks";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { usePlaceAnOrderMutation } from "../../react-query/mutations/orders/orders";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import { useSnackbar } from "notistack";

const CheckOut = () => {
  const navigate = useNavigate();

  const { total } = useCalculateTotal();

  const itemsInCart = useAppSelector((state) => state.shoppingCart.itemsInCart);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    city: "",
    country: "",
    postalCode: "",
    totalCost: total.toString(),
    orderItems: itemsInCart,
  });

  useEffect(() => {
    setFormData({ ...formData, totalCost: total.toString() });
  }, [formData, total]);

  const handleChangeFormData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [deliveryMethod, setDeliveryMethod] = React.useState("standard");

  const handleChangeDeliveryMethod = (event: SelectChangeEvent) => {
    setDeliveryMethod(event.target.value as string);
  };

  const { token } = useIsUserLoggedIn();

  const { enqueueSnackbar } = useSnackbar();

  const placeAnOrder = usePlaceAnOrderMutation(token || "");

  const handlePlaceOrder = () => {
    placeAnOrder.mutate(
      { ...formData, deliveryMethod },
      {
        onSuccess: () => {
          navigate("/order-placed-successfully", {
            state: { shouldClearCart: true },
          });
        },
        onError: (error: any) => {
          enqueueSnackbar(
            error?.response?.data?.msg ||
              error?.response?.data?.errors[0]?.msg ||
              "An error occurred. Please try again.",
            {
              variant: "error",
            }
          );
        },
      }
    );
  };

  const matches = useMediaQuery("(max-width:1280px)");
  const matchesLg = useMediaQuery("(max-width:1440px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  if (itemsInCart.length <= 0) {
    return <Navigate to="/shopping-cart" />;
  }

  return (
    <>
      <PageHeader title={"Check out"} />;
      <Grid
        container
        padding={matches || matchesLg || matchesTablets ? "5rem" : "5rem 15rem"}
      >
        <Grid
          item
          sm={matchesTablets || matches ? 12 : 7}
          padding={"2rem"}
          sx={{ background: "#F8F8FD", borderRadius: ".5rem" }}
        >
          <Typography sx={{ color: "#1D3178", fontSize: "1.5rem" }}>
            Checkout
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "0.75rem",
              padding: "0 0 1rem 0",
            }}
          >
            Cart/ Information/ Shipping/ Payment
          </Typography>
          <CheckOutForm
            formData={formData}
            handleChangeFormData={handleChangeFormData}
            deliveryMethod={deliveryMethod}
            handleChangeDeliveryMethod={handleChangeDeliveryMethod}
          />
        </Grid>
        <Grid
          item
          sm={matchesTablets || matches ? 12 : 5}
          paddingLeft={matchesTablets || matches ? 0 : "5rem"}
          paddingTop={matchesTablets || matches ? "2rem" : 0}
        >
          {itemsInCart.map((shoppingCartItem) => (
            <CheckOutProductDetails shoppingCartItem={shoppingCartItem} />
          ))}
          <Box
            sx={{
              background: "#F4F4FC",
              padding: "2rem",
              borderRadius: ".5rem",
            }}
            mt={2}
          >
            <Grid container>
              <Grid item sm>
                <Typography fontSize={18} sx={{ color: "#1D3178" }}>
                  Subtotal:
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={18} sx={{ color: "#1D3178" }}>
                  {formatPrice(total.toString())}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 1, mb: 3 }} />
            <Grid container>
              <Grid item sm>
                <Typography fontSize={18} sx={{ color: "#1D3178" }}>
                  Total:
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={18} sx={{ color: "#1D3178" }}>
                  {formatPrice(total.toString())}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 1, mb: 3 }} />
            <Link to="/products">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "0",
                  textTransform: "none",
                  background: "#FF1788",
                  ":hover": { background: "#FF1788" },
                  padding: "0.7rem 2rem",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
                disabled={placeAnOrder.isLoading}
              >
                Continue Shopping
              </Button>
            </Link>
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: ".15rem",
                textTransform: "none",
                background: "#19D16F",
                ":hover": { background: "#19D16F" },
                padding: "0.7rem",
                marginBottom: "1rem",
              }}
              onClick={handlePlaceOrder}
              disabled={placeAnOrder.isLoading}
            >
              Submit and Place Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckOut;
