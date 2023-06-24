import React from "react";
import { Box, Typography, Button } from "@mui/material";
import pageNotFoundErrorImg from "../../assets/images/404page.svg";
import Brands from "../Home/Brands/Brands";
import PageHeader from "../../components/PageHeader/PageHeader";

const NotFound = () => {
  return (
    <>
      <PageHeader title={"404 Not Found"} />;
      <Box textAlign={"center"}>
        <img
          src={pageNotFoundErrorImg}
          alt="404-error-img"
          style={{ width: "40rem" }}
        />
        <Typography
          sx={{ color: "#152970", fontSize: "1.5rem", fontWeight: "500" }}
        >
          oops! The page you requested was not found!
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#fb2e86",
            ":hover": { background: "#fb2e86", boxShadow: "none" },
            boxShadow: "none",
            padding: ".5rem 1rem",
            margin: "2rem 0",
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Brands />
    </>
  );
};

export default NotFound;
