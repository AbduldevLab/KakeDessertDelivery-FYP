//This file is the entry point of the whole application that is the main component of the whole application
import React from "react";
import { createRoot } from "react-dom/client"; // import createRoot from react-dom/client to use createRoot instead of ReactDOM.render
import App from "./App"; // import App from App.js
import "bootstrap/dist/css/bootstrap.css"; // import bootstrap css libary
import "remixicon/fonts/remixicon.css"; // import remixicon css libary for icons
import "slick-carousel/slick/slick.css"; // import slick css libary
import "slick-carousel/slick/slick-theme.css"; // import slick theme css
// import "./assets/css/bootstrap-grid.min.css";
import "./styles/AdminDash/icons/boxicons-2/css/boxicons.min.css"; // import boxicons css libary
import "./index.css"; // import index css

import store from "./store/store.jsx"; // import store from store.js file
import { Provider } from "react-redux"; // import Provider from react-redux

import { BrowserRouter as Router } from "react-router-dom"; // import BrowserRouter as Router from react-router-dom

// use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  // use StrictMode to check for any potential problems in an application
  <React.StrictMode>
    {/* // use Router to wrap the whole application */}
    <Router> 
    {/* // use Provider to wrap the whole application */}
      <Provider store={store}> 
      {/* // render App component */}
        <App /> 
        {/* // close Provider */}
      </Provider> 
    </Router>
  </React.StrictMode>
);
