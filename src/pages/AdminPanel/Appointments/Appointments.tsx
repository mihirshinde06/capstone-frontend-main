import { Box, Typography, Grid } from "@mui/material";
import { IAppointmentsProps } from "./types";
import AppointmentsHistoryTable from "./AppointmentsHistoryTable";

const Appointments = ({ appointmentsHistoryData }: IAppointmentsProps) => {
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
      </Grid>
      <Box
        sx={{
          borderRadius: ".188rem",
          background: "#F4F4FC",
          padding: "1.5rem 2rem",
        }}
      >
        <AppointmentsHistoryTable
          appointmentsHistoryData={appointmentsHistoryData}
        />
      </Box>
    </Box>
  );
};

export default Appointments;
