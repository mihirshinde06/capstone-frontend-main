import { Divider, Grid, Typography } from "@mui/material";

const OrderHistoryTableHeader = () => {
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        sx={{ color: "#1D3178" }}
        spacing="1rem"
      >
        <Grid item sm={3}>
          <Typography fontWeight={700} mb={1}>
            Order Number
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            Order Status
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            Ordered On
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography fontWeight={700} mb={1}>
            Ordered By
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

export default OrderHistoryTableHeader;
