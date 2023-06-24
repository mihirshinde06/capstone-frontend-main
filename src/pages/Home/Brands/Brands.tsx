import React from "react";
import { Box } from "@mui/material";
import brands from "../../../assets/images/brands.svg";

const Brands = () => {
  return (
    <Box sx={{ textAlign: "center" }} mt={10} mb={10}>
      <img src={brands} alt="brands" />
    </Box>
  );
};

export default Brands;
