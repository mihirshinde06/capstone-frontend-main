import { Divider, Grid, Typography } from "@mui/material";

const ProductsTableHeader = () => {
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        sx={{ color: "#1D3178" }}
        spacing="1rem"
      >
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            Product Image
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            Product Name
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            Product Price
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography fontWeight={700} mb={1}>
            Product Quantity
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            Quick Actions
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "1rem 0 1.5rem" }} />
    </>
  );
};

export default ProductsTableHeader;
