// This is the 404 page
import React from "react";
import logo from ".././assets/images/kake-logo.png";

// This is the 404 page
const NotFound = () => {
  // Return the 404 page
  return (
    <div className="logo">
      {/* // This is the logo */}
        <img src={logo} alt="logo" /> 
    <div>
      {/* // This is the 404 message */}
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
    </div>
    </div>
  );
};

export default NotFound;
