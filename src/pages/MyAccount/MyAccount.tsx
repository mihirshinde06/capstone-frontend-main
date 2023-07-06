import { Box, useMediaQuery } from "@mui/material";
import Loader from "../../components/Loader/Loader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import {
  useGetAppointmentsHistoryQuery,
  useGetOrderHistoryQuery,
  useGetUserDetailsQuery,
} from "../../react-query/queries/user/user";
import OrderHistory from "./OrderHistory/OrderHistory";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import Appointments from "./Appointments/Appointments";
import { Navigate } from "react-router-dom";
import useRole from "../../hooks/useRole";

const MyAccount = () => {
  const { token } = useIsUserLoggedIn();

  const {
    isLoading: isUserDetailsLoading,
    data: userDetailsData,
    refetch: refetchUserDetails,
  } = useGetUserDetailsQuery(token || "");
  const { isLoading: isOrderHistoryLoading, data: orderHistoryData } =
    useGetOrderHistoryQuery(token || "", true);
  const {
    isLoading: isAppointmentsHistoryLoading,
    data: appointmentsHistoryData,
  } = useGetAppointmentsHistoryQuery(token || "", true);

  const matches = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  const { role } = useRole();

  if (role !== "USER") {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title={"My Account"} />;
      <Box padding={matches || matchesTablets ? "2rem 5rem" : "2rem 15rem"}>
        {isUserDetailsLoading ||
        isOrderHistoryLoading ||
        isAppointmentsHistoryLoading ? (
          <Loader />
        ) : (
          <>
            <PersonalDetails
              userDetailsData={userDetailsData}
              refetch={refetchUserDetails}
            />
            <OrderHistory orderHistoryData={orderHistoryData} />
            <Appointments appointmentsHistoryData={appointmentsHistoryData} />
          </>
        )}
      </Box>
    </>
  );
};

export default MyAccount;
