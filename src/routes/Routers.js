import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Allitems from "../pages/Allitems";
import ItemDetails from "../pages/ItemDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Faqs from "../pages/Faqs";
import Tc from "../pages/Tc";

const Routers = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(-1);
    }
  }, [location.pathname, navigate]);

  return (
    <Routes basename="/React-kake-dessert-delivery">
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Allitems />} />
      <Route path="/menu/:id" element={<ItemDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/t&c" element={<Tc />} />
    </Routes>
  );
};

export default Routers;
