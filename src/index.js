import React from "react";
import { createRoot } from "react-dom/client"; // import createRoot from react-dom/client
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./assets/css/bootstrap-grid.min.css";
import "./styles/AdminDash/icons/boxicons-2/css/boxicons.min.css";
import "./index.css";

import store from "./store/store.jsx";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

// use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
