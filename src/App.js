// This file is the entry point of the wholeapplication
import Layout from "./components/Layout/Layout.jsx";

// This is the main component of the whole application
function App() {
  return <Layout /> // This is the main layout of the application
}

export default App;

// import React from "react";
// import Layout from "./components/Layout/Layout.jsx";
// import AdminLayout from "./components/Layout/Adminlayout.jsx";

// function App() {
//   // some condition to determine which layout to render
//   const isAdmin = false;

//   return (
//     <>
//       {isAdmin ? <AdminLayout /> : <Layout />}
//     </>
//   );
// }

// export default App;
