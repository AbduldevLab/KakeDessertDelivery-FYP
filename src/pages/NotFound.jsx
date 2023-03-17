// This is the 404 page
import React from "react";
import logo from ".././assets/images/kake-logo.png";
import Helmet from "../components/Helmet/Helmet.jsx";// This is used to import the Helmet component

import "../styles/notfound.css";
// This is the 404 page
const NotFound = () => {
  // Return the 404 page
  return (
    <Helmet title="404">
    <div className="container1">
    <div className="logo">
      {/* // This is the logo */}
        <img src={logo} alt="logo" /> 
    <div>
      {/* // This is the 404 message */}
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
    </div>
    </div>
    </div>
    </Helmet>
  );
};

export default NotFound;
