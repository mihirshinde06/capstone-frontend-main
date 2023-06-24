import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FiltersState {
  category: string;
  price: string;
  rating: string;
  sortBy: string;
}

const initialState: FiltersState = {
  category: "",
  price: "",
  rating: "",
  sortBy: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    changePrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    changeRating: (state, action: PayloadAction<string>) => {
      state.rating = action.payload;
    },
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { changeCategory, changePrice, changeRating, changeSortBy } =
  filtersSlice.actions;

export const filtersState = (state: RootState) => state;

export default filtersSlice.reducer;
