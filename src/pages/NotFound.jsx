import React from "react";
import logo from ".././assets/images/kake-logo.png";

const NotFound = () => {
  return (
    <div className="logo">
        <img src={logo} alt="logo" />
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
    </div>
    </div>
  );
};

export default NotFound;
