import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TopCategory from "./TopCategory";
import kitchenCardImg from "../../../assets/images/kitchen-card-img.jpg";
import officeCardImg from "../../../assets/images/office-card-img.jpg";
import bathroomCardImg from "../../../assets/images/bathroom-card-img.jpg";
import livingRoomCardImg from "../../../assets/images/living-room-card-img.jpg";

const TopCategories = () => {
  return (
    <Box textAlign="center" mt={10}>
      <Typography
        sx={{ color: "#1A0B5B" }}
        fontSize={42}
        fontWeight={700}
        mb={5}
      >
        Top Categories
      </Typography>
      <Grid
        container
        sx={{ padding: "2rem 0" }}
        gap={5}
        justifyContent="center"
      >
        <Grid item>
          <TopCategory
            image={kitchenCardImg}
            categoryName="Kitchen"
            link="/products"
          />
        </Grid>
        <Grid item>
          <TopCategory
            image={bathroomCardImg}
            categoryName="Bathroom"
            link="/products"
          />
        </Grid>
        <Grid item>
          <TopCategory
            image={officeCardImg}
            categoryName="Office"
            link="/products"
          />
        </Grid>
        <Grid item>
          <TopCategory
            image={livingRoomCardImg}
            categoryName="Living Room"
            link="/products"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopCategories;
