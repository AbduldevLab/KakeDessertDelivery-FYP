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
      setSuccessMessage(`${name}, you have successfully signed up!`);
      setErrorMessage(""); // Clear error message on success
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        setErrorMessage(
          "This email address is already in use."
        );
      } else if (errorCode === "auth/invalid-email") {
        setErrorMessage("This email address is invalid.");
      } else {
        setErrorMessage("Please enter your full name.");
      }
      setSuccessMessage(""); // Clear success message on error
      console.log(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
  
    const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    setSuccessMessage("Successfully signed up!");
    setErrorMessage(""); // Clear error message on success
  } catch (error) {
    setErrorMessage("Error occurred, please try again.");
    setSuccessMessage(""); // Clear success message on error
  }
  };
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5">
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
                  For special discounts/coupon codes, make sure to hit that
                  sign up button to be subscribed to our newsletter
                </p>
                <button
                  onClick={handleEmailAndPasswordLogin}
                  className="addTOCart__btn"
                >
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
