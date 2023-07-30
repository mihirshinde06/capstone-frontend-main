import { useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Brands from "../Home/Brands/Brands";
import clock from "../../assets/images/clock.svg";
import tickMark from "../../assets/images/tick-mark.svg";
import checkList from "../../assets/images/checklist.svg";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { clearCartItems } from "../../redux/slices/shoppingCartSlice";
import { ILocationProps } from "./types";

const OrderPlacedSuccessfully = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const state = location.state as ILocationProps;

  useEffect(() => {
    state?.shouldClearCart && dispatch(clearCartItems());
  }, [state, dispatch]);

  if (!state?.shouldClearCart) {
    return <Navigate to="/products" />;
  }

  return (
    <>
      <PageHeader title="Order successful" />
      <Box>
        <Grid
          container
          sx={{ margin: "5rem 0 0", textAlign: "center" }}
          justifyContent="center"
        >
          <Grid item>
            <img style={{ padding: "1rem" }} src={clock} alt="clock" />
          </Grid>
          <Grid item>
            <img src={tickMark} alt="tickMark" />
            <Typography
              sx={{
                color: "#101750",
                fontSize: "2.25rem",
                fontWeight: "500",
                padding: "1rem",
              }}
            >
              Your order has been placed successfully!
            </Typography>
            <Typography sx={{ color: "#8D92A7", fontSize: "1rem" }}>
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 days.
            </Typography>
            <Typography sx={{ color: "#8D92A7", fontSize: "1rem" }}>
              You will receive an email confirmation when your order is
              completed.
            </Typography>
            <Link to="/products">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "0",
                  textTransform: "none",
                  background: "#FF1788",
                  ":hover": { background: "#FF1788" },
                  marginTop: "1rem",
                  padding: ".5rem 2rem",
                }}
              >
                Continue Shopping
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "end", padding: "0 15rem 0" }}>
          <img
            style={{ padding: "1rem 3rem" }}
            src={checkList}
            alt="checkList"
          />
        </Box>
      </Box>
      <Brands />
    </>
  );
};

export default OrderPlacedSuccessfully;
