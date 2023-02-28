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
  const [loggedIn, setLoggedIn] = useState(false);
  const [setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleEmailAndPasswordLogin = async (e) => {
    e.preventDefault();

    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    // Check if email and name are valid
    let emailError = "";
    let nameError = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/;

    if (!emailRegex.test(email)) {
      emailError = "Invalid email address";
    }
    if (!nameRegex.test(name)) {
      nameError = "Please enter your full name";
    }
    setEmailError(emailError);
    setNameError(nameError);

    if (!emailError && !nameError) {
      try {
        await createUserWithEmailAndPassword(auth, email, name);
        setLoggedIn(true);
        setSuccessMessage(`${name}, you have successfully signed up!`);
      } catch (error) {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          setErrorMessage("This email address is already in use.");
        }
        setSuccessMessage(""); // Clear success message on error
        console.log(error);
      }
    }
    // Clear error messages after 2 seconds
    setTimeout(() => {
      setEmailError("");
      setNameError("");
      setSuccessMessage("");
    }, 3000);
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
              <form className="form mb-5">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                  {nameError && <p className="error-message">{nameError}</p>}
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <p>
                  For special discounts/coupon codes, make sure to hit that sign
                  up button to be subscribed to our newsletter
                </p>
                <button
                  onClick={handleEmailAndPasswordLogin}
                  className="addTOCart__btn"
                >
                  Sign Up
                </button>
                {loggedIn && (
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
