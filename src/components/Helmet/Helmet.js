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

import React, { useState, useEffect } from "react";

const Helmet = (props) => {
  const [showTitle, setShowTitle] = useState(false);

  const handleClick = () => {
    setShowTitle(true);
    window.history.pushState(null, "", "/home"); // update URL when navigating to new page
  };

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === "/") {
        setShowTitle(false);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  document.title =
    "Kake Dessert Delivery - Grab your kake today!" +
    (showTitle ? " - " + props.title : "");

  return (
    <div className="w-100">
      <a href="/" onClick={handleClick}>
        Home
      </a>
      {showTitle && <span> - {props.title}</span>}
      {props.children}
    </div>
  );
};

export default Helmet;

