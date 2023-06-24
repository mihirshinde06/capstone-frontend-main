import React, { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import Filters from "./Filters/Filters";
import ProductsList from "./ProductsList/ProductsList";
import Loader from "../../components/Loader/Loader";
import {
  useGetAllProductsByCategoryQuery,
  useGetAllProductsQuery,
} from "../../react-query/queries/products/products";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeSortBy } from "../../redux/slices/filtersSlice";

const Products = () => {
  const sort = useAppSelector((state) => state.filters.sortBy);

  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeSortBy(event.target.value));
  };

  const category = useAppSelector((state) => state.filters.category);

  const { isLoading, error } = useGetAllProductsQuery();
  const { isLoading: filtersLoading } = useGetAllProductsByCategoryQuery(
    category,
    category !== ""
  );

  const [results, setResults] = useState(0);

  const matches = useMediaQuery("(max-width:1280px)");
  const matchesTablets = useMediaQuery("(max-width:1024px)");

  return (
    <>
      <PageHeader title={"Shop For products"} />;
      <Box
        padding={
          matchesTablets || matches
            ? "5rem 5rem 2rem 5rem"
            : "5rem 15rem 2rem 15rem"
        }
      >
        {isLoading || filtersLoading ? (
          <Loader />
        ) : (
          !error && (
            <>
              <Box sx={{ marginBottom: "4rem" }}>
                <Typography sx={{ color: "#151875", fontSize: "1.375rem" }}>
                  All Products
                </Typography>
                <Typography sx={{ color: "#8A8FB9", fontSize: "0.75rem" }}>
                  {results} results
                </Typography>
              </Box>
              <Grid container>
                <Grid item sm={3}>
                  <Filters />
                </Grid>
                <Grid item sm={9}>
                  <ProductsList setResults={setResults} />
                </Grid>
              </Grid>
            </>
          )
        )}
      </Box>
    </>
  );
};

export default Products;
