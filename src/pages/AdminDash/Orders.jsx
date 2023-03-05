//This is used to import the react-router-dom components
import React, { useState, useEffect } from "react";// eslint-disable-line no-unused-vars
import "../../styles/AdminDash/panel.css";

//This is used to import the react-router-dom components
import { useNavigate } from "react-router-dom";

//This is used to import the material-ui components
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { db } from "../../config/firebase.js"; // Import the firebase database
import { collection, onSnapshot  } from "firebase/firestore"; // Import the firebase firestore

//This is used to style the material-ui components
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    overflowX: "auto",
  },
});

//This is used to display the orders on the admin dashboard
const Orders = () => {

  //This is used to navigate to the admin page
  const navigate = useNavigate();

  //This is used to check if the user is authenticated
  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) { // If the user is not authenticated
      navigate("/admin"); // Navigate to the admin page
    }
  }, [navigate]);// eslint-disable-line react-hooks/exhaustive-deps


  const classes = useStyles(); // Use the styles defined above
  const [orders, setOrders] = useState([]);// eslint-disable-line no-unused-vars

  const ordersRef = collection(db, "Orders");// eslint-disable-line no-unused-vars
  useEffect(() => {
    // Attach a real-time listener to orders collection , and update the orders state when the collection changes
    // This will remove the need for users to refresh the page to see the latest orders manually
    const unsubscribe = onSnapshot(ordersRef, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({ // Map the orders collection to an array of objects
        id: doc.id,
        ...doc.data(),
      })).sort((a, b) => b.orderTime - a.orderTime); // Sort the orders by orderTime in descending order
      setOrders(ordersData);
    });
    
    // Detach the listener when the component unmounts
    return () => unsubscribe();
  }, [ordersRef]);
  

  const [expandedOrder, setExpandedOrder] = useState(null);// eslint-disable-line no-unused-vars

  //This is used to handle the expand order button
  const handleExpandOrder = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  //This is used to handle the delete order button
  return (
    <div className="admin-content">
      <div className="admin-wrapper">
        <div className="orders">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Orders table"> 
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "10%" }}>Order Number</TableCell>
                  <TableCell style={{ width: "10%" }} align="right">
                    Name
                  </TableCell>
                  <TableCell style={{ width: "10%" }} align="right">
                    Phone Number
                  </TableCell>
                  <TableCell style={{ width: "10%" }} align="right">
                    Order Type
                  </TableCell>
                  <TableCell style={{ width: "20%" }} align="right">
                    Date and Time
                  </TableCell>
                  <TableCell style={{ width: "10%" }} align="right"></TableCell>
                  <TableCell style={{ width: "10%" }} align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <React.Fragment key={order.orderNumber}>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {order.orderNumber}
                      </TableCell>
                      <TableCell align="right">{order.name}</TableCell>
                      <TableCell align="right">{order.phone}</TableCell>
                      <TableCell align="right">
                        {order.collectionTime ? "Collection" : "Delivery"}
                      </TableCell>
                      <TableCell align="right">{order.orderTime ? order.orderTime.toDate().toLocaleString() : ""}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => handleExpandOrder(order.id)}>
                          View Details
                        </Button>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                    {expandedOrder === order.id && (//This is used to display the order details
                      <TableRow>
                        <TableCell colSpan={6}>
                          <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                          {order.email}
                          {order.collectionTime ? (
                            <div>
                              <span style={{ fontWeight: "bold" }}>
                                Collection Time:
                              </span>{" "}
                              {order.collectionTime}
                            </div>
                          ) : (
                            <div>
                              <span style={{ fontWeight: "bold" }}>
                                Address:
                              </span>{" "}
                              {order.address} <br />
                              <span style={{ fontWeight: "bold" }}>
                                Eircode:
                              </span>{" "}
                              {order.eirCode}
                            </div>
                          )}
                          <span style={{ fontWeight: "bold" }}>Cart:</span>
                          <ul>
                            {order.cartItems.map((item) => (//This is used to display the cart items
                              <li key={item.title}>
                                {item.title}:
                                {item.selection && (
                                  <span>
                                    <ul>
                                      {item.selection.drink && (
                                        <li>Drink: {item.selection.drink}</li>
                                      )}
                                      {item.selection.toppings && (
                                        <li>
                                          Toppings: {item.selection.toppings}
                                        </li>
                                      )}
                                      {item.selection.sauces && (
                                        <li>Sauces: {item.selection.sauces}</li>
                                      )}
                                    </ul>
                                  </span>
                                )}
                                <ul>
                                  <li>
                                    {" "}
                                    Quantity: {item.quantity} x €
                                    {item.price.toFixed(2)} = €
                                    {(item.quantity * item.price).toFixed(2)}
                                  </li>
                                </ul>
                                ---------------------------------------------------------
                              </li>
                            ))}
                          </ul>
                          <div style={{ fontWeight: "bold" }}>
                            Total Price: €
                            {order.cartItems
                              .reduce((acc, curr) => acc + curr.totalPrice, 0)
                              .toFixed(2)}
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Orders;
