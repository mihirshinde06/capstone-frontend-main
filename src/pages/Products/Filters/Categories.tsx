import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeCategory } from "../../../redux/slices/filtersSlice";

const Categories = () => {
  const category = useAppSelector((state) => state.filters.category);

  const dispatch = useAppDispatch();

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCategory(e.target.name === category ? "" : e.target.name));
  };

  return (
    <>
      <Typography
        sx={{ fontSize: "1.25rem", color: "#151875", padding: "1rem 0" }}
        fontWeight={700}
      >
        Categories
      </Typography>
      <FormGroup>
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={category === "kitchen"}
              onChange={handleChangeCategory}
              name="kitchen"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Kitchen"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={category === "bedroom"}
              onChange={handleChangeCategory}
              name="bedroom"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Bedroom"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={category === "bathroom"}
              onChange={handleChangeCategory}
              name="bathroom"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Bathroom"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={category === "office"}
              onChange={handleChangeCategory}
              name="office"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Home office"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={category === "living-room"}
              onChange={handleChangeCategory}
              name="living-room"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Living Room"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={category === "outdoor"}
              onChange={handleChangeCategory}
              name="outdoor"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Out Door"
        />
      </FormGroup>
    </>
  );
};

export default Categories;
