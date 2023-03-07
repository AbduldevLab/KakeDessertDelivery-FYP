import React, { useState } from "react";
import logo from "../../assets/images/kake-logo.png";
import Header from "./Header"; //This is the header component for the admin dashboard
//This sidebar_routes.json file contains the sidebar items
import sidebar_routes from "../../assets/json/sidebar_routes.json";
import "../../styles/AdminDash/panel.css";
import { Link, useLocation } from "react-router-dom"; //This link and useLocation are used to navigate the user to the dashboard page when the logo is clicked

// This component is used to display the sidebar item on the admin dashboard
const SidebarItem = (props) => {
  const active = props.path === props.location.pathname ? "active" : ""; //Thus is used to highlight the active sidebar item

  //This is the sidebar component for the admin dashboard
  return (
    <div className={`admin-sidebar-item ${active}`}>
      <div className="admin-sidebar-icon">
        <i className={props.icon}></i>
      </div>
      <span className="admin-sidebar-name">{props.name}</span>
    </div>
  );
};

// This component is used to display the sidebar on the admin dashboard
const Sidebar = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false); //This is used to toggle the sidebar

  //This is used to toggle the sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  //This is used to hide the sidebar when a sidebar item is clicked
  const handleLinkClick = () => {
    setShowSidebar(false);
  };

  //This is the sidebar component for the admin dashboard
  return (
    <div className="admin-content">
      <div className="admin-wrapper">
         <Header toggleSidebar={toggleSidebar} /> {/*//This is the header component for the admin dashboard */}
        <div className={`admin-sidebar ${showSidebar ? "show" : ""}`}>
          <div className="admin-sidebar-header">
            <Link to="/admin/dashboard">
              <div className="admin-sidebar-logo">
                <img src={logo} alt="" className="img-logo" />
                <h1 className="logo-name">Kake Panel</h1>
              </div>
            </Link>
          </div>
          <div className="admin-sidebar-menu">
            {/* //This is used to map through the sidebar items */}
            {sidebar_routes.map((item, idx) => (
              <Link
                className="admin-sidebar-link"
                key={idx}
                to={item.route}
                onClick={handleLinkClick}
              >
                <SidebarItem
                  name={item.display_name}
                  icon={item.icon}
                  path={item.route}
                  location={location}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
