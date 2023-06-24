import { Box, Typography, Grid, Button } from "@mui/material";
import { useState } from "react";
import BookAppointment from "./BookAppointment";

const Appointments = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box mt={8} mb={4}>
      <Grid container>
        <Grid item sm>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#151875",
              marginBottom: "2rem",
            }}
          >
            Appointments History
          </Typography>
        </Grid>
        <Grid item>
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
            onClick={() => setOpen(true)}
          >
            Book An Appointment
          </Button>
        </Grid>
      </Grid>
      {open && (
        <BookAppointment open={open} handleClose={() => setOpen(false)} />
      )}
    </Box>
  );
};

export default Appointments;
