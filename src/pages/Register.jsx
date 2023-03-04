// This is the signup page
import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet.jsx";// Helmet is a component that allows you to change the title of the page
import CommonSection from "../components/UI/common-section/CommonSection.jsx";// CommonSection is a component that allows you to change the title of the page
import { Container, Row, Col } from "reactstrap";// Container, Row, Col are components that allow you to create a grid system

// Importing firebase
import {
  auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "../config/firebase.js";

import "../styles/register.css";

// This is the signup page
const Register = () => {
  const signupNameRef = useRef();// useRef is a hook that allows you to create a reference to a DOM node
  const signupEmailRef = useRef();// useRef is a hook that allows you to create a reference to a DOM node
  const [loggedIn, setLoggedIn] = useState(false);// useState is a hook that allows you to create a state variable
  const [setErrorMessage] = useState("");// useState is a hook that allows you to create a state variable
  const [successMessage, setSuccessMessage] = useState("");// useState is a hook that allows you to create a state variable

  const [emailError, setEmailError] = useState("");// useState is a hook that allows you to create a state variable
  const [nameError, setNameError] = useState("");// useState is a hook that allows you to create a state variable

  // This function handles the signup with email and password
  const handleEmailAndPasswordLogin = async (e) => {
    e.preventDefault();// This prevents the page from reloading when the form is submitted

    const name = signupNameRef.current.value;// This gets the value of the name input
    const email = signupEmailRef.current.value;// This gets the value of the email input
    // Check if email and name are valid
    let emailError = "";
    let nameError = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// This is a regular expression that checks if the email is valid
    const nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/;// This is a regular expression that checks if the name is valid

    // Check if email and name are valid
    if (!emailRegex.test(email)) {
      emailError = "Invalid email address";
    }
    if (!nameRegex.test(name)) {
      nameError = "Please enter your full name";
    }
    setEmailError(emailError);// This sets the email error
    setNameError(nameError);// This sets the name error

    // If there are no errors, create the user
    if (!emailError && !nameError) {
      try {
        await createUserWithEmailAndPassword(auth, email, name);// This creates the user
        setLoggedIn(true);// This sets the loggedIn state to true
        setSuccessMessage(`${name}, you have successfully signed up!`);// This sets the success message
      } catch (error) {// If there is an error, set the error message
        const errorCode = error.code;// This gets the error code
        if (errorCode === "auth/email-already-in-use") {// If the error code is "auth/email-already-in-use", set the error message
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

  // This function handles the signup with Google
  const handleGoogleLogin = async (e) => {
    e.preventDefault();// This prevents the page from reloading when the form is submitted

    const provider = new GoogleAuthProvider();// This creates a new GoogleAuthProvider
    try {
      await signInWithPopup(auth, provider);// This signs the user in with Google
      setSuccessMessage("Successfully signed up!");
      setErrorMessage(""); // Clear error message on success
    } catch (error) {// If there is an error, set the error message
      setErrorMessage("Error occurred, please try again.");
      setSuccessMessage(""); // Clear success message on error
      console.log(error);
    }
  };

  // This is the signup page
  return (
    <Helmet title="Signup">
      <body id="top1">
      <CommonSection title="Signup" />
      <section>
        <Container>
          {/* // This is the signup form */}
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
                  {/* // This displays the name error for the name. full name require* */}
                  {nameError && <p className="error-message">{nameError}</p>}
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                  {/* // This displays the email error for the email. email require* */}
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <p>
                  For special discounts/coupon codes, make sure to hit that sign
                  up button to be subscribed to our newsletter
                </p>
                {/* // This is the signup button */}
                <button
                  onClick={handleEmailAndPasswordLogin}
                  className="addTOCart__btn"
                >
                  Sign-up
                  {/* // This displays the success message if the user is logged in */}
                </button>
                {loggedIn && (
                  <div className="success-message">{successMessage}</div>
                )}
              </form>
              
              <div className="d-flex justify-content-center align-items-center mb-3">
                {/* // This is the signup with Google button */}
                <button className="addTOCart__btn" onClick={handleGoogleLogin}>
                  Sign-up with Google
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </body>
    </Helmet>
  );
};

export default Register;
