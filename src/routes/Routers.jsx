// Description: This file contains the routes for the website
import React, { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

// Importing pages
import Home from "../pages/Home";
import Allitems from "../pages/Allitems";
import ItemDetails from "../pages/ItemDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Faqs from "../pages/Faqs";
import Tc from "../pages/Tc";

// Importing admin panel pages
import AdminDashSignIn from "../pages/AdminDash/Signin.jsx";
import AdminDashForgot from "../pages/AdminDash/ForgotPassword.jsx";
import AdminDash from "../pages/AdminDash/Dashboard.jsx";
import AdminOrders from "../pages/AdminDash/Orders.jsx";
import AdminUsers from "../pages/AdminDash/Users.jsx";
import Inventory from "../pages/AdminDash/Inventory.jsx";


// Importing 404 page
import NotFound from "../pages/NotFound";

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

  // Return the routes
  return (
    <Routes basename="/React-kake-dessert-delivery">
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Allitems />} />
      <Route path="/menu/:id" element={<ItemDetails />} />
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
    </Routes>
  );
};

export default Routers;



// ok it works , when i click on the website and am on the home screen i can navigate back to the search engine BUT when am in the home page yeah and i choose to go to any other page , then i want to navigate back, it navigates back accordingly until i get to the home page and when i try to navigate back again to go back to the search engine it glitches at stays at the home screen, can you fix this please: import React,  { useEffect } from "react";
// import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

// import Home from "../pages/Home";
// import Allitems from "../pages/Allitems";
// import ItemDetails from "../pages/ItemDetails";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
// import Contact from "../pages/Contact";
// import Register from "../pages/Register";
// import Faqs from "../pages/Faqs";
// import Tc from "../pages/Tc";

// const Routers = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const isHomePage = location.pathname === "/home";
//     const isAtTopOfHistory = window.history.state === null;
//     if (isHomePage && isAtTopOfHistory) {
//       navigate(-1);
//     }
//   }, [location.pathname, navigate]);
//   return (
//     <Routes basename="/React-kake-dessert-delivery">
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/menu" element={<Allitems />} />
//       <Route path="/menu/:id" element={<ItemDetails />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/faqs" element={<Faqs />} />
//       <Route path="/t&c" element={<Tc />} />
//     </Routes>
//   );
// };

// export default Routers;
