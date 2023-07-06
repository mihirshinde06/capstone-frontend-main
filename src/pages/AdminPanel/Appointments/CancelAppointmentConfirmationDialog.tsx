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
import { ICancelAppointmentConfirmationDialogProps } from "./types";
import { useCancelAppointmentAdminMutation } from "../../../react-query/mutations/appointments/appointments";
import { useGetAppointmentsHistoryAdminQuery } from "../../../react-query/queries/admin/admin";

const CancelAppointmentConfirmationDialog = ({
  open,
  handleClose,
  appointmentId,
}: ICancelAppointmentConfirmationDialogProps) => {
  const { token } = useIsUserLoggedIn();

  const { refetch } = useGetAppointmentsHistoryAdminQuery(token || "", true);

  const cancelAppointment = useCancelAppointmentAdminMutation(
    appointmentId,
    token || ""
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleCancelAppointment = () => {
    cancelAppointment.mutate(undefined, {
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
            You are about to cancel the following appointment -{" "}
            {formatOrderId(appointmentId || "")}. Are you sure?
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
            onClick={handleCancelAppointment}
          >
            Yes
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CancelAppointmentConfirmationDialog;
