import React from "react";

const Helmet = (props) => {
  const title = props.title.split(" - ")[0]; // Remove " - Home" from title
  document.title = "Kake Dessert Delivery - " + title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;


// import React, { useState } from "react";

// const Helmet = (props) => {
//   const [showTitle, setShowTitle] = useState(false);

//   const handleClick = () => {
//     setShowTitle(true);
//   };

//   document.title = "Kake Dessert Delivery" + (showTitle ? " - " + props.title : "");
  
//   return (
//     <div className="w-100">
//       <a href="#" onClick={handleClick}>Link/Site</a>
//       {showTitle && <span> - {props.title}</span>}
//       {props.children}
//     </div>
//   );
// };

// export default Helmet;