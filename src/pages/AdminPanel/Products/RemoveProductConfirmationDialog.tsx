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
import { formatOrderId } from "../../../utils/utils";
import { IRemoveProductConfirmationDialogProps } from "./types";
import { useGetAllProductsAdminQuery } from "../../../react-query/queries/admin/admin";
import { useRemoveProductAdminMutation } from "../../../react-query/mutations/products/products";

const RemoveProductConfirmationDialog = ({
  open,
  handleClose,
  productId,
}: IRemoveProductConfirmationDialogProps) => {
  const { token } = useIsUserLoggedIn();

  const { refetch } = useGetAllProductsAdminQuery(token || "");

  const removeProduct = useRemoveProductAdminMutation(productId, token || "");

  const { enqueueSnackbar } = useSnackbar();

  const handleRemoveProduct = () => {
    removeProduct.mutate(undefined, {
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
            You are about to remove the following product -{" "}
            {formatOrderId(productId || "")}. Are you sure?
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
            disabled={removeProduct.isLoading}
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
            onClick={handleRemoveProduct}
            disabled={removeProduct.isLoading}
          >
            Yes
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default RemoveProductConfirmationDialog;
