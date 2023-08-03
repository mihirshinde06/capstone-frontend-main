import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/images/facebook-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";
import twitterIcon from "../../assets/images/twitter-icon.svg";
import { sendNewsletterSignupEmail } from "../../api/emails/emails";
import { useSnackbar } from "notistack";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";

const Footer = () => {
  const { isLoggedIn } = useIsUserLoggedIn();

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
      await sendNewsletterSignupEmail({ emailId });
      setEmailId("");
      enqueueSnackbar("Thank you for subscribing to our newsletter!", {
        variant: "success",
      });
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

  return (
    <>
      <Grid
        container
        sx={{
          padding: matchesTablets || matches ? "5rem" : "5rem 15rem",
          background: "#EEEFFB",
        }}
        gap={12}
      >
        <Grid item>
          <Typography fontSize={38} fontWeight={700}>
            comfy decor
          </Typography>
          <TextField
            label="Email address"
            variant="outlined"
            sx={{
              margin: "2rem 0",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0",
              },
            }}
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#fb2e86",
              ":hover": { background: "#fb2e86", boxShadow: "none" },
              boxShadow: "none",
              padding: ".5rem 2rem",
              marginTop: "2rem",
              height: "3.5rem",
            }}
            disabled={loading}
            onClick={handleSubmit}
          >
            Sign up
          </Button>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Contact Info
          </Typography>
          <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
            Shinde Towers, 803, Pune, India
          </Typography>
        </Grid>
        <Grid item>
          <Typography mb={3}>Categories</Typography>
          <Link to="/products">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Kitchen
            </Typography>
          </Link>
          <Link to="/products">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Bedroom
            </Typography>
          </Link>
          <Link to="/products">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Living Room
            </Typography>
          </Link>
          <Link to="/products">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Office
            </Typography>
          </Link>
          <Link to="/products">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Bathroom
            </Typography>
          </Link>
          <Link to="/products">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Outdoor
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography mb={3}>Customer Care</Typography>
          <Link to="/my-account">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              My Account
            </Typography>
          </Link>
          <Link to="/faq">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              FAQ
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography mb={3}>Pages</Typography>
          <Link to="/products">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Browse the Shop
            </Typography>
          </Link>

          {isLoggedIn === "true" ? null : (
            <>
              <Link to="/register">
                <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
                  Create an account
                </Typography>
              </Link>
              <Link to="/login">
                <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
                  Login
                </Typography>
              </Link>
              <Link to="/admin-login">
                <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
                  Admin panel
                </Typography>
              </Link>
            </>
          )}

          <Link to="/contact">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              Contact
            </Typography>
          </Link>
          <Link to="/about-us">
            <Typography sx={{ color: "#8A8FB9", lineHeight: "2rem" }}>
              About Us
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: "#E7E4F8",
          padding: matchesTablets || matches ? ".5rem 5rem" : ".5rem 15rem",
        }}
        alignItems="center"
      >
        <Grid item sm>
          <Typography
            sx={{ color: "#8A8FB9", lineHeight: "2rem" }}
            fontSize={14}
          >
            ©comfy decor - All Rights Reserved
          </Typography>
        </Grid>
        <Grid item>
          <Grid container gap={1} alignItems="center">
            <Grid item>
              <Link to="#">
                <img src={facebookIcon} alt="facebook" />
              </Link>
            </Grid>
            <Grid item>
              <Link to="#">
                <img src={instagramIcon} alt="instagram" />
              </Link>
            </Grid>
            <Grid item>
              <Link to="#">
                <img src={twitterIcon} alt="twitter" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
