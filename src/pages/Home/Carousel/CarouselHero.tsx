import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, Button, useMediaQuery, Grid } from "@mui/material";
import banner1 from "../../../assets/images/hero-banner-1.jpg";
import banner2 from "../../../assets/images/hero-banner-2.jpg";
import banner3 from "../../../assets/images/hero-banner-3.jpg";
import { heroImageStyles } from "./styled";
import { Link } from "react-router-dom";

const CarouselHero = () => {
  const matches = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  return (
    <Carousel showStatus={false} showArrows={false} autoPlay infiniteLoop>
      <Box
        // mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner1})`,
        }}
      >
        <Grid container>
          <Grid item xs={2} sm={2} md={2}></Grid>
          {/* <Grid item xs={8} sm={10}> */}
          <Grid
            item
            xs={10}
            sm={10}
            md={10}
            sx={{
              marginTop: "5rem",
              padding: matchesTablets ? "9rem 35rem 0 5rem" : "0",
              textAlign: "start",
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={16}
              sx={{ color: "#fb2e86" }}
              mb={2}
            >
              Best Furniture For Your Castle....
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={matches ? 40 : 53}
              sx={{ color: "black" }}
            >
              New Furniture Collection
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={matches ? 40 : 53}
              sx={{ color: "black" }}
              mb={2}
            >
              Trends in 2022
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={16}
              sx={{ margin: "0 0 2rem", color: "#8A8FB9" }}
            >
              A place to relax and read books
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
          </Grid>
          {/* </Grid> */}
        </Grid>
        {/* <Box
          sx={{
            padding: matchesTablets
              ? "9rem 35rem 0 5rem"
              : "9rem 50rem 0 10rem",
            textAlign: "start",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ color: "#fb2e86" }}
            mb={2}
          >
            Best Furniture For Your Castle....
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={matches ? 40 : 53}
            sx={{ color: "black" }}
          >
            New Furniture Collection
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={matches ? 40 : 53}
            sx={{ color: "black" }}
            mb={2}
          >
            Trends in 2022
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ margin: "0 0 2rem", color: "#8A8FB9" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
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
        </Box> */}
      </Box>
      <Box
        mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner2})`,
        }}
      >
        <Grid container sx={{ padding: matches ? "0" : "0" }}>
          <Grid item xs={6} sm={6} md={6}></Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            textAlign={"end"}
            sx={{ marginTop: "3rem", paddingRight: "15rem" }}
          >
            <Typography
              fontWeight={700}
              fontSize={16}
              sx={{ color: "#fb2e86" }}
              mb={2}
            >
              Best Furniture For Your Castle....
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={matches ? 40 : 53}
              sx={{ color: "black" }}
            >
              New Furniture Collection
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={matches ? 40 : 53}
              sx={{ color: "black" }}
              mb={2}
            >
              Trends in 2022
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={16}
              sx={{ margin: "0 0 2rem", color: "black" }}
            >
              Organize your livingroom with the elegant collection of cupboards
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
          </Grid>
        </Grid>
      </Box>
      <Box
        mb={5}
        sx={{
          ...heroImageStyles,
          backgroundImage: `url(${banner3})`,
        }}
      >
        <Box sx={{ padding: "8rem 0 0 0" }}>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ color: "#fb2e86" }}
            mb={2}
          >
            Best Furniture For Your Castle....
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={matches ? 40 : 53}
            sx={{ color: "black" }}
          >
            New Furniture Collection
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={matches ? 40 : 53}
            sx={{ color: "black" }}
            mb={2}
          >
            Trends in 2022
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={16}
            sx={{ margin: "0 0 2rem", color: "black" }}
          >
            We have provided you the best of the office furniture to get the
            feel of relaxation but work at the same time.
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
    </Carousel>
  );
};

export default CarouselHero;
