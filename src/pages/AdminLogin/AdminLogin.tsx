import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import Loader from "../../components/Loader/Loader";
import PageHeader from "../../components/PageHeader/PageHeader";
import Brands from "../Home/Brands/Brands";
import { Navigate, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useState } from "react";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import { loginAdmin } from "../../api/authentication/authentication";

const AdminLogin = () => {
  const defaultFormValues = {
    email: "",
    password: "",
  };

  const [loginFormData, setLoginFormData] = useState(defaultFormValues);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const { isLoggedIn } = useIsUserLoggedIn();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await loginAdmin(loginFormData);
      localStorage.setItem("token", response.token);
      setLoginFormData(defaultFormValues);
      navigate("/admin-panel");
    } catch (error: any) {
      localStorage.removeItem("token");
      enqueueSnackbar(
        error?.response?.data?.msg ||
          error?.response?.data?.errors[0]?.msg ||
          "An error occurred. Please try again.",
        {
          variant: "error",
        }
      );
    }
    setLoading(false);
  };

  const matchesTablets = useMediaQuery("(max-width:1024px)");

  if (isLoggedIn === "true") {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title="Log in to your account" />
      <Box
        sx={{
          width: matchesTablets ? "40%" : "28%",
          margin: "5rem auto",
          padding: "2rem",
          boxShadow: "0 0 1.563rem 0.625rem #F8F8FB",
        }}
      >
        <Typography
          fontSize={"2rem"}
          fontWeight={"700"}
          sx={{ marginTop: "1rem", textAlign: "center" }}
        >
          Admin Login
        </Typography>
        <Typography
          sx={{ color: "#9096B2", marginBottom: "1rem", textAlign: "center" }}
        >
          Please login using your account details
        </Typography>
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="email"
          value={loginFormData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="password"
          value={loginFormData.password}
          onChange={handleChange}
          type="password"
        />
        {loading ? (
          <Loader />
        ) : (
          <Button
            variant="contained"
            fullWidth
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        )}
      </Box>
      <Brands />
    </>
  );
};

export default AdminLogin;
