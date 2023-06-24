import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import trendingProduct from "../../../assets/images/trending-product.svg";
import { formatPrice } from "../../../utils/utils";

const TrendingProduct = () => {
  const matches = useMediaQuery("(max-width:1280px)");

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={"center"}
      sx={{ background: "#F1F0FF" }}
    >
      <Grid item sm={4}>
        <img
          src={trendingProduct}
          alt="trending-product"
          style={{ width: matches ? "99%" : "100%" }}
        />
      </Grid>
      <Grid item sm={8}>
        <Typography
          sx={{ color: "#1A0B5B" }}
          fontSize={matches ? 31 : 42}
          fontWeight={700}
          mb={3}
        >
          Unique Features Of latest & Trending Products
        </Typography>
        <ul>
          <li style={{ color: "#F52B70", fontSize: "2rem" }}>
            <Typography sx={{ color: "#32465F " }} mb={1}>
              All frames constructed with hardwood solids and laminates
            </Typography>
          </li>
          <li style={{ color: "#2B2BF5", fontSize: "2rem" }}>
            <Typography sx={{ color: "#32465F " }} mb={1}>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </Typography>
          </li>
          <li style={{ color: "#2BF5CC", fontSize: "2rem" }}>
            <Typography sx={{ color: "#32465F " }}>
              Arms, backs and seats are structurally reinforced
            </Typography>
          </li>
        </ul>
        <Typography
          sx={{ color: "#1A0B5B" }}
          fontSize={14}
          fontWeight={500}
          mt={4}
        >
          B&B Italian Sofa
        </Typography>
        <Typography sx={{ color: "#1A0B5B" }} fontSize={14}>
          {formatPrice("49999")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TrendingProduct;
