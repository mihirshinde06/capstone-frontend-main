import {
  Dialog,
  Box,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";
import { useSnackbar } from "notistack";
import useIsUserLoggedIn from "../../../hooks/useIsUserLoggedIn";
import { useCancelAnOrderAdminMutation } from "../../../react-query/mutations/orders/orders";
import { formatOrderId } from "../../../utils/utils";
import { ICancelOrderConfirmationDialogProps } from "./types";
import { useGetOrderHistoryAdminQuery } from "../../../react-query/queries/admin/admin";

const CancelOrderConfirmationDialog = ({
  open,
  handleClose,
  orderId,
}: ICancelOrderConfirmationDialogProps) => {
  const { token } = useIsUserLoggedIn();

  const { refetch } = useGetOrderHistoryAdminQuery(token || "", true);

  const cancelOrder = useCancelAnOrderAdminMutation(orderId, token || "");

  const { enqueueSnackbar } = useSnackbar();

  const handleCancelOrder = () => {
    cancelOrder.mutate(undefined, {
      onSuccess: (data) => {
        enqueueSnackbar(data.msg, {
          variant: "success",
        });
        handleClose();
        refetch();
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
            disabled={cancelOrder.isLoading}
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
            disabled={cancelOrder.isLoading}
          >
            Yes
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CancelOrderConfirmationDialog;
