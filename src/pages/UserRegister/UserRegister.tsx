import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Brands from "../Home/Brands/Brands";
import PageHeader from "../../components/PageHeader/PageHeader";
import { registerUser } from "../../api/authentication/authentication";
import Loader from "../../components/Loader/Loader";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";

const UserRegister = () => {
  const defaultFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [registerFormData, setRegisterFormData] = useState(defaultFormValues);
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useIsUserLoggedIn();

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRegisterFormData({
      ...registerFormData,
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
      const response = await registerUser(registerFormData);
      localStorage.setItem("token", response.token);
      setRegisterFormData(defaultFormValues);
      navigate(-1);
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

  const matches = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  if (isLoggedIn === "true") {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title="Create an account" />
      <Box
        sx={{
          width: matchesTablets || matches ? "40%" : "28%",
          margin: " 5rem auto",
          padding: "2rem",
          boxShadow: "0 0 1.563rem 0.625rem #F8F8FB",
        }}
      >
        <Typography
          fontSize={"2rem"}
          fontWeight={"700"}
          sx={{ marginTop: "1rem", textAlign: "center" }}
        >
          Register
        </Typography>
        <Typography
          sx={{ color: "#9096B2", marginBottom: "1rem", textAlign: "center" }}
        >
          Please register by filling in the details given below
        </Typography>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
          value={registerFormData.firstName}
          name="firstName"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
          value={registerFormData.lastName}
          name="lastName"
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
          value={registerFormData.email}
          name="email"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
          value={registerFormData.password}
          name="password"
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
            Register
          </Button>
        )}
        <Link to="/login">
          <Typography
            sx={{ color: "#9096B2", marginBottom: "1rem", textAlign: "center" }}
          >
            Already have an account? Login
          </Typography>
        </Link>
      </Box>
      <Brands />
    </>
  );
};

export default UserRegister;
