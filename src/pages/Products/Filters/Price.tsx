import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { formatPrice } from "../../../utils/utils";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { changePrice } from "../../../redux/slices/filtersSlice";
import { PriceFilterOptions } from "./types";

const Price = () => {
  const price = useAppSelector((state) => state.filters.price);

  const dispatch = useAppDispatch();

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePrice(e.target.name === price ? "" : e.target.name));
  };

  return (
    <>
      <Typography
        sx={{ fontSize: "1.25rem", color: "#151875", padding: "1rem 0" }}
        fontWeight={700}
      >
        Price
      </Typography>
      <FormGroup>
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={price === PriceFilterOptions.UNDER_500}
              onChange={handleChangePrice}
              name={PriceFilterOptions.UNDER_500}
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label={`Under ${formatPrice("5000")}`}
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={price === PriceFilterOptions.FIVE_HUNDRED_TO_1000}
              onChange={handleChangePrice}
              name={PriceFilterOptions.FIVE_HUNDRED_TO_1000}
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label={`${formatPrice("5000")} - ${formatPrice("10000")}`}
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={price === PriceFilterOptions.ONE_THOUSAND_TO_2000}
              onChange={handleChangePrice}
              name={PriceFilterOptions.ONE_THOUSAND_TO_2000}
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label={`${formatPrice("10000")} - ${formatPrice("20000")}`}
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={price === PriceFilterOptions.ABOVE_2000}
              onChange={handleChangePrice}
              name={PriceFilterOptions.ABOVE_2000}
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label={`Above ${formatPrice("20000")}`}
        />
      </FormGroup>
    </>
  );
};

export default Price;
