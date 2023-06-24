import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { updatePassword } from "../../api/authentication/authentication";
import Loader from "../../components/Loader/Loader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";

const ResetPassword = () => {
  const defaultFormValues = {
    password1: "",
    password2: "",
  };

  const { token } = useParams();

  const [resetPasswordFormData, setResetPasswordFormData] =
    useState(defaultFormValues);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const { isLoggedIn } = useIsUserLoggedIn();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setResetPasswordFormData({
      ...resetPasswordFormData,
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
      if (resetPasswordFormData.password1 !== resetPasswordFormData.password2) {
        enqueueSnackbar("Passwords do not match. Please try again.", {
          variant: "error",
        });
      } else {
        await updatePassword(
          {
            password: resetPasswordFormData.password1,
          },
          token || ""
        );
        setResetPasswordFormData(defaultFormValues);
        navigate("/login");
        enqueueSnackbar("Password changed successfully.", {
          variant: "success",
        });
      }
    } catch (error: any) {
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

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title="Reset your account's password" />
      <Box
        sx={{
          width: matches || matchesTablets ? "40%" : "28%",
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
          Reset Password
        </Typography>
        <Typography
          sx={{ color: "#9096B2", marginBottom: "1rem", textAlign: "center" }}
        >
          Please enter a new password for your account
        </Typography>
        <TextField
          label="New Password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="password1"
          value={resetPasswordFormData.password1}
          onChange={handleChange}
        />
        <TextField
          label="Confirm New Password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="password2"
          value={resetPasswordFormData.password2}
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
            Submit
          </Button>
        )}
      </Box>
    </>
  );
};

export default ResetPassword;
