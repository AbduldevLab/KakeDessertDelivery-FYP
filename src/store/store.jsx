import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice.jsx";
import cartUiSlice from "./shopping-cart/cartUiSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
