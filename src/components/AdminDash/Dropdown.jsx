import React, { useRef } from "react";
import  "../../styles/AdminDash/panel.css";

//This is the dropdown component
const DropdownAction = (MenuRef, ToggleRef) => {
  document.addEventListener("mousedown", (e) => {
    // This is used to check if the dropdown is clicked
    if (ToggleRef.current && ToggleRef.current.contains(e.target)) {
      MenuRef.current.classList.toggle("show");
    } else {
      //this is used to check if the dropdown is not clicked
      if (MenuRef.current && !MenuRef.current.contains(e.target)) {
        MenuRef.current.classList.remove("show");
      }
    }
  });
};
//This is the dropdown component
const Dropdown = (props) => {
  const toggleRef = useRef();
  const menuRef = useRef();
  DropdownAction(menuRef, toggleRef);
  //This is the return statement
  return (
    <div className="dropdown">
      <button
        className={`dropdown-toggle ${
          props.icon ? "toggle-icon" : "toggle-btn"
        } `}
        ref={toggleRef}
      >
        {/* this is used to check if the dropdown has an icon */}
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdown-toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {/* This is used to check if the dropdown has an avatar */}
        {props.avatar ? (
          <div className="dropdown-toggle-avatar">
            <img
              src={props.avatar}
              alt={props.avatar}
              className="dropdown-toggle-avatar-img"
            />
          </div>
        ) : (
          ""
        )}
      </button>
      {/* This is used to check if the dropdown has a menu */}
      <div
        className={`dropdown-menu ${props.menuClass ? props.menuClass : ""}`}
        ref={menuRef}
      >
        {props.menu}
      </div>
    </div>
  );
};

export default Dropdown;
