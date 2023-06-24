import {
  Dialog,
  Box,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import useIsUserLoggedIn from "../../../hooks/useIsUserLoggedIn";
import { useCancelAnOrderMutation } from "../../../react-query/mutations/orders/orders";
import { useGetOrderHistoryQuery } from "../../../react-query/queries/user/user";
import { formatOrderId } from "../../../utils/utils";
import { ICancelOrderConfirmationDialogProps } from "./types";

const CancelOrderConfirmationDialog = ({
  open,
  handleClose,
  orderId,
}: ICancelOrderConfirmationDialogProps) => {
  const { token } = useIsUserLoggedIn();

  const [shouldRefetch, setShouldRefetch] = useState(false);

  useGetOrderHistoryQuery(token || "", shouldRefetch);

  const cancelOrder = useCancelAnOrderMutation(orderId, token || "");

  const { enqueueSnackbar } = useSnackbar();

  const handleCancelOrder = () => {
    cancelOrder.mutate(undefined, {
      onSuccess: (data) => {
        enqueueSnackbar(data.msg, {
          variant: "success",
        });
        handleClose();
        setShouldRefetch(true);
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
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box sx={{ padding: "1rem", color: "#1D3178" }}>
        <DialogTitle>
          <Typography fontWeight={700} fontSize={18} mb={1}>
            You are about to cancel the following order -{" "}
            {formatOrderId(orderId || "")}. Are you sure?
          </Typography>
        </DialogTitle>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
            onClick={handleCancelOrder}
          >
            Yes
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CancelOrderConfirmationDialog;
