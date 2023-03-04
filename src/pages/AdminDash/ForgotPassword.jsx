import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../.././assets/images/kake-logo.png";
import { auth, fetchSignInMethodsForEmail, sendPasswordResetEmail } from "../../config/firebase.js";
import "../../styles/AdminDash/authentication.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if user with given email exists or not
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length === 0) {
        setError("This email-address isn't associated with kake");
      } else {
        // Send password reset email
        await sendPasswordResetEmail(auth, email);
        setSuccess("Successfully sent password-reset-email, please check your inbox");
      }
    } catch (error) {
      setError("Error occureed, please try again.");
    }

    // Clear error messages after 2 seconds
    setTimeout(() => {
      setError("");
    }, 3000);
  };

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
            <form className="auth-form-validation" onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="email" className="input-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="input-control"
                  id="email"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-submit">
                Send Link Email
              </button>
              <Link to="/admin" className="btn-back-to-login">
                Back to login
              </Link>
              {error && <div className="error-message">{error}</div>}
              {success && <div className="green-message">{success}</div>}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
