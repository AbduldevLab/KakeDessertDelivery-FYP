// This slice is responsible for the UI state of the cart
import { createSlice } from "@reduxjs/toolkit";

// The initial state of the cart is false, meaning the cart is not visible
const cartUiSlice = createSlice({
  name: "cartUi", // The name of the slice
  initialState: { cartIsVisible: false }, // The initial state of the slice that will be used by the store

  // The reducers are functions that will be called by the actions
  reducers: {
    toggle(state) {// The toggle function will toggle the cartIsVisible state
      state.cartIsVisible = !state.cartIsVisible;// The cartIsVisible state will be toggled
    },
    clearCart: (state) => {// The clearCart function will set the cartIsVisible state to false
      state.cartIsVisible = false;// The cartIsVisible state will be set to false
    },
  },
});

export const cartUiActions = cartUiSlice.actions;// The actions will be exported
export default cartUiSlice;
