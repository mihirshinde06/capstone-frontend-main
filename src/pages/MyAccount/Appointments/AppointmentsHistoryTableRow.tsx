import { Grid, Typography, Button } from "@mui/material";
import { formatOrderId } from "../../../utils/utils";
import { IAppointmentHistoryTableRowProps } from "./types";
import CancelAppointmentConfirmationDialog from "./CancelAppointmentConfirmationDialog";
import { useState } from "react";

const AppointmentHistoryTableRow = ({
  appointmentDetails,
}: IAppointmentHistoryTableRowProps) => {
  const [openAppointmentCancelDialog, setOpenAppointmentCancelDialog] =
    useState(false);

  const handleOrderCancelDialogClose = () => {
    setOpenAppointmentCancelDialog(false);
  };

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        sx={{ color: "#1D3178" }}
        spacing="1rem"
      >
        <Grid item sm={3}>
          <Typography fontWeight={700} mb={1}>
            {formatOrderId(appointmentDetails._id)}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            {appointmentDetails.status}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            {appointmentDetails.dateAndTime}
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography fontWeight={700} mb={1}>
            {`${appointmentDetails.name}`}
          </Typography>
        </Grid>
        <Grid item sm={1}>
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
            disabled={appointmentDetails.status === "Cancelled"}
            onClick={() => setOpenAppointmentCancelDialog(true)}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
      <CancelAppointmentConfirmationDialog
        open={openAppointmentCancelDialog}
        handleClose={handleOrderCancelDialogClose}
        appointmentId={appointmentDetails._id}
      />
    </>
  );
};

export default AppointmentHistoryTableRow;
