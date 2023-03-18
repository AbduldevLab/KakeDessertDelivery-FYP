import React from "react";
import ReactDOM from "react-dom"; // import react-dom instead of react-dom/client
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/AdminDash/icons/boxicons-2/css/boxicons.min.css";
import "./index.css";

import store from "./store/store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("app"); // pass the ID of the root DOM element

// Use ReactDOM.render instead of createRoot() and hydrateRoot()
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  container
);
