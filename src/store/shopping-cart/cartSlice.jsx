// Description: This file contains the redux slice for the shopping cart
import { createSlice } from "@reduxjs/toolkit";

// This is the initial state
let items =
// This is the initial state
  localStorage.getItem("cartItems") !== null 
  // This is the initial state
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const openingHour = 0;// this is the opening hour
const closingHour = 24;// this is the closing hour
const currentDate = new Date();// this is the current date
const currentHour = currentDate.getHours();// this is the current hour

// This is the if statement for the opening and closing hours
if (currentHour < openingHour || currentHour >= closingHour) {
  localStorage.removeItem("cartItems"); // remove the cart items
  localStorage.removeItem("totalAmount"); // remove the total amount
  localStorage.removeItem("totalQuantity"); // remove the total quantity
  items = [];
}

// This is the total amount for the cart
const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;
// This is the total quantity for the cart
const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

    // This is the setItem function for the cart
const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

// This is the initial state
const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

// This is the cart slice that contains the reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,

  // This is the reducers for the cart slice
  reducers: {
    // =========== add item ============

    addItem(state, action) {
      const newItem = action.payload; // this is the new item being added from user

      // This is the existing item in the cart
      const existingItem = state.cartItems.find((item) => {
        if (item.selection) {// if the item has a selection
          // This is the if statement for the existing item
          return (
            item.title === newItem.title && // if the item title is the same as the new item title
            item.selection.toppings === newItem.selection.toppings && // if the item toppings are the same as the new item toppings
            item.selection.sauces === newItem.selection.sauces && // if the item sauces are the same as the new item sauces
            item.selection.drink === newItem.selection.drink // if the item drink is the same as the new item drink
          );
        } else {// if the item does not have a selection
          return item.title === newItem.title; // if the item title is the same as the new item title
        }
      });

      state.totalQuantity++; // add one to the total quantity

      // This is the if statement for the existing item
      if (!existingItem) {
        state.cartItems.push({ // push the new item to the cart
          id: newItem.id,
          title: newItem.title,
          selection: newItem.selection,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else { // if the item already exists in the cart
        existingItem.quantity++;// add one to the quantity
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);// add the price to the total price
      }

      // This is the total amount for the cart
      state.totalAmount = state.cartItems.reduce(
        // This is the reduce function for the cart that adds the price and quantity
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      //This is the setItem function for the cart
      setItemFunc(
        state.cartItems.slice(),
        state.totalAmount,
        state.totalQuantity
      );
    },

    // ========= remove item ========

    removeItem(state, action) {
      const newItem = action.payload;// this is the new item being removed from user
      const existingItem = state.cartItems.find((item) => {// this is the existing item in the cart
        if (item.selection) {// if the item has a selection that is not null
          // This is the if statement for the existing item
          return (
            item.title === newItem.title && // if the item title is the same as the new item title
            item.selection.toppings === newItem.selection.toppings &&// if the item toppings are the same as the new item toppings
            item.selection.sauces === newItem.selection.sauces &&// and if the item sauces are the same as the new item sauces
            item.selection.drink === newItem.selection.drink // and if the item drink is the same as the new item drink
          );
        } else {// if the item does not have a selection
          return item.title === newItem.title;// if the item title is the same as the new item title
        }
      });
      state.totalQuantity--; // remove one from the total quantity

      if (existingItem.quantity === 1) {// if the quantity is one
        state.cartItems = state.cartItems.filter((item) => {// filter the item out of the cart
          if (item.selection) {// if the item has a selection
            // This is the if statement for the existing item
            return (
              item.title === newItem.title && // if the item title is the same as the new item title
              item.selection.toppings === newItem.selection.toppings &&// if the item toppings are the same as the new item toppings
              item.selection.sauces === newItem.selection.sauces &&// and if the item sauces are the same as the new item sauces
              item.selection.drink === newItem.selection.drink//
            );
          } else {// if the item does not have a selection
            return item.title === newItem.title;// if the item title is the same as the new item title
          }
        });
      } else {// if the quantity is more than one
        existingItem.quantity--;// remove one from the quantity
        existingItem.totalPrice =
        // remove the price from the total price
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      // This is the total amount for the cart
      state.totalAmount = state.cartItems.reduce(
        // This is the reduce function for the cart that adds the price and quantity
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      //This is the setItem function for the cart
      setItemFunc(
        state.cartItems.slice(),// slice the cart items so that it is not mutated
        state.totalAmount, // set the total amount so that it is not mutated
        state.totalQuantity // set the total quantity so that it is not mutated
      );
    },

    //============ delete item ===========

    deleteItem(state, action) {
      const newItem = action.payload;// this is the new item being deleted from user
      const existingItem = state.cartItems.find((item) => {// this is the existing item in the cart
        if (item.selection) {// if the item has a selection
          // This is the if statement for the existing item
          return (
            item.title === newItem.title &&// if the item title is the same as the new item title
            item.selection.toppings === newItem.selection.toppings &&// if the item toppings are the same as the new item toppings
            item.selection.sauces === newItem.selection.sauces &&// and if the item sauces are the same as the new item sauces
            item.selection.drink === newItem.selection.drink// and if the item drink is the same as the new item drink
          );
        } else {// if the item does not have a selection
          return item.title === newItem.title;// if the item title is the same as the new item title
        }
      });

      // This is the total amount for the cart if the item is deleted
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => {// filter the item out of the cart
          if (item.selection && newItem.selection) {// if the item has a selection
            // This is the if statement for the existing item
            return (
              item.title !== newItem.title || // if the item title is not the same as the new item title
              item.selection.toppings !== newItem.selection.toppings || //or if the item toppings are not the same as the new item toppings
              item.selection.sauces !== newItem.selection.sauces || // or if the item sauces are not the same as the new item sauces
              item.selection.drink !== newItem.selection.drink // or if the item drink is not the same as the new item drink
            );
          } else {// if the item does not have a selection
            return item.title !== newItem.title;// if the item title is not the same as the new item title
          }
        });
        state.totalQuantity = state.totalQuantity - existingItem.quantity;// remove the quantity from the total quantity
      }

      state.totalAmount = state.cartItems.reduce(// This is the reduce function for the cart that adds the price and quantity
        (total, item) => total + Number(item.price) * Number(item.quantity),// This is the total amount for the cart if the item is deleted
        0
      );
      //This is the setItem function for the cart
      setItemFunc(
        state.cartItems.slice(), // slice the cart items so that it is not mutated
        state.totalAmount, // set the total amount so that it is not mutated
        state.totalQuantity // set the total quantity so that it is not mutated
      );
    },
    // =========== clear cart altogether===========

    clear(state) {// this is the clear function for the cart
      state.cartItems = []; // set the cart items to an empty array
      state.totalQuantity = 0;// set the total quantity to zero
      state.totalAmount = 0;// set the total amount to zero
      localStorage.removeItem("cartItems");// remove the cart items from local storage
      localStorage.removeItem("totalAmount");// remove the total amount from local storage
      localStorage.removeItem("totalQuantity");// remove the total quantity from local storage
    },
  },
});

export const cartActions = cartSlice.actions; // export the cart actions

export default cartSlice;
