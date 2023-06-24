import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IShoppingCartItem } from "./types";

export interface IShoppingCartState {
  itemsInCart: IShoppingCartItem[];
}

const initialState: IShoppingCartState = {
  itemsInCart: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<IShoppingCartItem>) => {
      state.itemsInCart = state.itemsInCart.includes(action.payload)
        ? [...state.itemsInCart]
        : [...state.itemsInCart, action.payload];
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.itemInCart._id !== action.payload
      );
    },
    clearCartItems: (state) => {
      state.itemsInCart = [];
    },
    updateItemInCart: (state, action: PayloadAction<IShoppingCartItem>) => {
      state.itemsInCart = state.itemsInCart.map((item) =>
        item.itemInCart._id === action.payload.itemInCart._id
          ? action.payload
          : item
      );
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCartItems,
  updateItemInCart,
} = shoppingCartSlice.actions;

export const ShoppingCartState = (state: RootState) => state;

export default shoppingCartSlice.reducer;
