import axios from "axios";
import { useMutation } from "react-query";
import {
  BOOK_APPOINTMENT_URL,
  CANCEL_APPOINTMENT_ADMIN_URL,
  CANCEL_APPOINTMENT_URL,
  COMPLETE_APPOINTMENT_ADMIN_URL,
} from "../../../utils/paths/paths";
import {
  BookAnAppointmentPayload,
  CancelAppointmentResponse,
  CompleteAppointmentResponse,
} from "./types";

export const useBookAnAppointmentMutation = (token: string) => {
  return useMutation(async (formData: BookAnAppointmentPayload) => {
    await axios.post(BOOK_APPOINTMENT_URL, formData, {
      headers: { "auth-token": token },
    });
  });
};

export const useCancelAppointmentMutation = (
  appointmentId: string,
  token: string
) => {
  return useMutation(async () => {
    const { data } = await axios.patch<CancelAppointmentResponse>(
      `${CANCEL_APPOINTMENT_URL}/${appointmentId}`,
      null,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};

export const useCancelAppointmentAdminMutation = (
  appointmentId: string,
  token: string
) => {
  return useMutation(async () => {
    const { data } = await axios.patch<CancelAppointmentResponse>(
      `${CANCEL_APPOINTMENT_ADMIN_URL}/${appointmentId}`,
      null,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};

export const useCompleteAppointmentAdminMutation = (
  appointmentId: string,
  token: string
) => {
  return useMutation(async () => {
    const { data } = await axios.patch<CompleteAppointmentResponse>(
      `${COMPLETE_APPOINTMENT_ADMIN_URL}/${appointmentId}`,
      null,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};
