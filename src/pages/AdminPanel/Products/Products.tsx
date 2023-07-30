import { Box, Button, Grid, Typography } from "@mui/material";
import { IProductsProps } from "./types";
import ProductsTable from "./ProductsTable";
import { useState } from "react";
import AddProduct from "./AddProduct";

const Products = ({ products }: IProductsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box mb={4}>
      <Grid container>
        <Grid item sm>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#151875",
              marginBottom: "2rem",
            }}
          >
            Products
          </Typography>
        </Grid>
        <Grid item>
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
            onClick={() => setOpen(true)}
          >
            Add a new product
          </Button>
        </Grid>
      </Grid>
      {open && <AddProduct open={open} handleClose={() => setOpen(false)} />}
      <Box
        sx={{
          borderRadius: ".188rem",
          background: "#F4F4FC",
          padding: "1.5rem 2rem",
        }}
      >
        <ProductsTable productsData={products} />
      </Box>
    </Box>
  );
};

export default Products;
