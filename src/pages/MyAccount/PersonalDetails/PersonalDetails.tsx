import { Typography, Box, Grid, Button, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import useIsUserLoggedIn from "../../../hooks/useIsUserLoggedIn";
import { useEditPersonalDetailsMutation } from "../../../react-query/mutations/user/user";
import { IPersonalDetailsProps } from "./types";

const PersonalDetails = ({
  userDetailsData,
  refetch,
}: IPersonalDetailsProps) => {
  const { token } = useIsUserLoggedIn();

  const [isEdit, setIsEdit] = useState(false);

  const [personalDetails, setPersonalDetails] = useState({
    firstName: userDetailsData?.firstName || "-",
    lastName: userDetailsData?.lastName || "-",
  });

  const editPersonalDetails = useEditPersonalDetailsMutation(
    userDetailsData?._id || "",
    token || ""
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleChangeFormData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPersonalDetails({
      ...personalDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    editPersonalDetails.mutate(
      { ...personalDetails },
      {
        onSuccess: (data) => {
          enqueueSnackbar("Personal details updated successfully.", {
            variant: "success",
          });
          setIsEdit(false);
          refetch();
        },
        onError: (error: any) => {
          enqueueSnackbar(
            error?.response?.data?.msg ||
              error?.response?.data?.errors[0]?.msg ||
              "An error occurred. Please try again.",
            {
              variant: "error",
            }
          );
        },
      }
    );
  };

  return (
    <Box mb={8}>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#151875",
          marginBottom: "2rem",
        }}
      >
        Personal Details
      </Typography>
      <Box
        sx={{
          borderRadius: ".188rem",
          background: "#F4F4FC",
          padding: "1.5rem 2rem",
        }}
      >
        <Grid container sx={{ color: "#1D3178" }} spacing="1rem">
          <Grid item sm>
            <Typography fontWeight={700} mb={1}>
              First Name
            </Typography>
            {isEdit ? (
              <TextField
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "1rem" }}
                value={personalDetails.firstName}
                onChange={handleChangeFormData}
                name="firstName"
              />
            ) : (
              <Typography>{userDetailsData?.firstName || "-"}</Typography>
            )}
          </Grid>
          <Grid item sm>
            <Typography fontWeight={700} mb={1}>
              Last Name
            </Typography>
            {isEdit ? (
              <TextField
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "1rem" }}
                value={personalDetails.lastName}
                onChange={handleChangeFormData}
                name="lastName"
              />
            ) : (
              <Typography>{userDetailsData?.lastName || "-"}</Typography>
            )}
          </Grid>
          <Grid item sm>
            <Typography fontWeight={700} mb={1}>
              Email
            </Typography>
            <Typography>{userDetailsData?.email || "-"}</Typography>
          </Grid>
          <Grid item>
            {isEdit ? (
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "0",
                    textTransform: "none",
                    background: "#19D16F",
                    ":hover": { background: "#19D16F" },
                    padding: "0.7rem",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                  }}
                  onClick={handleSave}
                  disabled={editPersonalDetails.isLoading}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "0",
                    textTransform: "none",
                    background: "#FF1788",
                    ":hover": { background: "#FF1788" },
                    padding: "0.7rem",
                    marginBottom: "1rem",
                  }}
                  onClick={() => setIsEdit(false)}
                  disabled={editPersonalDetails.isLoading}
                >
                  Cancel
                </Button>
              </Box>
            ) : (
              <Button
                variant="contained"
                sx={{
                  borderRadius: "0",
                  textTransform: "none",
                  background: "#FF1788",
                  ":hover": { background: "#FF1788" },
                  padding: "0.7rem",
                  marginBottom: "1rem",
                }}
                onClick={() => setIsEdit(true)}
              >
                Edit
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PersonalDetails;
