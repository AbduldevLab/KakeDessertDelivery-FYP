// This is the login page for the admin dashboard
import React, {useState} from "react";
//This is used to import the react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import logo from "../.././assets/images/kake-logo.png";

//This is used to import the firebase components
import { auth, signInWithEmailAndPassword } from "../../config/firebase.js";

import "../../styles/AdminDash/authentication.css";

//This is the Signin component
const Signin = () => {
     
    const [email, setEmail] = useState("");//This is used to set the email
    const [password, setPassword] = useState("");//This is used to set the password
    const [errorMessage, setErrorMessage] = useState("");//This is used to set the error message
    const navigate = useNavigate(); // initialize useNavigate hook
    
    const handleEmailAndPasswordLogin = async (e) => {//This is used to handle the email and password login
        e.preventDefault();//This is used to prevent the default action
         
        try {
            // Sign in with email and password
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;//This is used to get the user id
            if (userId === "CWILkMa7dzRtvWPdrk7AYm859w52") {//This is used to check if the user is admin or not
                // The user has been signed in successfully
                alert("Successfully logged in");
                  
                // Set the authentication status in localStorage
                localStorage.setItem("isAuthenticated", true);
                navigate("/admin/dashboard"); // redirect user to dashboard page
            }
            // Handle errors here
        } catch (error) {
            // Handle errors here
            setErrorMessage("Wrong email-address or password!");
        }

        // Clear error messages after 2 seconds
    setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    };
      
    //This is used to return the Signin component
    return (
        <React.Fragment>
            <div className="auth-multi-layout">
                <div className="auth-box">
                    <div className="auth-header">
                        <div className="auth-header-logo">
                            <img src={logo} alt="" className="auth-header-logo-img" />
                        </div>
                        <h1 className="auth-header-title">Welcome kake Employee</h1>
                        <p className="auth-header-subtitle">
                            Sign-in to kake admin panel
                        </p>
                    </div>
                    <div className="auth-body">
                        <form className="auth-form-validation" >
                            <div className="input-field">
                                <label htmlFor="email" className="input-label">
                                    Email address
                                </label>
                                {/* //This is used to set the email */}
                                <input
                                    type="text"
                                    className="input-control"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    autoComplete="off"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password" className="input-label">
                                    Password
                                </label>
                                {/* //This is used to set the password */}
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="input-control"
                                    placeholder="Password"
                                    autoComplete="off"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex-end">
                                {/* //This is used to redirect to the forgot password page */}
                                <Link to="/admin/forgotPassword" className="link-end">
                                    Forgot password?
                                </Link>
                            </div>
                            {/* //This is used to handle the email and password login */}
                            <button type="submit" className="btn-submit" onClick={handleEmailAndPasswordLogin}>
                                Sign in
                            </button>
                            {/* //This is used to display the error message if true */}
                            {errorMessage && (
                                <div className="error-message">{errorMessage}</div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signin;
