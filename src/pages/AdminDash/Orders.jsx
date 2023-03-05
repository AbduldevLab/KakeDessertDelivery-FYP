// import React, { useState, useEffect } from "react";
// import "../../styles/AdminDash/panel.css";

// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@material-ui/core";
// import { db } from "../../config/firebase.js";
// import { collection, getDocs } from "firebase/firestore";


// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   tableContainer: {
//     overflowX: "auto",
//   },
// });

// const Orders = () => {
//   const classes = useStyles();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch orders from Firebase Firestore and update the state
//     const fetchOrders = async () => {
//       const ordersRef = collection(db, "Orders");
//       const ordersSnapshot = await getDocs(ordersRef);
//       const ordersData = ordersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setOrders(ordersData);
//     }
//     fetchOrders();
//   }, []);

//   return (
// <div className="admin-content">
//   <div className="admin-wrapper">
//     <div className="orders">
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="Orders table">
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ width: "10%" }}>Order Number</TableCell>
//               <TableCell style={{ width: "10%" }} align="right">Name</TableCell>
//               <TableCell style={{ width: "10%" }} align="right">Phone Number</TableCell>
//               <TableCell style={{ width: "15%" }} align="right">Email</TableCell>
//               <TableCell style={{ width: "25%" }} align="right">Address</TableCell>
//               <TableCell style={{ width: "10%" }} align="right">Eircode</TableCell>
//               <TableCell style={{ width: "10%" }} align="right">Collection Time</TableCell>
//               <TableCell style={{ width: "10%" }} align="right">Cart</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {orders.map((order) => (
//               <TableRow key={order.orderNumber}>
//                 <TableCell component="th" scope="row">
//                   {order.orderNumber}
//                 </TableCell>
//                 <TableCell align="right">{order.name}</TableCell>
//                 <TableCell align="right">{order.phone}</TableCell>
//                 <TableCell align="right">{order.email}</TableCell>
//                 <TableCell align="right">{order.address}</TableCell>
//                 <TableCell align="right">{order.eirCode}</TableCell>
//                 <TableCell align="right">{order.collectionTime}</TableCell>
//                 <TableCell align="right">
//                   <ul>
//                     {order.cartItems.map((item) => (
//                       <li key={item.id}>
//                         {item.title}
//                         {item.selection && (
//                           <span>
//                             Toppings:
//                             {item.selection.toppings && `(${item.selection.toppings})`}
//                             Sauces:
//                             {item.selection.sauces && `(${item.selection.sauces})`}
//                             {item.selection.drinks && `(${item.selection.drinks})`}
//                           </span>
//                         )}
//                         {item.quantity} x {item.price.toFixed(2)} = {(item.quantity * item.price).toFixed(2)}
//                       </li>
//                     ))}
//                     <li>
//                       <strong>Total:</strong> {order.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
//                     </li>
//                   </ul>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   </div>
// </div>


//   );
// };

// export default Orders;


import React, { useState, useEffect } from "react";
import "../../styles/AdminDash/panel.css";

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
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from Firebase Firestore and update the state
    const fetchOrders = async () => {
      const ordersRef = collection(db, "Orders");
      const ordersSnapshot = await getDocs(ordersRef);
      const ordersData = ordersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setOrders(ordersData);
    }
    fetchOrders();
  }, []);

  const [expandedOrder, setExpandedOrder] = useState(null);

  const handleExpandOrder = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  }

  return (
    <div className="admin-content">
      <div className="admin-wrapper">
        <div className="orders">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Orders table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "10%" }}>Order Number</TableCell>
                  <TableCell style={{ width: "10%" }} align="right">Name</TableCell>
                  <TableCell style={{ width: "10%" }} align="right">Phone Number</TableCell>
                  <TableCell style={{ width: "10%" }} align="right">Order Type</TableCell>
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
      <span style={{ fontWeight: "bold" }}>Email:</span> {order.email}
      {order.collectionTime ? (
        <div><span style={{ fontWeight: "bold" }}>Collection Time:</span> {order.collectionTime}</div>
      ) : (
        <div>
          <span style={{ fontWeight: "bold" }}>Address:</span> {order.address} <br/>
          <span style={{ fontWeight: "bold" }}>Eircode:</span> {order.eirCode}
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
                  {item.selection.drink && <li>Drink: {item.selection.drink}</li>}
                  {item.selection.toppings && <li>Toppings: {item.selection.toppings}</li>}
                  {item.selection.sauces && <li>Sauces: {item.selection.sauces}</li>}
                </ul>
              </span>
            )}
            <ul>
             <li> Quantity: {item.quantity} x €{item.price.toFixed(2)} = €{(item.quantity * item.price).toFixed(2)}</li>
            </ul>
          </li>
        ))}
      </ul>
      <div style={{ fontWeight: "bold" }}>Total Price: €{order.cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}</div>
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