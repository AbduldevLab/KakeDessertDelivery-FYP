import { createSlice } from "@reduxjs/toolkit";

let items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const openingHour = 18;
const closingHour = 22;
const currentDate = new Date();
const currentHour = currentDate.getHours();

if (currentHour < openingHour || currentHour >= closingHour) {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("totalAmount");
  localStorage.removeItem("totalQuantity");
  items = [];
}

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // =========== add item ============

    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        item =>
        {
          if (item.selection) {
            return (
              item.title === newItem.title &&
              item.selection.toppings === newItem.selection.toppings &&
              item.selection.sauces === newItem.selection.sauces &&
              item.selection.drink === newItem.selection.drink
            );
          } else {
            return item.title === newItem.title;
          }
        }
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          selection: newItem.selection,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.slice(),
        state.totalAmount,
        state.totalQuantity
      );
    },

    // ========= remove item ========

    removeItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        item =>
        {
          if (item.selection) {
            return (
              item.title === newItem.title &&
              item.selection.toppings === newItem.selection.toppings &&
              item.selection.sauces === newItem.selection.sauces &&
              item.selection.drink === newItem.selection.drink
            );
          } else {
            return item.title === newItem.title;
          }
        }
      );
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          item =>
          {
            if (item.selection) {
              return (
                item.title === newItem.title &&
                item.selection.toppings === newItem.selection.toppings &&
                item.selection.sauces === newItem.selection.sauces &&
                item.selection.drink === newItem.selection.drink
              );
            } else {
              return item.title === newItem.title;
            }
          }
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.slice(),
        state.totalAmount,
        state.totalQuantity
      );
    },

    //============ delete item ===========

    deleteItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        item =>
        {
          if (item.selection) {
            return (
              item.title === newItem.title &&
              item.selection.toppings === newItem.selection.toppings &&
              item.selection.sauces === newItem.selection.sauces &&
              item.selection.drink === newItem.selection.drink
            );
          } else {
            return item.title === newItem.title;
          }
        }
      );
    
      if (existingItem) {
        state.cartItems = state.cartItems.filter(item => {
          if (item.selection && newItem.selection) {
            return (
              item.title !== newItem.title ||
              item.selection.toppings !== newItem.selection.toppings ||
              item.selection.sauces !== newItem.selection.sauces ||
              item.selection.drink !== newItem.selection.drink
            );
          } else {
            return item.title !== newItem.title;
          }
        });
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
    
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemFunc(
        state.cartItems.slice(),
        state.totalAmount,
        state.totalQuantity
      );
    },
    // =========== clear cart ===========

    clear(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalAmount");
      localStorage.removeItem("totalQuantity");
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

