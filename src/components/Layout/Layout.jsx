import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers.jsx";

import AdminSidebar from "../AdminDash/Sidebar";
import AdminHeader from "../AdminDash/Header.jsx";

import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";

import NotFound from "../../pages/NotFound.jsx";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const location = useLocation();

  // Check if the current route starts with "/admin"
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isAdminRoute1 = location.pathname.startsWith("/admin/forgotPassword");
  const isAdminDash = location.pathname.startsWith("/admin/dashboard");
  const isValidRoute = 
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
  location.pathname === "/admin" ||
  location.pathname === "/admin/forgotPassword" ||
  location.pathname === "/admin/dashboard";
  return (
    <div>
    {isValidRoute ? (
    <div>
      {/* Only render the header if it's not an admin route */}
      {!isAdminRoute && !isAdminRoute1 && <Header />}
      {isAdminDash && <AdminHeader/>}

      {showCart && <Carts />}
      
      <div>
        <Routes />
      </div>
      
      {/* Only render the footer if it's not an admin route */}
      {!isAdminRoute && !isAdminRoute1 && <Footer />}
      {isAdminDash && <AdminSidebar />}
    </div>
    ) : (
      <NotFound />
    )}
    </div>
  );
};

export default Layout;
