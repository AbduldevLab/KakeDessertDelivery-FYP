// Description: This file contains the routes for the website
import React, { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

// Importing pages
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Faqs from "../pages/Faqs";
import Tc from "../pages/T&C";

// Importing admin panel pages
import AdminDashSignIn from "../pages/AdminDash/Signin.jsx";
import AdminDashForgot from "../pages/AdminDash/ForgotPassword.jsx";
import AdminDash from "../pages/AdminDash/Dashboard.jsx";
import AdminOrders from "../pages/AdminDash/Orders.jsx";
import AdminUsers from "../pages/AdminDash/Users.jsx";
import Inventory from "../pages/AdminDash/Inventory.jsx";


// Importing 404 page
import NotFound from "../pages/NotFound";

//sitemap
import Sitemap from "./siteMap/sitemap.xml";

// This is the routes
const Routers = () => {
  const navigate = useNavigate();// this is the navigate function
  const location = useLocation();// this is the location function

  // This is the useEffect hook
  useEffect(() => {
    const isHomePage = location.pathname === "/home";// this is the home page
    const isAtTopOfHistory = window.history.state === null;// this is the top of the history
    if (isHomePage && isAtTopOfHistory) {// if the user is on the home page and at the top of the history
      navigate(-1);// navigate back
    }
  }, [location.pathname, navigate]);// this is the dependencies

  // Return the routes to the app
  return (
    <Routes basename="/React-kake-dessert-delivery">
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:id" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/t&c" element={<Tc />} />
      <Route path="/admin" element={<AdminDashSignIn />} />
      <Route path="/admin/forgotPassword" element={<AdminDashForgot />} />
      <Route path="/admin/dashboard" element={<AdminDash />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/inventory" element={<Inventory />} />

      <Route component={NotFound} />
      <Route path="/sitemap.xml" element={<Sitemap />} />
    </Routes>
  );
};

export default Routers;
