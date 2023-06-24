import axios from "axios";
import {
  SEND_CONTACT_FORM_EMAIL_URL,
  SEND_FAQ_FORM_EMAIL_URL,
  SEND_NEWSLETTER_SIGNUP_EMAIL_USER_URL,
  SEND_PASSWORD_RESET_EMAIL_USER_URL,
} from "../../utils/paths/paths";
import {
  ISendContactFormEmail,
  ISendFAQFormEmail,
  ISendNewsletterSignupEmail,
  ISendPasswordResetEmail,
  SendEmailResponse,
} from "./types";

export const sendNewsletterSignupEmail = async (
  formData: ISendNewsletterSignupEmail
): Promise<SendEmailResponse> => {
  const { data } = await axios.post(
    SEND_NEWSLETTER_SIGNUP_EMAIL_USER_URL,
    formData
  );
  return data;
};

export const sendPasswordResetEmail = async (
  formData: ISendPasswordResetEmail
): Promise<SendEmailResponse> => {
  const { data } = await axios.post(
    SEND_PASSWORD_RESET_EMAIL_USER_URL,
    formData
  );
  return data;
};

export const sendContactFormEmail = async (
  formData: ISendContactFormEmail
): Promise<SendEmailResponse> => {
  const { data } = await axios.post(SEND_CONTACT_FORM_EMAIL_URL, formData);
  return data;
};

export const sendFAQFormEmail = async (
  formData: ISendFAQFormEmail
): Promise<SendEmailResponse> => {
  const { data } = await axios.post(SEND_FAQ_FORM_EMAIL_URL, formData);
  return data;
};
