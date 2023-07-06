import { Typography } from "@mui/material";
import { IAppointmentsHistoryTableProps } from "./types";
import AppointmentsHistoryTableHeader from "./AppointmentsHistoryTableHeader";
import AppointmentsHistoryTableRow from "./AppointmentsHistoryTableRow";

const AppointmentsHistoryTable = ({
  appointmentsHistoryData,
}: IAppointmentsHistoryTableProps) => {
  return (
    <>
      <AppointmentsHistoryTableHeader />
      {appointmentsHistoryData && appointmentsHistoryData?.length > 0 ? (
        appointmentsHistoryData?.map((appointment) => (
          <AppointmentsHistoryTableRow appointmentDetails={appointment} />
        ))
      ) : (
        <Typography fontWeight={700} mb={1} sx={{ color: "#1D3178" }}>
          You haven't booked any appointments yet!
        </Typography>
      )}
    </>
  );
};

export default AppointmentsHistoryTable;
