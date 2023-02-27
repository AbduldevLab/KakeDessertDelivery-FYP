// import React from "react";

// const Helmet = (props) => {
//   const title = props.title.split(" - ")[0]; // Remove " - Home" from title
//   document.title = "Kake Dessert Delivery - " + title;
//   return <div className="w-100">{props.children}</div>;
// };

// export default Helmet;


// import React, { useState } from "react";

// const Helmet = (props) => {
//   const [showTitle, setShowTitle] = useState(false);

//   const handleClick = () => {
//     setShowTitle(true);
//   };

//   document.title = "Kake Dessert Delivery - Grab your kake today!" + (showTitle ? " - " + props.title : "");
  
//   return (
//     <div className="w-100">
//       <a href="home" onClick={handleClick}></a>
//       {showTitle && <span> - {props.title}</span>}
//       {props.children}
//     </div>
//   );
// };

// export default Helmet;

import React from "react";

const Helmet = (props) => {
  let title;
  if (document.referrer && document.referrer.includes("google.com")) {
    // Add " - Grab your kake today!" to the title when user comes from a search engine
    title = `Kake Dessert Delivery - ${props.title} - Grab your kake today!`;
  } else {
    // Otherwise, show just the page title
    title = `Kake Dessert Delivery - ${props.title}`;
  }
  document.title = title;

  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
