import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, restaurantSlice } from "./src/slices";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});
