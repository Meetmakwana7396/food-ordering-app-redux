import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/ItemSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
