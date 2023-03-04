// Description: This is the forgot password page for admin dashboard
import React, { useState } from "react"; //This is used to import the react
import { Link } from "react-router-dom"; //This is used to import the react-router-dom components
import logo from "../.././assets/images/kake-logo.png";
//This is used to import the firebase components
import { auth, fetchSignInMethodsForEmail, sendPasswordResetEmail } from "../../config/firebase.js";
import "../../styles/AdminDash/authentication.css";

//This is the ForgotPassword component
const ForgotPassword = () => {
  const [email, setEmail] = useState(""); //This is used to set the email
  const [error, setError] = useState(null); //This is used to set the error
  const [success, setSuccess] = useState(null); //This is used to set the success

  //This is used to handle the submit
  const handleSubmit = async (e) => {
    e.preventDefault(); //This is used to prevent the default action
    try {
      // Check if user with given email exists or not
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length === 0) { //This is used to check if the user with given email exists or not
        setError("This email-address isn't associated with kake");
      } else {
        // Send password reset email
        await sendPasswordResetEmail(auth, email);
        setSuccess("Successfully sent password-reset-email, please check your inbox");
      }
      // Clear input field
    } catch (error) {
      setError("Error occureed, please try again.");
    }

    // Clear error messages after 2 seconds
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  //This is used to return the ForgotPassword component
  return (
    <React.Fragment>
      <div className="auth-multi-layout">
        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-header-logo forgot-img">
              <img src={logo} alt="" className="auth-header-logo-img" />
            </div>
          </div>
          <div className="auth-body">
            <h1 className="auth-header-title1">Forgot Password?</h1>
            <p className="auth-header-subtitle forgot-subtitle">
              Enter the email associated with kake admin account and we'll send you instructions to reset your password.
            </p>
            {/* //This is used to display the form */}
            <form className="auth-form-validation" onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="email" className="input-label">
                  Email address
                </label>
                {/* //This is used to display the input field */}
                <input
                  type="email"
                  className="input-control"
                  id="email"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} //This is used to set the email
                  required
                />
              </div>
              <button type="submit" className="btn-submit">
                Send Link Email
              </button>
              <Link to="/admin" className="btn-back-to-login">
                Back to login
              </Link>
              {/* //This is used to display the error message if true*/}
              {error && <div className="error-message">{error}</div>}
              {/* //This is used to display the success message if true */}
              {success && <div className="green-message">{success}</div>}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
