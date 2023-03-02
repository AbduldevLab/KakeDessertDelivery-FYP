import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../.././assets/images/kake-logo.png";

import { auth, signInWithEmailAndPassword } from "../../config/firebase.js";

import "../../styles/AdminDash/signin.css";

const Signin = () => {
     
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleEmailAndPasswordLogin = async (e) => {
        e.preventDefault();
         
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;
            if (userId === "CWILkMa7dzRtvWPdrk7AYm859w52") {
                // The user has been signed in successfully
                alert("Successfully logged in");
            } else {
                // User ID does not match
                setErrorMessage("Wrong email-address or password!");
            }
        } catch (error) {
            // Handle errors here
            setErrorMessage("Error ocurred, please try again.");
        }

        // Clear error messages after 2 seconds
    setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    };
      
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
                                <Link to="/forgotPassword" className="link-end">
                                    Forgot password?
                                </Link>
                            </div>
                            <button type="submit" className="btn-submit" onClick={handleEmailAndPasswordLogin}>
                                Sign in
                            </button>
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
