import React from "react";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import trailor from "../../assets/images/hero.jpg";
import "../../styles/AdminDash/panel.css";

const Header = () => {
  const navigate = useNavigate(); // initialize useNavigate hook

  const handleLogout = () => {
    // Clear the user's session or token from storage here
     // Remove the authentication status from localStorage
    localStorage.removeItem("isAuthenticated");
    // Redirect the user to the login page
    navigate("/admin");
  };

  return (
    <div className="admin-header">
      <Dropdown
        avatar={trailor}
        menu={
          <>
            <li className="dropdown-list">
              <Link to="/admin/dashboard" className="dropdown-link">
                <i className="bx bx-user dropdown-link-icon"></i>
                Profile
              </Link>
            </li>
            <li className="dropdown-list">
              <button className="dropdown-link" onClick={handleLogout}>
                <i className="bx bx-power-off dropdown-link-icon"></i>
                Logout
              </button>
            </li>
          </>
        }
      />
    </div>
  );
};

export default Header;
