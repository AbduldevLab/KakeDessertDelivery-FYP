import React from "react";
import { createRoot } from "react-dom/client"; // import createRoot from react-dom to use createRoot instead of ReactDOM.render
import App from "./App"; // import App component that will be rendered
import "bootstrap/dist/css/bootstrap.css"; // this is the bootstrap css library
import "remixicon/fonts/remixicon.css"; //this is for the icons library
import "slick-carousel/slick/slick.css"; //this is for the carousel library
import "slick-carousel/slick/slick-theme.css"; //this is for the carousel library
import "./styles/AdminDash/icons/boxicons-2/css/boxicons.min.css"; //this is for the icons library
import "./index.css"; //

import store from "./store/store.jsx"; // import store from redux
import { Provider } from "react-redux";// import Provider from react-redux to use redux in react
import { BrowserRouter as Router } from "react-router-dom";// import Router from react-router-dom to use react-router-dom in react

const rootElement = document.getElementById("root");// get the root element from the index.html file

// check if the root element has child nodes or not
if (rootElement.hasChildNodes()) {
  createRoot(rootElement).hydrate(// use hydrate instead of render
    <React.StrictMode>
      <Router>
      {/* // use Provider to wrap the App component to use redux in react */}
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  );
} else {
  createRoot(rootElement).render(// use render instead of hydrate
    <React.StrictMode>
      <Router>
        {/* // use Provider to wrap the App component to use redux in react */}
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  );
}
