import { Box, useMediaQuery } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import useRole from "../../hooks/useRole";
import { Navigate } from "react-router-dom";

const AdminPanel = () => {
  const matches = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  const { role } = useRole();

  if (role !== "ADMINISTRATOR") {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title={"Admin Panel"} />;
      <Box
        padding={matches || matchesTablets ? "2rem 5rem" : "2rem 15rem"}
      ></Box>
    </>
  );
};

export default AdminPanel;
