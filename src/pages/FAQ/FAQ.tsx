import { Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import Brands from "../Home/Brands/Brands";
import PageHeader from "../../components/PageHeader/PageHeader";
import FAQForm from "./FAQForm";

const FAQ = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
      <PageHeader title={"FAQ"} />;
      <Grid
        container
        padding={matches ? "2rem 5rem" : "2rem 15rem"}
        justifyContent={"center"}
      >
        <Grid item sm={6}>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "2.25rem",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
          >
            General Information
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "1.063rem",
              fontWeight: "500",
              padding: "1rem 0",
            }}
          >
            How long does it take for the products to be made and deliver?
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "#A1ABCC", lineHeight: "1.875rem" }}
          >
            Production and delivery time varies depending on the item(s) ordered
            and the location. We always aim to deliver within 4 weeks from the
            date of the order.
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "1.063rem",
              fontWeight: "500",
              padding: "1rem 0",
            }}
          >
            My items haven't arrived yet. What can I do?
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "#A1ABCC", lineHeight: "1.875rem" }}
          >
            Please allow up to 4 weeks from the day you received the order
            confirmation. For any additional concern, please do not hesitate to
            email us at comfy.decor@gmail.com
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "1.063rem",
              fontWeight: "500",
              padding: "1rem 0",
            }}
          >
            How long is your warranty?
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "#A1ABCC", lineHeight: "1.875rem" }}
          >
            All products are backed by a three year warranty.
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "1.063rem",
              fontWeight: "500",
              padding: "1rem 0",
            }}
          >
            Are your prices in Indian Rupees (₹)?
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "#A1ABCC", lineHeight: "1.875rem" }}
          >
            All prices are in India Rupees (₹).
          </Typography>
        </Grid>
        <FAQForm />
      </Grid>
      <Brands />
    </>
  );
};

export default FAQ;
