import React from "react";
import { Box, Typography, Button } from "@mui/material";
import newsletterBg from "../../../assets/images/newsletter-bg.svg";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <Box
      mt={10}
      mb={5}
      sx={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "20rem",
        width: "100%",
        backgroundImage: `url(${newsletterBg})`,
      }}
    >
      <Box sx={{ textAlign: "center", paddingTop: "4.5rem" }}>
        <Typography sx={{ color: "#1A0B5B" }} fontSize={42} fontWeight={700}>
          Get Latest Updates By Subscribing To
        </Typography>
        <Typography
          sx={{ color: "#1A0B5B" }}
          fontSize={42}
          fontWeight={700}
          mb={3}
        >
          0ur Newsletter
        </Typography>
        <Link to="/products">
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#fb2e86",
              ":hover": { background: "#fb2e86", boxShadow: "none" },
              boxShadow: "none",
              padding: ".5rem 2rem",
            }}
          >
            Shop Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Newsletter;
