import React, { useState, useEffect } from "react";
import "../../styles/AdminDash/panel.css";

//This is used to import the react-router-dom components
import { useNavigate } from "react-router-dom";

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
import { db } from "../../config/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    overflowX: "auto",
  },
});

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


  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from Firebase Firestore and update the state
    const fetchOrders = async () => {
      const ordersRef = collection(db, "Orders");
      const ordersSnapshot = await getDocs(ordersRef);
      const ordersData = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
    };
    fetchOrders();
  }, []);

  const [expandedOrder, setExpandedOrder] = useState(null);

  const handleExpandOrder = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

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
                      <TableCell align="right">
                        <Button onClick={() => handleExpandOrder(order.id)}>
                          View Details
                        </Button>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                    {expandedOrder === order.id && (
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
                            {order.cartItems.map((item) => (
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
