import { Box } from "@mui/material";
import React from "react";
import Categories from "./Categories";
import Price from "./Price";
import Rating from "./Rating";

const Filters = () => {
  return (
    <>
      <Categories />
      <Box mb={7} />
      <Price />
      <Box mb={7} />
      <Rating />
    </>
  );
};

export default Filters;
