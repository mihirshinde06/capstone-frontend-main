import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import filtersSlice from "./slices/filtersSlice";
import shoppingCartSlice from "./slices/shoppingCartSlice";

export const store = configureStore({
  reducer: { filters: filtersSlice, shoppingCart: shoppingCartSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
