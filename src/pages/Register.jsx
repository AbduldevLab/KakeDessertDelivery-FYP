// This is the signup page
import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet.jsx";// Helmet is a component that allows you to change the title of the page
import CommonSection from "../components/UI/common-section/CommonSection.jsx";// CommonSection is a component that allows you to change the title of the page
import { Container, Row, Col, } from "reactstrap";// Container, Row, Col are components that allow you to create a grid system

// Importing firebase
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  db,
} from "../config/firebase.js";

import { collection, addDoc, getDocs, query, where  } from "firebase/firestore";// This is used to import the firebase/firestore

import "../styles/register.css";
const { Timestamp } = require("firebase/firestore");// This is used to import the firebase/firestore


// This is the signup page
const Register = () => {
  const [enterName, setEnterName] = useState("");// This is used to set the enter name
  const [enterEmail, setEnterEmail] = useState("");// This is used to set the enter email
  
  const [errorMessage, setErrorMessage] = useState("");// useState is a hook that allows you to create a state variable
  const [successMessage, setSuccessMessage] = useState("");// useState is a hook that allows you to create a state variable
  const [loggedIn, setLoggedIn] = useState(false);// useState is a hook that allows you to create a state variable
  const [emailError, setEmailError] = useState("");// useState is a hook that allows you to create a state variable
  const [nameError, setNameError] = useState("");// useState is a hook that allows you to create a state variable

  const usersRef = collection(db, "Users");// This is used to get the orders reference

  // This function handles the signup with email and password
  const submitHandler = async (e) => {
    e.preventDefault();// This prevents the page from reloading when the form is submitted

    const timestamp = Timestamp.now();// This is used to get the timestamp
    // Check if email and name are valid
    let emailError = "";
    let nameError = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// This is a regular expression that checks if the email is valid
    const nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/;// This is a regular expression that checks if the name is valid

    // Check if email and name are valid
    if (!emailRegex.test(enterEmail)) {
      emailError = "Invalid email address";
    }
    if (!nameRegex.test(enterName)) {
      nameError = "Please enter your full name";
    }
    setEmailError(emailError);// This sets the email error
    setNameError(nameError);// This sets the name error

    // If there are no errors, create the user
    if (!emailError && !nameError) {
      
      const querySnapshot = await getDocs(
        query(collection(db, "Users"), where("email", "==", enterEmail))
      );
  
      if (!querySnapshot.empty) {
        setErrorMessage("This email address is already in use!");
      } else {
        const userDetails = {
          name: enterName,
          email: enterEmail,
          signupTime: timestamp,
        };
  
        try {
          await addDoc(usersRef, userDetails);// This creates the user
          setLoggedIn(true);// This sets the loggedIn state to true
          setSuccessMessage(`${enterName}, you have successfully signed up!`);// This sets the success message
          document.getElementById("form").reset(); // Reset the name input field to an empty string
        } catch (error) {// If there is an error, set the error message
          setErrorMessage("Error occurred, please try again.");
          setSuccessMessage(""); // Clear success message on error
          console.log(error);
        }
      }
    } 
    // Clear error messages after 2 seconds
    setTimeout(() => {
      setEmailError("");
      setNameError("");
      setSuccessMessage("");
      setErrorMessage("");
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
      document.getElementById("form").reset();
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
              <form className="form mb-5"
                id="form"
                onSubmit={submitHandler}
              >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}// This is used to handle the change
                  />
                  {/* // This displays the name error for the name. full name require* */}
                  {nameError && <p className="error-message">{nameError}</p>}
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
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
                  {/* // This displays the email error for the email. email require* */}
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <p>
                  For special discounts/coupon codes, make sure to hit that sign
                  up button to be subscribed to our newsletter
                </p>
                {/* // This is the signup button */}
                <button
                  onClick={submitHandler}
                  className="addTOCart__btn2"
                >
                  Sign-up
                  {/* // This displays the success message if the user is logged in */}
                </button>
                {loggedIn && (
                  <div className="success-message">{successMessage}</div>
                )}
                {!loggedIn && (
                  <div className="error-message">{errorMessage}</div>
                )}
              </form>
              
              <div className="d-flex justify-content-center align-items-center mb-3">
                {/* // This is the signup with Google button */}
                <button className="addTOCart__btn21" onClick={handleGoogleLogin}>
                  Sign-up with <img className="google"src="https://img.icons8.com/color/48/null/google-logo.png" alt="google"/>
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
