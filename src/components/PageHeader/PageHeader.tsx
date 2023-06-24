import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

interface IPageHeader {
  title: string;
}

const PageHeader = ({ title }: IPageHeader) => {
  const matches = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  return (
    <Box sx={{ backgroundColor: "#F6F5FF" }} lineHeight="1rem">
      <Typography
        sx={{
          padding:
            matchesTablets || matches
              ? "5rem 5rem 1rem 5rem"
              : "5rem 15rem 1rem 15rem",
          fontSize: "2.25rem",
          fontWeight: "700",
          color: "#101750 ",
        }}
      >
        {title}
      </Typography>
      <Grid
        container
        sx={{
          padding:
            matchesTablets || matches
              ? "0 5rem 5rem 5rem"
              : "0 15rem 5rem 15rem",
        }}
      >
        <Grid item>
          <Link to="/">
            <Typography sx={{ marginRight: "0.5rem" }}>Home</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#FB2E86" }}>{title}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default PageHeader;
