import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Allitems from "../pages/Allitems";
import ItemDetails from "../pages/ItemDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Faqs from "../pages/Faqs";

const Routers = () => {
  return (
    <Routes basename="/React-kake-dessert-delivery">
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Allitems />} />
      <Route path="/menu/:id" element={<ItemDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  );
};

export default Routers;
