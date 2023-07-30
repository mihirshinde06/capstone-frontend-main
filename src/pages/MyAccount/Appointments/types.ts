import {
  Appointment,
  GetAppointmentsHistoryResponse,
} from "../../../react-query/queries/user/types";

export interface IBookAppointmentProps {
  open: boolean;
  handleClose: () => void;
}

export interface IAppointmentsProps {
  appointmentsHistoryData?: GetAppointmentsHistoryResponse;
}

export interface IAppointmentsHistoryTableProps {
  appointmentsHistoryData?: GetAppointmentsHistoryResponse;
}

export interface IAppointmentHistoryTableRowProps {
  appointmentDetails: Appointment;
}

export interface ICancelAppointmentConfirmationDialogProps {
  open: boolean;
  handleClose: () => void;
  appointmentId: string;
}
