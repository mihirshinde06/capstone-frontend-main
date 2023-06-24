import { GetUserDetailsResponse } from "../../../react-query/queries/user/types";

export interface IPersonalDetailsProps {
  refetch: any;
  userDetailsData?: GetUserDetailsResponse;
}
