import React from "react"; //This is the header component for the admin dashboard
import { Link, useNavigate } from "react-router-dom";
import "../../styles/AdminDash/panel.css"; //This is the header component for the admin dashboard

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate(); //This navigates the user to the login page when the logout button is clicked

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); //This removes the token from the local storage
    alert("Successfully logged out!"); //This is an alert to notify the user that they have been logged out
    window.location.reload(); //This reloads the page
    navigate("/admin", { replace: true });; //This navigates the user to the login page
  };


//This is the header component for the admin dashboard
  return (
    <div className="admin-header">
      <div className="header-buttons-left">
        <Link to="/admin/dashboard" className="header-button">
          <i className="bx bx-user header-button-icon"></i>
          Profile
        </Link>
      </div>
      <div className="header-buttons-center">
        <Link className="header-button1" onClick={handleLogout}>
          <i className="bx bx-power-off header-button-icon"></i>
          Logout
        </Link>
      </div>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        <i className="bx bx-menu toggle-sidebar-icon"></i>
      </button>
    </div>
  );
};

export default Header;