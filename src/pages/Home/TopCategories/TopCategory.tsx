import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ITopCategoryProps } from "./types";

const TopCategory = ({ image, categoryName, link }: ITopCategoryProps) => {
  return (
    <Link to={link}>
      <Box
        sx={{
          boxShadow: "0rem 0rem 1.563rem rgba(0, 0, 0, 0.2)",
          padding: "1.1rem",
          borderRadius: ".5rem",
        }}
      >
        <Box sx={{ background: "#F6F7FB" }}>
          <img
            src={image}
            alt="dummy product"
            style={{
              width: "auto",
              height: "22.875rem",
              borderRadius: ".5rem",
              objectFit: "contain",
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#fb2e86",
            ":hover": { background: "#fb2e86", boxShadow: "none" },
            boxShadow: "none",
            padding: ".5rem 2rem",
            marginTop: "1.5rem",
          }}
        >
          {categoryName}
        </Button>
      </Box>
    </Link>
  );
};

export default TopCategory;
