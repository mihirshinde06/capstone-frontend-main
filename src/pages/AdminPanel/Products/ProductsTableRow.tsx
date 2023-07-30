import { Grid, Typography, Button } from "@mui/material";
import { IProductsTableRowProps } from "./types";
import { useState } from "react";
import RemoveProductConfirmationDialog from "./RemoveProductConfirmationDialog";

const ProductsTableRow = ({ productDetails }: IProductsTableRowProps) => {
  const [openRemoveProduct, setOpenRemoveProduct] = useState(false);

  const handleRemoveProductClose = () => {
    setOpenRemoveProduct(false);
  };

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        sx={{ color: "#1D3178" }}
        spacing="1rem"
      >
        <Grid item sm={2}>
          <img
            src={productDetails.image}
            alt="product"
            style={{ width: "5rem" }}
          />
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            {productDetails.name}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography fontWeight={700} mb={1}>
            {productDetails.price}
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography fontWeight={700} mb={1}>
            {productDetails.quantity}
          </Typography>
        </Grid>
        <Grid item sm={1}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem",
              marginBottom: "1rem",
            }}
            onClick={() => setOpenRemoveProduct(true)}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
      <RemoveProductConfirmationDialog
        open={openRemoveProduct}
        handleClose={handleRemoveProductClose}
        productId={productDetails._id}
      />
    </>
  );
};

export default ProductsTableRow;
