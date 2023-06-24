import axios from "axios";
import { useMutation } from "react-query";
import { EDIT_PERSONAL_DETAILS_URL } from "../../../utils/paths/paths";
import { GetUserDetailsResponse } from "../../queries/user/types";
import { EditPersonalDetailsPayload } from "./types";

export const useEditPersonalDetailsMutation = (
  userId: String,
  token: string
) => {
  return useMutation(async (formData: EditPersonalDetailsPayload) => {
    const { data } = await axios.patch<GetUserDetailsResponse>(
      `${EDIT_PERSONAL_DETAILS_URL}/${userId}`,
      formData,
      {
        headers: { "auth-token": token },
      }
    );
    return data;
  });
};
