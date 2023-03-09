import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { db } from '../../config/firebase.js';
import { collection, query, onSnapshot, where, Timestamp, orderBy, startAfter } from "firebase/firestore";
//This is used to import the react-router-dom components
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    overflowX: "auto",
  },
});

const Users = () => {

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
  const [users, setUsers] = useState([]);
  const [lastUserTimestamp, setLastUserTimestamp] = useState(null);

  useEffect(() => {
    let q = query(
      collection(db, "Users"),
      where("signupTime", ">", lastUserTimestamp || Timestamp.fromDate(new Date(0))),
      orderBy("signupTime", "desc")
    );
    if (lastUserTimestamp) {
      q = query(q, startAfter(lastUserTimestamp));
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];

      querySnapshot.forEach((doc) => {
        const { name, email, signupTime } = doc.data();
        users.push({ name, email, signupTime });
        if (!lastUserTimestamp || signupTime.toMillis() > lastUserTimestamp.toMillis()) {
          setLastUserTimestamp(signupTime);
        }
      });

      setUsers((existingUsers) => {
        const updatedUsers = [...existingUsers];
        users.forEach((user) => {
          const existingUserIndex = existingUsers.findIndex((u) => u.email === user.email);
          if (existingUserIndex !== -1) {
            updatedUsers[existingUserIndex] = user;
          } else {
            updatedUsers.push(user);
          }
        });
        return updatedUsers;
      });
    });

    return () => unsubscribe();
  }, [lastUserTimestamp]);

  return (
    <div className="admin-content">
      <div className="admin-wrapper">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="users table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell align="right">Display Name</TableCell>
                <TableCell align="right">Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell component="th" scope="row">
                    {user.email}
                  </TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.signupTime?.toDate().toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Users;
