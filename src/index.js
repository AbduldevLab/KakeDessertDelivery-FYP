import React from "react";
import ReactDOM from "react-dom"; // import react-dom instead of react-dom/client
import App from "./App"; //This is the root component of the app
import "bootstrap/dist/css/bootstrap.css"; //This library is used for the UI of the app which is a CSS library
import "remixicon/fonts/remixicon.css"; // this is the icon library used in the app
import "slick-carousel/slick/slick.css"; // this is the carousel library used in the app that is used for the images in the carousel
import "slick-carousel/slick/slick-theme.css"; // this is the carousel library used in the app that is used for the theme of the carousel
import "./styles/AdminDash/icons/boxicons-2/css/boxicons.min.css";// this is the icon library used in the app
import "./index.css";// this is the css file used in the app

import store from "./store/store"; // import the store that is used to store the state of the app
import { Provider } from "react-redux"; // import the provider that is used to provide the store to the app
import { BrowserRouter as Router } from "react-router-dom"; // import the router that is used to route the app

const container = document.getElementById("app"); // pass the ID of the root DOM element

// Use ReactDOM.render instead of createRoot() and hydrateRoot()
ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/* // pass the store to the provider */}
      <Provider store={store}>
        {/* // pass the root component to the app */}
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  container
);
