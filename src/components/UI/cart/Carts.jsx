import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import "../../../styles/shopping-cart.css";
import EmptyCart from "../../../assets/images/emptyCart.png";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const clearCart = () => {
    dispatch(cartActions.clear());
  };
  return (
    <div className="cart__container">
           
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
          <div className="cart__title">Cart</div>
        </div>
       
      <button className="cart__clear-button" onClick={clearCart}>
        <span>Clear</span>
      </button>
      
      <div className="cart__item-list">
        {cartProducts.length === 0 ? (
          <div className="cart__item-list1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
            <img src={EmptyCart} className="w-300" alt="" />
            <h6 className="text-center mt-5">No items added to the cart</h6>
          </div>
          </div>
        ) : (
          cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))
        )}
      </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>€{totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
