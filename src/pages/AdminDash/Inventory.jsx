import React, {useEffect}from "react";
//This is used to import the react-router-dom components
import { useNavigate } from "react-router-dom";
import { menuproducts } from "../../assets/brand/menuproducts.jsx";

function Inventory() {

    //This is used to navigate to the admin page
  const navigate = useNavigate();

  //This is used to check if the user is authenticated
  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      // If the user is not authenticated
      navigate("/admin"); // Navigate to the admin page
    }
  }, [navigate]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="admin-content">
      <div className="admin-wrapper">
    <div>
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {menuproducts.map((menuproducts) => (
            <tr key={menuproducts.id}>
              <td>{menuproducts.title}</td>
              <td>{menuproducts.price}</td>
              <td>{menuproducts.category}</td>
              <td>{menuproducts.stock || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default Inventory;
