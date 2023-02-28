import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import CloseModal from "../components/Modal/ClosedModal";

import { cartActions } from "../store/shopping-cart/cartSlice";

import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

import "../styles/checkout.css";

const Checkout = () => {
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [eirCode, setEirCode] = useState("");
  const [collectionTime, setCollectionTime] = useState("asap");

  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const [closeModalOpen, setCloseModalOpen] = useState(false);

  const ordersRef = collection(db, "Orders");
  const generateOrderNumber = () => {
    const min = 1;
    const max = 99999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const orderNumber = randomNumber.toString().padStart(5, '0');
    return orderNumber;
  };
  const orderNumber = generateOrderNumber();

  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(cartActions.clear());
  };

  const shippingInfo = [];
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 3;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = async (e) => {
    e.preventDefault();

    const currentTime = new Date().getHours();
    const workHoursStart = 0;
    const workHoursEnd = 24;
    const currentDay = new Date().getDay();
    const monday = 0;
    const tuesday = 0;

    if (
      currentTime >= workHoursStart &&
      currentTime < workHoursEnd &&
      currentDay !== monday &&
      currentDay !== tuesday
    ) {
      // Check if email and phone number are valid
      let emailError = "";
      let numberError = "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^(\+353|0)\d{9}$/;
      if (!emailRegex.test(enterEmail)) {
        emailError = "Invalid email address";
      }
      if (!phoneRegex.test(enterNumber)) {
        numberError = "Invalid phone number";
      }
      setEmailError(emailError);
      setNumberError(numberError);
      // Place order if email and phone number are valid
      if (!emailError && !numberError) {
        let userShippingAddress;
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
        } else {
          userShippingAddress = {
            orderNumber: orderNumber,
            name: enterName,
            email: enterEmail,
            phone: enterNumber,
            collectionTime: collectionTime,
            cartItems: cartItems,
          };
        }
        shippingInfo.push(userShippingAddress);

        console.log(shippingInfo);
        console.log(cartItems);

        try {
          await addDoc(ordersRef, userShippingAddress);
          alert(`Thank you! Your order number is ${orderNumber}.`);
          clearCart();
          document.getElementById("checkout__form").reset();
        } catch (err) {
          console.error(err);
        }
      }
    } else {
      setCloseModalOpen(true);
    }
  };

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
                onSubmit={submitHandler}
              >
                <FormGroup>
                  Choose an option below:
                  <Input
                    type="select"
                    name="deliveryOption"
                    id="deliveryOption"
                    value={deliveryOption}
                    onChange={(e) => setDeliveryOption(e.target.value)}
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
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => {
                      const value = e.target.value.trim();
                      if (value.includes("@") && value.includes(".")) {
                        setEnterEmail(value);
                      } else {
                        setEnterEmail("");
                      }
                    }}
                  />
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    required
                    onChange={(e) => {
                      const value = e.target.value.trim();
                      if (/^\d+$/.test(value)) {
                        if (value.startsWith("0")) {
                          if (value.length === 10) {
                            setEnterNumber(value);
                          } else {
                            setEnterNumber("");
                          }
                        } else if (value.startsWith("+353")) {
                          if (value.length === 13) {
                            setEnterNumber(value);
                          } else {
                            setEnterNumber("");
                          }
                        }
                      } else {
                        setEnterNumber("");
                      }
                    }}
                  />
                  {numberError && (
                    <p className="error-message">{numberError}</p>
                  )}
                </div>
                {deliveryOption === "delivery" ? (
                  <div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your address"
                        required
                        onChange={(e) => setEnterCity(e.target.value)}
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your eircode"
                        required
                        onChange={(e) => setEirCode(e.target.value)}
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
                      onChange={(e) => setCollectionTime(e.target.value)}
                    >
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
                <button
                  className="btn"
                  onClick={submitHandler}
                  style={{ backgroundColor: "#CD853F", color: "white" }}
                >
                  Place Order
                </button>
              </Form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="mb-4">Order Summary</h6>
                <div className="checkout__cart">
                  <p>
                    Cart Total: <span>€{cartTotalAmount}</span>
                  </p>
                  {deliveryOption === "delivery" && (
                    <p>
                      Delivery: <span>€{shippingCost}</span>
                    </p>
                  )}
                  {deliveryOption !== "delivery" && (
                    <p>
                      Delivery: <span>€{0}</span>
                    </p>
                  )}
                  {deliveryOption === "delivery" && (
                    <p className="checkout__total">
                      Total: <span>€{totalAmount}</span>
                    </p>
                  )}
                  {deliveryOption !== "delivery" && (
                    <p className="checkout__total">
                      Total: <span>€{totalAmount - shippingCost}</span>
                    </p>
                  )}
                </div>
                {closeModalOpen && (
                  <CloseModal
                    showModal={closeModalOpen}
                    closeModal={() => setCloseModalOpen(false)}
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
