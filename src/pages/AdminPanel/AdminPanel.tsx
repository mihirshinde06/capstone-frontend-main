import { Box, useMediaQuery } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import useRole from "../../hooks/useRole";
import { Navigate } from "react-router-dom";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import {
  useGetAllProductsAdminQuery,
  useGetAppointmentsHistoryAdminQuery,
  useGetOrderHistoryAdminQuery,
} from "../../react-query/queries/admin/admin";
import Loader from "../../components/Loader/Loader";
import OrderHistory from "./OrderHistory/OrderHistory";
import Appointments from "./Appointments/Appointments";
import Products from "./Products/Products";

const AdminPanel = () => {
  const { token } = useIsUserLoggedIn();

  const matches = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  const { isLoading: isOrderHistoryLoading, data: orderHistoryData } =
    useGetOrderHistoryAdminQuery(token || "", true);
  const {
    isLoading: isAppointmentsHistoryLoading,
    data: appointmentsHistoryData,
  } = useGetAppointmentsHistoryAdminQuery(token || "", true);
  const { isLoading: isProductsLoading, data: productsData } =
    useGetAllProductsAdminQuery(token || "");

  const { role } = useRole();

  if (role !== "ADMINISTRATOR") {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title={"Admin Panel"} />;
      <Box padding={matches || matchesTablets ? "2rem 5rem" : "2rem 15rem"}>
        {isOrderHistoryLoading ||
        isAppointmentsHistoryLoading ||
        isProductsLoading ? (
          <Loader />
        ) : (
          <>
            <OrderHistory orderHistoryData={orderHistoryData} />
            <Appointments appointmentsHistoryData={appointmentsHistoryData} />
            <Products products={productsData} />
          </>
        )}
      </Box>
    </>
  );
};

export default AdminPanel;
