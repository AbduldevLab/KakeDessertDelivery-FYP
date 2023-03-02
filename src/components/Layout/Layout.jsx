import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers.jsx";

import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const location = useLocation();

  // Check if the current route starts with "/admin"
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div>
      {/* Only render the header if it's not an admin route */}
      {!isAdminRoute && <Header />}

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>

      {/* Only render the footer if it's not an admin route */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default Layout;
