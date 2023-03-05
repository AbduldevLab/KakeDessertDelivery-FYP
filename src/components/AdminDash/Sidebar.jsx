import React from "react";
import logo from "../../assets/images/kake-logo.png";
import sidebar_routes from "../../assets/json/sidebar_routes.json";
import "../../styles/AdminDash/panel.css";
import { Link, useLocation } from "react-router-dom";

// This component is used to display the sidebar item on the admin dashboard
const SidebarItem = (props) => {
  const active = props.path === props.location.pathname ? "active" : "";
  
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
  
  return (
    <div className="admin-content">
      <div className="admin-wrapper">
        <div className="admin-sidebar">
          <div className="admin-sidebar-header">
            <div className="admin-sidebar-logo">
              <img src={logo} alt="" className="img-logo" />
              <h1 className="logo-name">Kake Panel</h1>
            </div>
          </div>
          <div className="admin-sidebar-menu">
            {sidebar_routes.map((item, idx) => (
              <Link className="admin-sidebar-link" key={idx} to={item.route}> 
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
