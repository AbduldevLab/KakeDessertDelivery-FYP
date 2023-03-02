
import React from "react";

const Helmet = (props) => {
  
  let title;

  if (document.referrer && document.referrer.includes("google.com")) {
    // Add " - Grab your kake today!" to the title when user comes from a search engine
    title = `Kake Dessert Delivery - Grab your Kake today!`;
  } else {
    // Otherwise, show just the page title
    title = `Kake Dessert Delivery - ${props.title}`;
  }

  document.title = title;

  return <div className="w-100">{props.children}</div>;
};

export default Helmet;

