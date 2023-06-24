import { Grid, Typography, TextField, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { sendFAQFormEmail } from "../../api/emails/emails";

const FAQForm = () => {
  const defaultFormValues = {
    name: "",
    subject: "",
    message: "",
  };

  const [faqFormData, setFaqFormData] = useState(defaultFormValues);

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFaqFormData({
      ...faqFormData,
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
      await sendFAQFormEmail({
        ...faqFormData,
      });
      setFaqFormData(defaultFormValues);
      enqueueSnackbar(
        "Your query has been sent successfully. Thank you for contacting us!",
        {
          variant: "success",
        }
      );
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
    <Grid item sm={6} sx={{ padding: "2rem", background: "#F8F8FD" }}>
      <Typography
        sx={{
          marginBottom: "2rem",
          textAlign: "center",
          color: "#1D3178",
          fontSize: "2.25rem",
          fontWeight: "500",
        }}
      >
        Ask a Question
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "1rem", background: "#ffffff" }}
        name="name"
        value={faqFormData.name}
        onChange={handleChange}
      />
      <TextField
        label="Subject"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "1rem", background: "#ffffff" }}
        name="subject"
        value={faqFormData.subject}
        onChange={handleChange}
      />
      <TextField
        label="Type your message"
        multiline
        rows={6}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "2rem", background: "#ffffff" }}
        name="message"
        value={faqFormData.message}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{
          borderRadius: "0",
          textTransform: "none",
          background: "#FF1788",
          ":hover": { background: "#FF1788" },
          padding: "0.5rem 2rem",
        }}
        onClick={handleSubmit}
        disabled={loading}
      >
        Send
      </Button>
    </Grid>
  );
};

export default FAQForm;
