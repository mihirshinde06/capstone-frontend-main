import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  useGetAllProductsByCategoryQuery,
  useGetAllProductsQuery,
} from "../../../react-query/queries/products/products";
import { useAppSelector } from "../../../redux/hooks";
import ProductsListItem from "./ProductsListItem";
import { Product } from "../../../react-query/queries/products/types";
import { PriceFilterOptions, RatingFilterOptions } from "../Filters/types";
import { IProductsListProps } from "./types";

const ProductsList = ({ setResults }: IProductsListProps) => {
  const { category, price, rating } = useAppSelector((state) => state.filters);

  const { data } = useGetAllProductsQuery();
  const { data: filteredProducts } = useGetAllProductsByCategoryQuery(
    category,
    category !== ""
  );

  const [productsToShow, setProductsToShow] = useState<Product[] | undefined>(
    data?.products
  );

  // set products to show based on category
  useEffect(() => {
    filteredProducts
      ? setProductsToShow(filteredProducts.products)
      : setProductsToShow(data?.products);
  }, [data?.products, filteredProducts]);

  // filter products by price
  const filterByPrice = (
    products: Product[] | undefined,
    priceToFilter: string
  ) => {
    const under500 = products?.filter(
      (product) => parseFloat(product.price) < 500
    );
    const fiveHundredTo1000 = products?.filter(
      (product) =>
        parseFloat(product.price) >= 500 && parseFloat(product.price) <= 1000
    );
    const oneThousandTo2000 = products?.filter(
      (product) =>
        parseFloat(product.price) > 1000 && parseFloat(product.price) <= 2000
    );
    const above2000 = products?.filter(
      (product) => parseFloat(product.price) > 2000
    );

    switch (priceToFilter) {
      case PriceFilterOptions.UNDER_500: {
        return under500;
      }
      case PriceFilterOptions.FIVE_HUNDRED_TO_1000: {
        return fiveHundredTo1000;
      }
      case PriceFilterOptions.ONE_THOUSAND_TO_2000: {
        return oneThousandTo2000;
      }
      case PriceFilterOptions.ABOVE_2000: {
        return above2000;
      }
      default: {
        return products;
      }
    }
  };

  // filter products by price
  const filterByRating = (
    products: Product[] | undefined,
    ratingToFilter: string
  ) => {
    const above2 = products?.filter(
      (product) =>
        parseFloat(product.rating) >= 2 && parseFloat(product.rating) < 3
    );
    const above3 = products?.filter(
      (product) =>
        parseFloat(product.rating) >= 3 && parseFloat(product.rating) < 4
    );
    const above4 = products?.filter(
      (product) =>
        parseFloat(product.rating) >= 4 && parseFloat(product.rating) <= 5
    );

    switch (ratingToFilter) {
      case RatingFilterOptions.ABOVE_2: {
        return above2;
      }
      case RatingFilterOptions.ABOVE_3: {
        return above3;
      }
      case RatingFilterOptions.ABOVE_4: {
        return above4;
      }
      default: {
        return products;
      }
    }
  };

  // set products to show based on category, price and rating
  useEffect(() => {
    const products = filteredProducts
      ? filteredProducts.products
      : data?.products;

    if (price !== "" && rating !== "") {
      setProductsToShow(filterByPrice(filterByRating(products, rating), price));
    } else if (price !== "" && rating === "") {
      setProductsToShow(filterByPrice(products, price));
    } else if (price === "" && rating !== "") {
      setProductsToShow(filterByRating(products, rating));
    } else {
      setProductsToShow(products);
    }
  }, [price, data?.products, filteredProducts, rating]);

  useEffect(() => {
    setResults(productsToShow?.length || 0);
    //eslint-disable-next-line
  }, [productsToShow]);

  return (
    <Box>
      {productsToShow && productsToShow?.length > 0 ? (
        productsToShow?.map((product) => (
          <ProductsListItem product={product} key={product._id} />
        ))
      ) : (
        <Typography sx={{ marginTop: "1.5rem" }} fontWeight={700} fontSize={18}>
          No products found!
        </Typography>
      )}
    </Box>
  );
};

export default ProductsList;
