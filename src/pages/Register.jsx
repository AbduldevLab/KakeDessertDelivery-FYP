import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import {
  auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "../config/firebase";

import "../styles/register.css";

const Register = () => {
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const [setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailAndPasswordLogin = async (e) => {
    e.preventDefault();

    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    try {
      await createUserWithEmailAndPassword(auth, email, name);
      setLoggedIn(true);
      setSuccessMessage(`${name}, you have Successfully signed up!`);
    } catch (error) {
      const errorCode = error.code;
      let errorMessage = "An error occurred. Please try again.";
      if (errorCode === "auth/email-already-in-use") {
        errorMessage =
          "The email address is already in use by another account.";
      } else if (errorCode === "auth/invalid-email") {
        errorMessage = "The email address is invalid.";
      }
      setErrorMessage(errorMessage);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      console.log(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setLoggedIn(true);
      setSuccessMessage("Successfully signed up!");
      setErrorMessage(""); // Clear error message on success
    } catch (error) {
      let errorMessage =
        "The email address is already in use by another account.";
      setErrorMessage(errorMessage);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      console.log(error);
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form
                className="form mb-5"
                onSubmit={handleEmailAndPasswordLogin}
              >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <p>
                  For special discounts/coupon codes, make sure to hit hit that
                  sign up button to be subscribed to our newsletter
                </p>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}
              </form>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <button className="addTOCart__btn" onClick={handleGoogleLogin}>
                  Sign Up with Google
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
