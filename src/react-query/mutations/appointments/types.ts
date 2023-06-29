export interface BookAnAppointmentPayload {
  name: string;
  address: string;
  dateAndTime: string;
  mobileNumber: string;
}

export interface CancelAppointmentResponse {
  msg: string;
}
