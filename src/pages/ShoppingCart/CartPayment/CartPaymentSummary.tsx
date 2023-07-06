import React from "react";
import {
  Typography,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
} from "@mui/material";
import { formatPrice } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import useCalculateTotal from "../../../hooks/useCalculateTotal";
import { useSnackbar } from "notistack";
import useIsUserLoggedIn from "../../../hooks/useIsUserLoggedIn";

const CartPaymentSummary = () => {
  const { total } = useCalculateTotal();

  const { isLoggedIn } = useIsUserLoggedIn();

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleCheckout = () => {
    isLoggedIn === "true"
      ? navigate("/checkout")
      : enqueueSnackbar("Please login to place an order!", {
          variant: "error",
        });
  };

  return (
    <>
      <Typography
        fontSize={20}
        fontWeight={700}
        sx={{ color: "#1D3178" }}
        mb={6}
        textAlign="center"
      >
        Cart Total
      </Typography>
      <Box
        sx={{ background: "#F4F4FC", padding: "2rem", borderRadius: ".5rem" }}
      >
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
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#19D16F",
                "&.Mui-checked": {
                  color: "#19D16F",
                },
              }}
            />
          }
          label="Shipping & taxes calculated at checkout"
          style={{ color: "#8A91AB", marginBottom: "1.25rem" }}
        />
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
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </>
  );
};

export default CartPaymentSummary;
