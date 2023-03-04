// This imports the react hooks
import React, { useRef, useEffect } from "react";

// This imports the reactstrap components
import { Container } from "reactstrap";
import logo from "../../assets/images/kake-logo.png";
// This imports the react router dom
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // This imports the react-redux hooks

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice.jsx"; // This imports the cartUiActions from the cartUiSlice.jsx file

import "../../styles/header.css";

// This component is used to display the header on the home page
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Menu",
    path: "/menu",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

// This component is used to display the header on the home page
const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // This is used to get the total quantity of items in the cart
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu"); // This is used to toggle the menu

  // This is used to toggle the cart
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  // This is used to toggle the menu when the user clicks outside the menu
  useEffect(() => {
    const scrollHandler = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80 // This is used to get the scroll position of the page
      ) {
        headerRef.current.classList.add("header__shrink"); // This is used to add the header__shrink class to the header
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    };
  
    window.addEventListener("scroll", scrollHandler); // This is used to add an event listener to the window
  
    return () => {
      window.removeEventListener("scroll", scrollHandler); // This is used to remove the event listener from the window
    };
  }, []);
  
// This is used to toggle the menu when the user clicks outside the menu
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
          <Link to="/home" onClick={() => window.scrollTo(0, 0)}><img src={logo} alt="logo" /></Link> {/*This is used to link the logo to the home page*/}
            {/* <h5>Happy kake</h5> */}
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={() => { // This is used to toggle the menu when the user clicks outside the menu
            toggleMenu();
            window.scrollTo(0, 0);
          }}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => ( // This is used to map through the nav__links array
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : "" // This is used to add the active__menu class to the active link
                  }
                >
                  {item.display}
                </NavLink> // This is used to display the nav__links array
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={() => {
            toggleCart();
            window.scrollTo(0, 0);
          }}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span> 
            </span>

            <span className="user">
              <Link to="/register">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
