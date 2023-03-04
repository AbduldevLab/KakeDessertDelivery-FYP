// This is the cart page
import React from "react";

// import Decoreleft from "../../assets/images/decore-left.png";
import CommonSection from "../components/UI/common-section/CommonSection.jsx";
import Helmet from "../components/Helmet/Helmet.jsx";// This is used to import the Helmet component
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";// This is used to import the react-redux
import { Container, Row, Col } from "reactstrap";// This is used to import the reactstrap components
import { cartActions } from "../store/shopping-cart/cartSlice.jsx";// This is used to import the cart actions

// This is used to display the cart page
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);// This is used to get the cart items
  const totalAmount = useSelector((state) => state.cart.totalAmount);// This is used to get the total amount
  // This is used to display the cart page
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {/* // This is used to check if the cart is empty */}
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                // This is used to display the cart items attributes/headings
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* // This is used to display the cart items ,maps/matches the cart items */}
                    {cartItems.map((item) => (
                      // This is used to display the cart items
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

        <div className="mt-4">
          <h6>
            {/* // This is used to display the total amount */}
            Subtotal: €<span className="cart__subtotal">{totalAmount}</span>
          </h6>
          <p>Delivery fee at checkout</p>
          <div>
            <div className="d-sm-flex justify-content-start">
              {/* // This is used to display the continue shopping and proceed to checkout buttons */}
            <button className="addTOCart__btn me-3" onClick={() => { window.location.href = "/menu"; }}>
              Continue Shopping
            </button>
            {/* // This is used to display the proceed to checkout button */}
            <button className="addTOCart__btn" onClick={() => { window.location.href = "/checkout"; }}>
              Proceed to checkout
            </button>
            </div> 
          </div>
        </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

// This is used to display the cart items
const Tr = (props) => {
  // This is used to get the cart items
  const { image01, title, price, quantity, selection } = props.item;
  const dispatch = useDispatch();// This is used to dispatch the actions

  const deleteItem = () => {// This is used to delete the cart items
    dispatch(cartActions.deleteItem({ title, selection }));// This is used to dispatch the delete item action
  };
  // This is used to display the cart items
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">
        {/* {title}// This is used to display the title */}
        <div className="cart-item1">
          {/* // This is used to display the cart items */}
          {selection && Object.entries(selection).length !== 0
            ? Object.entries(selection).map(([key, value], index) => (// This is used to display the cart items
                // This is used to display the cart items
                <React.Fragment key={key}>
                  {/* // This is used to display the cart item title */}
                  {title !== "Cold Drinks" && title !== "Hot Drinks" && (
                    <li>
                      {/* // This is used to display the cart item title */}
                      {index === 0 ? "toppings: " : "sauces: "}
                      {/* // This is used to display the cart item selection */}
                      {value}
                    </li>
                  )}
                  {/* // This is used to display the cart item title */}
                  {(title === "Cold Drinks" || title === "Hot Drinks") && (
                    <li>{value}</li>
                  )}
                </React.Fragment>
              ))
            : ""}
        </div>
      </td>
      {/* // This is used to display the cart item price */}
      <td className="text-center">€{price}</td>
      {/* // This is used to display the cart item quantity */}
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        {/* // This is used to display the delete button */}
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
