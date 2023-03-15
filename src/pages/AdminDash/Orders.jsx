//This is used to import the react-router-dom components
import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import "../../styles/AdminDash/panel.css";

//This is used to import the react-router-dom components
import { useNavigate } from "react-router-dom";

//This is used to import the material-ui components
import { makeStyles } from "@material-ui/core/styles";
//This is the table component from material-ui
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { db } from "../../config/firebase.js"; //This is used to import the firebase database
//This is used to import the firebase components for fetching data from the database
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

//This is used to style the material-ui components
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    overflowX: "auto",
  },
   banner: {
    backgroundColor: "#CD853F",
    color: "#000",
    textAlign: "center",
    padding: "8px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
});

//This is used to display the orders on the admin dashboard
const Orders = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [orders, setOrders] = useState([]); //This is used to store the orders
  const [lastOrderTimestamp, setLastOrderTimestamp] = useState(null); //This is used to store the last order timestamp
  const [tooltipOpen, setTooltipOpen] = useState(false); // add a state to keep track of tooltip open status

  //This is used to handle the tooltip close
  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };
  //This is used to handle the tooltip open
  const handleTooltipOpen = () => {
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, 5000); // set the time in milliseconds after which the tooltip should disappear
  };

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);

  //This is used to fetch the orders from the database
  useEffect(() => {
    let q = query(
      collection(db, "Orders"),
      orderBy("orderTime", "desc"), //This is used to order the orders by the order time
      limit(20) //This is used to limit the orders to 20
    );

    // If we have a last order timestamp, we want to fetch orders after that timestamp
    if (lastOrderTimestamp) {
      q = query(
        collection(db, "Orders"),
        where("orderTime", ">", lastOrderTimestamp),
        orderBy("orderTime", "desc"),
        startAfter(lastOrderTimestamp),
        limit(20)
      );
    }

    //This is used to fetch the orders from the database
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // If we have a last order timestamp, we want to append the new orders to the existing orders
      if (lastOrderTimestamp) {
        setOrders((prevOrders) =>
          prevOrders.concat(newOrders).sort((a, b) => b.orderTime - a.orderTime)
        );
      } else {
        setOrders(newOrders);
      }

      // Set the last order timestamp to the latest order timestamp
      const latestOrderTime = newOrders.length
        ? newOrders[0].orderTime
        : lastOrderTimestamp;
      setLastOrderTimestamp(latestOrderTime);
    });

    return () => unsubscribe();
  }, [lastOrderTimestamp]);

  //This is used to handle the expand order button
  const [expandedOrder, setExpandedOrder] = useState(null);

  //This is used to handle the expand order button
  const handleExpandOrder = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };
  //This is used to check if the orders are undefined
  if (orders === undefined) {
    return <div>Loading...</div>;
  }

  //This is used to display the orders on the admin dashboard
  return (
    <div className="admin-content">
      <div className="admin-wrapper">
         <Tooltip
            title="Here you will see all the orders to date 
                      ***Only the 20 most recent***" // pass the tooltip text as a prop
            arrow
            open={tooltipOpen} // pass the state to the open prop
            onClose={handleTooltipClose} // pass the function to the onClose prop
            onClick={handleTooltipOpen} // pass the function to the onClick prop
          >
            {/* //This is used to display the coupon code */}
            <Typography variant="h6" className={classes.banner}>
              Orders
            </Typography>
            </Tooltip>
        <div className="orders">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Orders table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "10%" }}>Order Number</TableCell>
                  <TableCell style={{ width: "10%" }} align="left">
                    Name
                  </TableCell>
                  <TableCell style={{ width: "10%" }} align="left">
                    Phone Number
                  </TableCell>
                  <TableCell style={{ width: "10%" }} align="left">
                    Order Type
                  </TableCell>
                  <TableCell style={{ width: "15%" }} align="left">
                    Date and Time
                  </TableCell>
                  <TableCell style={{ width: "10%" }} align="left"></TableCell>
                  <TableCell style={{ width: "10%" }} align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(
                  (
                    order //This is used to display the orders
                  ) => (
                    <React.Fragment key={order.orderNumber}>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {order.orderNumber}
                        </TableCell>
                        <TableCell align="left">{order.name}</TableCell>
                        <TableCell align="left">{order.phone}</TableCell>
                        <TableCell align="left">
                          {order.collectionTime ? "Collection" : "Delivery"}
                        </TableCell>
                        <TableCell align="left">
                          {order.orderTime
                            ? order.orderTime.toDate().toLocaleString()
                            : ""}
                        </TableCell>
                        <TableCell align="left">
                          <Button onClick={() => handleExpandOrder(order.id)}>
                            View Details
                          </Button>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      {expandedOrder === order.id && ( //This is used to display the order details
                        <TableRow>
                          <TableCell colSpan={6}>
                            <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                            {order.email}
                            {order.collectionTime ? ( //This is used to display the collection time
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
                              {order.cartItems.map(
                                (
                                  item //This is used to display the cart items
                                ) => (
                                  <li key={item.title}>
                                    {item.title}:
                                    {item.selection && ( //This is used to display the item selection
                                      <span>
                                        <ul>
                                          {item.selection.drink && (
                                            <li>
                                              Drink: {item.selection.drink}
                                            </li>
                                          )}
                                          {item.selection.toppings && (
                                            <li>
                                              Toppings:{" "}
                                              {item.selection.toppings}
                                            </li>
                                          )}
                                          {item.selection.sauces && (
                                            <li>
                                              Sauces: {item.selection.sauces}
                                            </li>
                                          )}
                                        </ul>
                                      </span>
                                    )}
                                    <ul>
                                      <li>
                                        {/* //This is used to display the item quantity and price */}{" "}
                                        Quantity: {item.quantity} x €
                                        {item.price.toFixed(2)} = €
                                        {(item.quantity * item.price).toFixed(
                                          2
                                        )}
                                      </li>
                                    </ul>
                                    {/* //this adds a breakline after each item displayed */}
                                    ---------------------------------------------------------
                                  </li>
                                )
                              )}
                            </ul>
                            <div style={{ fontWeight: "bold" }}>
                              Total Price: €
                              {order.cartItems
                                .reduce((acc, curr) => acc + curr.totalPrice, 0) //This is used to calculate the total price
                                .toFixed(2)}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Orders;
