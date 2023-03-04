//this is the checkout page
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";// This is used to import the react-redux
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";// This is used to import the reactstrap
import CommonSection from "../components/UI/common-section/CommonSection.jsx";// This is used to import the common section
import Helmet from "../components/Helmet/Helmet.jsx";// This is used to import the helmet
import CloseModal from "../components/Modal/ClosedModal.jsx";// This is used to import the close modal

import { cartActions } from "../store/shopping-cart/cartSlice.jsx";// This is used to import the cart actions

import { db } from "../config/firebase.js";// This is used to import the firebase
import { collection, addDoc } from "firebase/firestore";// This is used to import the firebase/firestore

import "../styles/checkout.css";

// This is used to display the checkout page
const Checkout = () => {
  const [deliveryOption, setDeliveryOption] = useState("delivery");// This is used to set the delivery option
  const [enterName, setEnterName] = useState("");// This is used to set the enter name
  const [enterEmail, setEnterEmail] = useState("");// This is used to set the enter email
  const [enterNumber, setEnterNumber] = useState("");// This is used to set the enter number
  const [enterCity, setEnterCity] = useState("");// This is used to set the enter city
  const [eirCode, setEirCode] = useState("");// This is used to set the eir code
  const [collectionTime, setCollectionTime] = useState("asap");// This is used to set the collection time

  const [emailError, setEmailError] = useState("");// This is used to set the email error
  const [numberError, setNumberError] = useState("");// This is used to set the number error
  const [emptyCartError, setEmptyCartError] = useState("");// This is used to set the empty cart error

  const [closeModalOpen, setCloseModalOpen] = useState(false);// This is used to set the close modal open

  const ordersRef = collection(db, "Orders");// This is used to get the orders reference
  // This is used to generate the order number
  const generateOrderNumber = () => {
    const min = 1;
    const max = 99999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;// This is used to generate the random number
    const orderNumber = randomNumber.toString().padStart(5, '0');// This is used to pad the order number
    return orderNumber;// This is used to return the order number
  };
  const orderNumber = generateOrderNumber();// This is used to generate the order number

  const dispatch = useDispatch();// This is used to dispatch the cart actions
  const clearCart = () => {// This is used to clear the cart
    dispatch(cartActions.clear());// This is used to dispatch the clear cart action
  };

  const shippingInfo = [];// This is used to store the shipping info
  const cartItems = useSelector((state) => state.cart.cartItems);// This is used to get the cart items
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);// This is used to get the cart total amount
  const shippingCost = 3;// This is used to set the shipping cost

  const totalAmount = cartTotalAmount + Number(shippingCost);// This is used to calculate the total amount

  // This is used to handle the submit
  const submitHandler = async (e) => {
    e.preventDefault();// This is used to prevent the default behaviour

    const currentTime = new Date().getHours();// This is used to get the current time
    const workHoursStart = 18;// This is used to set the work hours start
    const workHoursEnd = 22;// This is used to set the work hours end
    const currentDay = new Date().getDay();// This is used to get the current day
    const monday = 1;// This is used to set the monday const
    const tuesday = 2;// This is used to set the tuesday const

    // Check if order is placed between 6pm and 10pm on weekdays
    if (
      currentTime >= workHoursStart &&
      currentTime < workHoursEnd &&
      currentDay !== monday &&
      currentDay !== tuesday
    ) {
      // Check if email,cart and phone number are valid
      let emailError = "";
      let numberError = "";
      let emptyCartError= "";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// This is used to set the email regex
      const phoneRegex = /^(\+353|0)\d{9}$/;// This is used to set the phone regex
      
      // Check if email and phone number are valid
      if (!emailRegex.test(enterEmail)) {
        emailError = "Invalid email address";
      }
      if (!phoneRegex.test(enterNumber)) {
        numberError = "Invalid phone number";
      }
      // Check if cart is empty
      if (cartItems.length === 0){
        emptyCartError = "Your cart is empty, Please add items to your cart to place an order!";
      }
      setEmailError(emailError);// This is used to set the email error
      setNumberError(numberError);// This is used to set the number error
      setEmptyCartError(emptyCartError);// This is used to set the empty cart error

      // place order if cart isnt empty
      if (!emptyCartError) {
      // Place order if email and phone number are valid
      if (!emailError && !numberError ) {
        let userShippingAddress;// This is used to store the user shipping address
        // Check if delivery option is delivery
        if (deliveryOption === "delivery") {
          userShippingAddress = {
            orderNumber: orderNumber,
            name: enterName,
            email: enterEmail,
            phone: enterNumber,
            address: enterCity,
            eirCode: eirCode,
            cartItems: cartItems,
          };
        } else { // Check if delivery option is collection
          userShippingAddress = {
            orderNumber: orderNumber,
            name: enterName,
            email: enterEmail,
            phone: enterNumber,
            collectionTime: collectionTime,
            cartItems: cartItems,
          };
        }
        shippingInfo.push(userShippingAddress);// This is used to push the user shipping address to the shipping info array

        console.log(shippingInfo);// This is used to log the shipping info
        console.log(cartItems);// This is used to log the cart items

        // Add order to firestore
        try {
          await addDoc(ordersRef, userShippingAddress);// This is used to add the user shipping address to the orders collection
          const message = `Thank you for your order!\n      Order No: ${orderNumber}`;// This is used to set the message
          alert(message);// This is used to alert the user
          clearCart();// This is used to clear the cart
          document.getElementById("checkout__form").reset();//  
        } catch (err) {// This is used to catch any errors
          console.error(err);
        }
      }
    }
    } else {// This is used to alert the user if the order is placed outside of the working hours
      setCloseModalOpen(true);
    }
  };

  // This is used to handle the close modal
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Order Information</h6>
              <Form
                className="checkout__form"
                id="checkout__form"
                onSubmit={submitHandler}// This is used to handle the submit
              >
                <FormGroup>
                  Choose an option below:
                  <Input
                    type="select"
                    name="deliveryOption"
                    id="deliveryOption"
                    value={deliveryOption}// This is used to set the delivery option
                    onChange={(e) => setDeliveryOption(e.target.value)}// This is used to handle the change
                  >
                    <option value="delivery">Delivery</option>
                    <option value="collection">Collection</option>
                  </Input>
                </FormGroup>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}// This is used to handle the change
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    // This is used to handle the change
                    onChange={(e) => {
                      const value = e.target.value.trim();// This is used to trim the value
                      if (value.includes("@") && value.includes(".")) {// This is used to check if the email contains @ and .
                        setEnterEmail(value);// This is used to set the email
                      } else {
                        setEnterEmail("");// This is used to set the email to empty
                      }
                    }}
                  />
                  {/* // This is used to display the email error if true */}
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    required
                    // This is used to handle the change
                    onChange={(e) => {
                      const value = e.target.value.trim();// This is used to trim the value
                      if (/^\d+$/.test(value)) {// This is used to check if the value is a number
                        if (value.startsWith("0")) {// This is used to check if the value starts with 0
                          if (value.length === 10) {// This is used to check if the value length is 10
                            setEnterNumber(value);// This is used to set the number
                          } else {
                            setEnterNumber("");
                          }
                        } else if (value.startsWith("+353")) {// This is used to check if the value starts with +353
                          if (value.length === 13) {// This is used to check if the value length is 13
                            setEnterNumber(value);// This is used to set the number
                          } else {
                            setEnterNumber("");
                          }
                        }
                      } else {
                        setEnterNumber("");
                      }
                    }}
                  />
                  {/* // This is used to display the number error if true */}
                  {numberError && (
                    <p className="error-message">{numberError}</p>
                  )}
                </div>
                {/* // This is used to check if the delivery option is delivery */}
                {deliveryOption === "delivery" ? (
                  <div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your address"
                        required
                        onChange={(e) => setEnterCity(e.target.value)}// This is used to handle the change
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your eircode"
                        required
                        onChange={(e) => setEirCode(e.target.value)}// This is used to handle the change
                      />
                    </div>
                  </div>
                ) : (
                  <div className="form__group">
                    Time:
                    <Input
                      type="select"
                      name="collectionTime"
                      id="collectionTime"
                      value={collectionTime}
                      onChange={(e) => setCollectionTime(e.target.value)}// This is used to handle the change
                    >
                      {/* // This is used to display the collection times */}
                      <option value="asap">asap</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                    </Input>
                  </div>
                )}
                {/* // This is used to display the delivery option */}
               <div className="d-sm-none d-flex justify-content-center mb-3">
                    <button
                      className="addTOCart__btn1"
                      onClick={submitHandler}
                      // style={{ backgroundColor: "#CD853F", color: "white" }}
                    >
                      Place Order
                    </button>
                    
                  </div>
                  {/* // This is used to display the delivery option */}
                  <div className="d-none d-sm-flex justify-content-start">
                    <button
                      className="addTOCart__btn"
                      onClick={submitHandler}
                      // style={{ backgroundColor: "#CD853F", color: "white" }}
                    >
                      Place Order
                    </button>
              </div>
              {/* // This is used to display the error if true */}
              {emptyCartError && (
                    <p className="error-message">{emptyCartError}</p>
                  )}
              </Form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="mb-4">Order Summary</h6>
                <div className="checkout__cart">
                  <p>
                    {/* // This is used to display the cart total */}
                    Cart Total: <span>€{cartTotalAmount}</span>
                  </p>
                  {/* // This is used to display the delivery cost if the delivery option is delivery */}
                  {deliveryOption === "delivery" && (
                    <p>
                      Delivery: <span>€{shippingCost}</span>
                    </p>
                  )}
                  {/* // This is used to display the delivery cost if the delivery option is not delivery */}
                  {deliveryOption !== "delivery" && (
                    <p>
                      Delivery: <span>€{0}</span>
                    </p>
                  )}
                  {/* // This is used to display the total amount */} 
                  {deliveryOption === "delivery" && (
                    <p className="checkout__total">
                      Total: <span>€{totalAmount}</span>
                    </p>
                  )}
                  {/* // This is used to display the total amount */}
                  {deliveryOption !== "delivery" && (
                    <p className="checkout__total">
                      Total: <span>€{totalAmount - shippingCost}</span>
                    </p>
                  )}
                </div>
                {/* // This is used to display the modal if true */}
                {closeModalOpen && (
                  <CloseModal
                    showModal={closeModalOpen}
                    closeModal={() => setCloseModalOpen(false)} // This is used to close the modal
                    message={
                      <div style={{ textAlign: "center", color: "red" }}>
                        Sorry, we are currently closed. Please come back between{" "}
                        <br /> (6:00 pm - 10:00 pm) from (Wed-Sun).
                      </div>
                    }
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
