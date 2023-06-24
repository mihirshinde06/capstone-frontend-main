import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { sendContactFormEmail } from "../../api/emails/emails";
import contactPageImg from "../../assets/images/contactpage.svg";

const ContactForm = () => {
  const defaultFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [contactFormData, setContactFormData] = useState(defaultFormValues);

  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactFormData({
      ...contactFormData,
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
      await sendContactFormEmail({
        ...contactFormData,
      });
      setContactFormData(defaultFormValues);
      enqueueSnackbar(
        "Your message has been sent successfully. Thank you for contacting us!",
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

  const matchesTablets = useMediaQuery("(max-width:1024px)");

  return (
    <Grid
      container
      padding={matchesTablets ? "2rem 5rem 5rem" : "2rem 15rem 5rem"}
    >
      <Grid item sm={6} paddingRight="1rem">
        <Typography
          sx={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#151875",
            marginBottom: "2rem",
          }}
        >
          Get In Touch
        </Typography>
        <Typography sx={{ color: "#8A8FB9", marginBottom: "1rem" }}>
          Hello, You can contact us by filling the information below incase of
          any problem.
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="name"
          value={contactFormData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="email"
          value={contactFormData.email}
          onChange={handleChange}
        />
        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="subject"
          value={contactFormData.subject}
          onChange={handleChange}
        />
        <TextField
          label="Type your message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "2rem" }}
          name="message"
          value={contactFormData.message}
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
      <Grid item sm={6}>
        <img
          src={contactPageImg}
          alt="contact-page-img"
          style={{
            width: matchesTablets ? "26rem" : "32.5rem",
            padding: "4rem 0",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ContactForm;
