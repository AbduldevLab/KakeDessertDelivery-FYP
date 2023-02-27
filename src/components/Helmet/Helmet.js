import React from "react";

const Helmet = (props) => {
  const title = props.title.split(" - ")[0]; // Remove " - Home" from title
  document.title = "Kake Dessert Delivery - " + title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
