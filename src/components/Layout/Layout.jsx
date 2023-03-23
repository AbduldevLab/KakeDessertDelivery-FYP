// This is the main layout component that wraps all the other components
import React from "react";
// import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";

import AdminSidebar from "../AdminDash/Sidebar";
import AdminHeader from "../AdminDash/Header";

import Carts from "../UI/cart/Carts";
import { useSelector } from "react-redux"; // This imports the react-redux hooks

import NotFound from "../../pages/NotFound"; // This imports the NotFound component


// This component is used to display the header on the home page
const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible); // This is used to get the total quantity of items in the cart
  const location = useLocation(); // This is used to get the current route

  // Check if the current route starts with "/admin"
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isAdminRoute1 = location.pathname.startsWith("/admin/forgotPassword");
  const isAdminDash = location.pathname.startsWith("/admin/dashboard");
  const isAdminOrders = location.pathname.startsWith("/admin/orders");
  const isAdminUsers = location.pathname.startsWith("/admin/users");
  const isAdminInventory = location.pathname.startsWith("/admin/inventory");

  const isValidRoute =         // This is used to check if the current route is valid
  location.pathname === "/" ||
  location.pathname === "/home" ||
  location.pathname === "/menu" ||
  location.pathname === "/menu/:id" ||
  location.pathname === "/cart" ||
  location.pathname === "/checkout" ||
  location.pathname === "/register" ||
  location.pathname === "/contact" ||
  location.pathname === "/faqs" ||
  location.pathname === "/t&c" ||
  location.pathname === "/app" ||
  location.pathname === "/admin" ||
  location.pathname === "/admin/forgotPassword" ||
  location.pathname === "/admin/dashboard" ||
  location.pathname === "/admin/orders" ||
  location.pathname === "/admin/users" ||
  location.pathname === "/admin/inventory" ||
  
  location.pathname === "/sitemap.xml";

  return (
    <div>
    {isValidRoute ? ( // Only render the layout if the route is valid
    <div>
      {/* Only render the header if it's not an admin route */}
      {!isAdminRoute && !isAdminRoute1 && <Header />}
      {(isAdminDash || isAdminOrders || isAdminUsers || isAdminInventory) && <AdminHeader/>} {/*This is used to render the admin header*/}

      {showCart && <Carts />} {/*This is used to render the cart*/}
      
      <div>
        <Routes />  {/*This is used to render the routes*/}
      </div>
      
      {/* Only render the footer if it's not an admin route */}
      {!isAdminRoute && !isAdminRoute1 && <Footer />}
      {(isAdminDash || isAdminOrders || isAdminUsers || isAdminInventory)&& <AdminSidebar />} {/*This is used to render the admin sidebar*/}
    </div>
    ) : (
      <NotFound />  // This is used to render the NotFound component
    )}
    </div>
  );
};

export default Layout;
