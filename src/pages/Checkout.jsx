import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

const Checkout = () => {
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [collectionTime, setCollectionTime] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 2;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    let userShippingAddress;
    if (deliveryOption === "delivery") {
      userShippingAddress = {
        name: enterName,
        email: enterEmail,
        phone: enterNumber,
        city: enterCity,
        postalCode: postalCode,
      };
    } else {
      userShippingAddress = {
        name: enterName,
        email: enterEmail,
        phone: enterNumber,
        collectionTime: collectionTime,
      };
    }

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Order Information</h6>
              <Form className="checkout__form" onSubmit={submitHandler}>
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
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
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
                        placeholder="Enter your postal code"
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
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
                <button className="btn" style={{ backgroundColor: "#CD853F" , color: "white"}}>Place Order</button>
              </Form>
            </Col>
            <Col lg="4" md="6">
            <div className="checkout__bill">
              <h6 className="mb-4">Order Summary</h6>
              <div className="checkout__cart">
                <p>
                  Cart Total: <span>€{cartTotalAmount}</span>
                </p>
                <p>
                  Delivery: <span>€{shippingCost}</span>
                </p>
                <p className="checkout__total">
                  Total: <span>€{totalAmount}</span>
                </p>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
