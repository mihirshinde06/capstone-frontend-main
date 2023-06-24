import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "../../api/emails/emails";
import { IForgotPasswordDialogProps } from "./types";

const ForgotPasswordDialog = ({
  open,
  handleClose,
}: IForgotPasswordDialogProps) => {
  const [emailId, setEmailId] = useState("");

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail({ emailId });
      setEmailId("");
      enqueueSnackbar("Password reset email send successfully!", {
        variant: "success",
      });
      handleClose();
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

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ padding: "1rem" }}>
        <DialogTitle>Forgot password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address to get the password reset link.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
            disabled={loading}
          >
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
            disabled={loading}
          >
            Submit
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
