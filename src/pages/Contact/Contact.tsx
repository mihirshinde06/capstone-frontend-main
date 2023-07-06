import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "./ContactForm";

const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));

  const matchesTablets = useMediaQuery("(max-width:1024px)");

  return (
    <>
      <PageHeader title={"Contact us"} />;
      <Grid container padding={matchesTablets ? "5rem" : "5rem 15rem"}>
        <Grid item sm={6} pr={12}>
          <Typography
            sx={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "#151875",
              marginBottom: "2rem",
            }}
          >
            Information About Us
          </Typography>
          <Typography sx={{ color: "#8A8FB9" }}>
            We are a home furnishing brand that offers affordable price, stylish
            design and comfort to people. Our vision is to create better
            conditions for everyday life for many people.
          </Typography>
          <Grid container mt={5}>
            <Grid item>
              <Box
                sx={{
                  height: "1.563rem",
                  width: "1.563rem",
                  background: "#5726DF",
                  borderRadius: "50%",
                  marginRight: ".7rem",
                }}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: "1.563rem",
                  width: "1.563rem",
                  background: "#FB2E86",
                  borderRadius: "50%",
                  marginRight: ".7rem",
                }}
              />
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: "1.563rem",
                  width: "1.563rem",
                  background: "#37DAF3",
                  borderRadius: "50%",
                  marginRight: ".7rem",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Typography
            sx={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "#151875",
              marginBottom: "2rem",
            }}
          >
            Contact Way
          </Typography>
          <Grid container marginBottom={matches ? 3 : "1rem"}>
            <Grid
              item
              sx={{ color: "#8A8FB9" }}
              md={12}
              sm={6}
              mb={matches ? 3 : 0}
            >
              <Grid container>
                <Grid item sm="auto">
                  <Box
                    sx={{
                      height: "2.813rem",
                      width: "2.813rem",
                      background: "#5726DF",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                </Grid>
                <Grid item>
                  <a href="tel:+48786983989">
                    <Typography>(+48)786983989</Typography>
                  </a>
                  <a href="mailto:comfy.decor@gmail.com">
                    <Typography>comfy.decor@gmail.com</Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ color: "#8A8FB9" }} md={12} sm={6}>
              <Grid container>
                <Grid item></Grid>
                <Box
                  sx={{
                    height: "2.813rem",
                    width: "2.813rem",
                    background: "#FB2E86",
                    borderRadius: "50%",
                    marginRight: "1rem",
                  }}
                />
                <Grid item>
                  <Typography>Support Form</Typography>
                  <Typography>For over 24hr</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container mt={matches ? 0 : 6}>
            <Grid
              item
              sx={{ color: "#8A8FB9" }}
              md={12}
              sm={6}
              mb={matches ? 3 : 0}
            >
              <Grid container>
                <Grid item>
                  <Box
                    sx={{
                      height: "2.813rem",
                      width: "2.813rem",
                      background: "#FFB265",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography>ul. Unicka, Lublin</Typography>
                  <Typography>Poland, 20-291</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ color: "#8A8FB9" }} md={12} sm={6}>
              <Grid container>
                <Grid item>
                  <Box
                    sx={{
                      height: "2.813rem",
                      width: "2.813rem",
                      background: "#1BE982",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography>For standard shipping</Typography>
                  <Typography>on all orders.</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ContactForm />
    </>
  );
};

export default Contact;
