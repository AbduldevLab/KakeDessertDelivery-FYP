// This file is the root of the Redux store. It combines all the reducers into a single store.
import { configureStore } from "@reduxjs/toolkit";// The configureStore function is used to create the store
import cartSlice from "./shopping-cart/cartSlice";// The cartSlice is imported
import cartUiSlice from "./shopping-cart/cartUiSlice";// The cartUiSlice is imported

// The store is created by passing the reducers to the configureStore function
const store = configureStore({
  reducer: {// The reducer is an object that contains all the reducers
    cart: cartSlice.reducer,// The cart reducer is added to the store
    cartUi: cartUiSlice.reducer,// The cartUi reducer is added to the store
  },
});

export default store;
