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
import { ICompleteAppointmentConfirmationDialogProps } from "./types";
import { useGetAppointmentsHistoryAdminQuery } from "../../../react-query/queries/admin/admin";
import { useCompleteAppointmentAdminMutation } from "../../../react-query/mutations/appointments/appointments";

const CompleteAppointmentConfirmationDialog = ({
  open,
  handleClose,
  appointmentId,
}: ICompleteAppointmentConfirmationDialogProps) => {
  const { token } = useIsUserLoggedIn();

  const { refetch } = useGetAppointmentsHistoryAdminQuery(token || "", true);

  const completeAppointment = useCompleteAppointmentAdminMutation(
    appointmentId,
    token || ""
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleCompleteAppointment = () => {
    completeAppointment.mutate(undefined, {
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
            You are about to complete the following appointment -{" "}
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
            disabled={completeAppointment.isLoading}
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
            onClick={handleCompleteAppointment}
            disabled={completeAppointment.isLoading}
          >
            Yes
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CompleteAppointmentConfirmationDialog;
