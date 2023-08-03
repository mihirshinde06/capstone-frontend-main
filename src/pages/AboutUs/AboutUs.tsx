import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import furnitureImg from "../../assets/images/history.jpg";
import truckIcon from "../../assets/images/truck-icon.svg";
import cashbackIcon from "../../assets/images/cashback-icon.svg";
import qualityIcon from "../../assets/images/quality-icon.svg";
import supportIcon from "../../assets/images/support-icon.svg";
import Offer from "../Home/WhatComfyDecorOffers/Offer";
import clientImg1 from "../../assets/images/clientImg1.svg";
import clientImg3 from "../../assets/images/clientImg3.svg";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));

  const matchesSmallLaptops = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  return (
    <>
      <PageHeader title={"About us"} />;
      <Grid container padding={matches ? "5rem 10rem" : "5rem 15rem"}>
        <Grid item sm={6}>
          <img
            src={furnitureImg}
            alt="furnitureImg"
            style={{
              width: matchesTablets
                ? "20rem"
                : matchesSmallLaptops
                ? "25rem"
                : "30rem",
            }}
          />
        </Grid>
        <Grid item sm={6}>
          <Typography
            sx={{ color: "#151875", fontSize: "2.25rem", fontWeight: "700" }}
          >
            Know About Our Ecommerce
          </Typography>
          <Typography
            sx={{ color: "#151875", fontSize: "2.25rem", fontWeight: "700" }}
          >
            Business, History
          </Typography>
          <Typography sx={{ color: "#8A8FB9" }}>
            Our shop was setup in 1930 in Pune way before the world war 2
            started. Most of the furtuiner in the concentration camp were made
            by us and are still in museum in india.
          </Typography>
          <Link to="/contact">
            <Button
              variant="contained"
              sx={{
                borderRadius: "0",
                textTransform: "none",
                background: "#fb2e86",
                ":hover": { background: "#fb2e86", boxShadow: "none" },
                boxShadow: "none",
                padding: ".5rem 1rem",
                margin: "1rem 0",
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Box textAlign="center">
        <Typography sx={{ fontSize: "2.6rem", fontWeight: "700" }}>
          Our Features
        </Typography>
      </Box>
      <Grid
        container
        sx={{ padding: "3rem 0" }}
        gap={5}
        justifyContent="center"
        textAlign="center"
        mb={6}
      >
        <Grid item>
          <Offer
            icon={truckIcon}
            title="Free Delivery"
            subtitle="Free Delivey in India"
          />
        </Grid>
        <Grid item>
          <Offer
            icon={cashbackIcon}
            title="Cash on delivery"
            subtitle="Cash on delivery as the payment method available without adintional charges."
          />
        </Grid>
        <Grid item>
          <Offer
            icon={qualityIcon}
            title="Best in class wood"
            subtitle="We use worlds best quality of the wood for making our products."
          />
        </Grid>
        <Grid item>
          <Offer
            icon={supportIcon}
            title="24/7 Support"
            subtitle="We are always there to help you."
          />
        </Grid>
      </Grid>
      <Box textAlign={"center"} sx={{ backgroundColor: "#FBFBFF" }}>
        <Typography sx={{ fontSize: "2.625rem", fontWeight: "500" }} mb={4}>
          Our Client Story!
        </Typography>
        <Grid container justifyContent={"center"}>
          <Grid item padding={"0.3rem"}>
            <img
              src={clientImg1}
              alt="clientImg1"
              width={"60rem"}
              height={"60rem"}
              style={{ borderRadius: ".3rem" }}
            />
          </Grid>
          <Grid item padding={"0 0.7rem 2rem"}>
            <img
              src={clientImg3}
              alt="clientImg2"
              width={"60rem"}
              height={"60rem"}
              style={{ borderRadius: ".3rem" }}
            />
          </Grid>
          <Grid item padding={"0.3rem"}>
            <img
              src={clientImg3}
              alt="clientImg3"
              width={"60rem"}
              height={"60rem"}
              style={{ borderRadius: ".3rem" }}
            />
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: "1.375rem" }}>Selina Gomez</Typography>
        <Typography sx={{ color: "#8A8FB9", fontSize: "0.625rem" }}>
          Ceo At Webecy Digital
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            color: "#8A8FB9",
            fontSize: "1rem",
            maxWidth: "40%",
            margin: "2rem auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </Typography>
        <Grid container justifyContent="center" gap={1} mb={4}>
          <Grid item>
            <Box
              sx={{
                borderRadius: ".15rem",
                height: ".25rem",
                width: "1.25rem",
                background: "#FF75B0",
              }}
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                borderRadius: ".15rem",
                height: ".25rem",
                width: "2.5rem",
                background: "#FB2E86",
              }}
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                borderRadius: ".15rem",
                height: ".25rem",
                width: "1.25rem",
                background: "#FF75B0",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;
