import { Typography } from "@mui/material";

import ProductsTableHeader from "./ProductsTableHeader";
import ProductsTableRow from "./ProductsTableRow";
import { IProductsTableProps } from "./types";

const ProductsTable = ({ productsData }: IProductsTableProps) => {
  return (
    <>
      <ProductsTableHeader />
      {productsData && productsData.products?.length > 0 ? (
        productsData.products?.map((product) => (
          <ProductsTableRow productDetails={product} />
        ))
      ) : (
        <Typography fontWeight={700} mb={1} sx={{ color: "#1D3178" }}>
          There are no products yet!
        </Typography>
      )}
    </>
  );
};

export default ProductsTable;
