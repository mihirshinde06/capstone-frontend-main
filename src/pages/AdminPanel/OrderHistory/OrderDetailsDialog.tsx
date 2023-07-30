import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";

import Loader from "../../../components/Loader/Loader";
import useIsUserLoggedIn from "../../../hooks/useIsUserLoggedIn";
import { formatOrderId, formatPrice } from "../../../utils/utils";
import { IOrderDetailsDialogProps } from "./types";
import { useGetOrderByIdAdminQuery } from "../../../react-query/queries/admin/admin";

const OrderDetailsDialog = ({
  open,
  handleClose,
  orderId,
}: IOrderDetailsDialogProps) => {
  const { token } = useIsUserLoggedIn();

  const { isLoading, data } = useGetOrderByIdAdminQuery(
    orderId,
    token || "",
    open
  );

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      {isLoading ? (
        <Loader sx={{ padding: "5rem" }} />
      ) : (
        <Box sx={{ padding: "1rem", color: "#1D3178" }}>
          <DialogTitle>
            <Typography fontWeight={700} fontSize={18} mb={1}>
              Order Number {formatOrderId(data?._id || "")}
            </Typography>
            <Divider sx={{ marginBottom: "1rem" }} />
          </DialogTitle>
          <DialogContent>
            <Typography mb={1} fontWeight={700} fontSize={18}>
              Personal Details
            </Typography>
            <Divider sx={{ marginBottom: "1rem" }} />
            <Grid container spacing={"2rem"} mb={3}>
              <Grid item sm={3}>
                <Typography fontWeight={700} mb={1}>
                  Ordered by
                </Typography>
                <Typography>{`${data?.firstName || "-"} ${
                  data?.lastName || "-"
                }`}</Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography fontWeight={700} mb={1}>
                  Email
                </Typography>
                <Typography>{data?.email || "-"}</Typography>
              </Grid>
              <Grid item sm={6}>
                <Typography fontWeight={700} mb={1}>
                  Delivery address
                </Typography>
                <Grid container spacing="2rem">
                  <Grid item>
                    <Typography mb={1}>
                      Country - {data?.country || "-"}
                    </Typography>
                    <Typography>City - {data?.city || "-"}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography mb={1}>
                      Post code - {data?.postalCode || "-"}
                    </Typography>
                    <Typography>
                      Delivery method -{" "}
                      {data?.deliveryMethod.toUpperCase() || "-"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Typography mb={1} fontWeight={700} fontSize={18}>
              Order Items
            </Typography>
            <Divider sx={{ marginBottom: "1rem" }} />
            <Grid container mb={2}>
              <Grid item sm={2}>
                <Typography fontWeight={700}>Serial No.</Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography fontWeight={700}>Product</Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography fontWeight={700}>Quantity</Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography fontWeight={700}>Subtotal</Typography>
              </Grid>
            </Grid>
            {data?.orderItems.map((item, index) => (
              <Grid container>
                <Grid item sm={2}>
                  <Typography>{index + 1}.</Typography>
                </Grid>
                <Grid item sm={4}>
                  <Typography>
                    <img
                      src={item.itemInCart.image}
                      alt="product"
                      style={{ width: "4rem" }}
                    />
                  </Typography>
                </Grid>
                <Grid item sm={3}>
                  <Typography>{item.quantity}</Typography>
                </Grid>
                <Grid item sm={3}>
                  <Typography>
                    {formatPrice(item.subtotal.toString())}
                  </Typography>
                </Grid>
              </Grid>
            ))}
            <Divider sx={{ marginBottom: "1rem" }} />
            <Box textAlign={"end"} mb={2}>
              <Typography fontWeight={700}>Total</Typography>
              <Typography>{formatPrice(data?.totalCost || "")}</Typography>
            </Box>
            <Divider sx={{ marginBottom: "1rem" }} />
          </DialogContent>
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
              Close
            </Button>
          </DialogActions>
        </Box>
      )}
    </Dialog>
  );
};

export default OrderDetailsDialog;
