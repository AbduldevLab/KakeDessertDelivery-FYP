// Description: CartItem component
import React from "react";
import { ListGroupItem } from "reactstrap"; //This is used to import the reactstrap components

import "../../../styles/cart-item.css";

//This is used to import the react-redux components
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice.jsx"; //This is used to import the cart actions

//This is the CartItem component
const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice, selection } = item; //This is used to destructure the item object

  const dispatch = useDispatch();//This is used to dispatch the actions

  //This function is used to increment the quantity of the item
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({ //This is used to dispatch the addItem action
        id,
        title,
        price,
        selection,
        image01,
      })
    );
  };

  //This function is used to decrement the quantity of the item
  const decreaseItem = () => {
    dispatch(cartActions.removeItem({ title, selection }));//This is used to dispatch the removeItem action
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem({ title, selection })); //This is used to dispatch the deleteItem action
  };

  //This is the JSX for the CartItem component
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        {/* //This is the image of the item */}
        <img src={image01} alt="product-img" /> 

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <div className="cart-item">
              <ul>
                {/* //This is used to display the toppings and sauces */}
                {item.selection && Object.entries(item.selection).length !== 0
                  ? Object.entries(item.selection).map( //This is used to map through the selection object
                      ([key, value], index) => ( //This is used to display the toppings and sauces
                        <React.Fragment key={key}> {/*This is used to display the toppings and sauces*/}
                          {item.title !== "Cold Drinks" && //This is used to display the toppings and sauces
                            item.title !== "Hot Drinks" && ( //This is used to display the toppings and sauces
                              <li>
                                {/* //This is used to display the toppings and sauces */}
                                {index === 0 ? "toppings: " : "sauces: "} 
                                {/* //This is used to display the value of the toppings and sauces */}
                                {value}
                              </li>
                            )}
                            {/* //This is used to display the toppings and sauces */}
                          {(item.title === "Cold Drinks" ||
                          //This is used to display the toppings and sauces
                            item.title === "Hot Drinks") && <li>{value}</li>}
                        </React.Fragment>
                      )
                    )
                  : ""}
              </ul>
            </div>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>€{totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
