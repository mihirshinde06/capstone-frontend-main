const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:5000`
    : `https://e-commerce-backend-nx52.onrender.com`;

export const BASE_URL = `${BACKEND_URL}/api/users/`;
export const BASE_URL_WITHOUT_USER = `${BACKEND_URL}/api/`;

export const REGISTER_USER_URL = BASE_URL + "register";
export const LOGIN_USER_URL = BASE_URL + "login";

export const LOGIN_ADMIN_URL = BASE_URL_WITHOUT_USER + "administrator/login";

export const GET_ALL_PRODUCTS_URL = BASE_URL + "products/all";
export const GET_ALL_PRODUCTS_BY_CATEGORY_URL = BASE_URL + "products/category/";
export const GET_PRODUCT_BY_ID_URL = BASE_URL + "products/product/";

export const PLACE_AN_ORDER_URL = BASE_URL + "orders";
export const CANCEL_AN_ORDER_URL = BASE_URL + "orders";

export const CANCEL_AN_ORDER_ADMIN_URL =
  BASE_URL_WITHOUT_USER + "administrator/orders/cancel";
export const COMPLETE_AN_ORDER_ADMIN_URL =
  BASE_URL_WITHOUT_USER + "administrator/orders/complete";

export const SEND_NEWSLETTER_SIGNUP_EMAIL_USER_URL =
  BASE_URL_WITHOUT_USER + "emails/newsletter-signup";
export const SEND_PASSWORD_RESET_EMAIL_USER_URL =
  BASE_URL_WITHOUT_USER + "emails/reset-password/user";
export const UPDATE_PASSWORD_URL =
  BASE_URL_WITHOUT_USER + "emails/update-password/user";
export const SEND_CONTACT_FORM_EMAIL_URL =
  BASE_URL_WITHOUT_USER + "emails/contact-form";
export const SEND_FAQ_FORM_EMAIL_URL =
  BASE_URL_WITHOUT_USER + "emails/faq-form";

export const GET_USER_DETAILS_URL = BASE_URL + "profile";
export const EDIT_PERSONAL_DETAILS_URL = BASE_URL + "edit";

export const GET_ORDER_HISTORY_URL = BASE_URL + "orders/all";
export const GET_ORDER_BY_ID_URL = BASE_URL + "orders";

export const GET_ORDER_HISTORY_ADMIN_URL =
  BASE_URL_WITHOUT_USER + "administrator/orders/all";
export const GET_ORDER_BY_ID_ADMIN_URL =
  BASE_URL_WITHOUT_USER + "administrator/orders";

export const BOOK_APPOINTMENT_URL = BASE_URL + "appointments";
export const GET_ALL_APPOINTMENTS_URL = BASE_URL + "appointments/all";
export const CANCEL_APPOINTMENT_URL = BASE_URL + "appointments";
