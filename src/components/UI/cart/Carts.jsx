// Description: This component is used to display the cart items
import React from "react";
import { ListGroup } from "reactstrap"; //This is used to import the reactstrap components
import { Link } from "react-router-dom"; //This is used to import the react-router-dom components
import CartItem from "./CartItem.jsx"; //This is used to import the CartItem component
import { useDispatch, useSelector } from "react-redux"; //This is used to import the react-redux components

//This is used to import the cart actions
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice.jsx";
import { cartActions } from "../../../store/shopping-cart/cartSlice.jsx";//This is used to import the cart actions
import "../../../styles/shopping-cart.css";
import EmptyCart from "../../../assets/images/emptyCart.png";

//This is the Carts component
const Carts = () => {
  const dispatch = useDispatch(); //This is used to dispatch the actions
  const cartProducts = useSelector((state) => state.cart.cartItems); //This is used to get the cart items from the redux store
  const totalAmount = useSelector((state) => state.cart.totalAmount); //This is used to get the total amount from the redux store

  //This function is used to toggle the cart
  const toggleCart = () => {
    dispatch(cartUiActions.toggle()); //This is used to dispatch the toggle action
  };

  //This function is used to clear the cart
  const clearCart = () => {
    dispatch(cartActions.clear()); //This is used to dispatch the clear action
  };
  
  //This is the JSX for the Carts component
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          {/* //This is used to close the cart */}
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
          <div className="cart__title">Cart</div>
        </div>

        <div className="cart__clear">
          {/* //This is used to clear the cart */}
          <span onClick={clearCart}>clear</span>
        </div>

        <div className="cart__item-list-container">
          <div className="cart__item-list">
            {/* //This is used to display the cart items */}
            {cartProducts.length === 0 ? (
              <div
                className="cart__item-list1"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  {/* //This is used to display the empty cart image */}
                  <img src={EmptyCart} className="w-300" alt="" />
                  <h6 className="text-center mt-5">
                    No items added to the cart
                  </h6>
                </div>
              </div>
            ) : (
              //This is used to display the cart items
              cartProducts.map((item, index) => (
                //This is used to display the CartItem component
                <CartItem item={item} key={index} />
              ))
            )}
          </div>
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            {/* //This is used to display the total amount */}
            Subtotal : <span>€{totalAmount}</span>
          </h6>
          <button>
            {/* //This is used to navigate to the checkout page */}
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





// import React from "react";

// import { ListGroup } from "reactstrap";
// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";

// import { useDispatch, useSelector } from "react-redux";
// import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

// import "../../../styles/shopping-cart.css";
// import EmptyCart from "../../../assets/images/emptyCart.png";

// const Carts = () => {
//   const dispatch = useDispatch();
//   const cartProducts = useSelector((state) => state.cart.cartItems);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);

//   const toggleCart = () => {
//     dispatch(cartUiActions.toggle());
//   };

//   const clearCart = () => {
//     dispatch(cartActions.clear());
//   };
//   return (
//     <div className="cart__container">
//       <ListGroup className="cart">
//         <div className="cart__close">
//           <span onClick={toggleCart}>
//             <i class="ri-close-fill"></i>
//           </span>
//           <div className="cart__title">Cart</div>
//         </div>

//         <div className="cart__clear">
//           <span onClick={clearCart}>clear</span>
//         </div>

//         <div className="cart__item-list">
//           {cartProducts.length === 0 ? (
//             <div
//               className="cart__item-list1"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <div>
//                 <img src={EmptyCart} className="w-300" alt="" />
//                 <h6 className="text-center mt-5">No items added to the cart</h6>
//               </div>
//             </div>
//           ) : (
//             cartProducts.map((item, index) => (
//               <CartItem item={item} key={index} />
//             ))
//           )}
//         </div>

//         <div className="cart__bottom d-flex align-items-center justify-content-between">
//           <h6>
//             Subtotal : <span>€{totalAmount}</span>
//           </h6>
//           <button>
//             <Link to="/checkout" onClick={toggleCart}>
//               Checkout
//             </Link>
//           </button>
//         </div>
//       </ListGroup>
//     </div>
//   );
// };

// export default Carts;

