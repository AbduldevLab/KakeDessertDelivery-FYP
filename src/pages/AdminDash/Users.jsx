import React, { useState, useEffect } from "react"; //This is used to import the react-router-dom components
import { makeStyles } from "@material-ui/core/styles"; //This is used to import the material-ui components
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core"; //This is the table component from material-ui
import { db } from "../../config/firebase.js"; //This is used to import the firebase database
import {
  collection,
  query,
  onSnapshot,
  where,
  Timestamp,
  orderBy,
  startAfter,
} from "firebase/firestore"; //This is used to import the firebase firestore
//This is used to import the react-router-dom components
import { useNavigate } from "react-router-dom";

//This is used to style the table
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
    if (!isAuthenticated) {
      // If the user is not authenticated
      navigate("/admin"); // Navigate to the admin page
    }
  }, [navigate]); // eslint-disable-line react-hooks/exhaustive-deps

  const classes = useStyles();
  const [users, setUsers] = useState([]); //This is used to store the users
  const [lastUserTimestamp, setLastUserTimestamp] = useState(null); //This is used to store the last user timestamp
  //This is used to get the users from the database
  useEffect(() => {
    let q = query(
      collection(db, "Users"),
      where(
        "signupTime",
        ">",
        lastUserTimestamp || Timestamp.fromDate(new Date(0))
      ), //This is used to get the users from the database signed up after the last user timestamp
      orderBy("signupTime", "desc")
    );
    if (lastUserTimestamp) {
      q = query(q, startAfter(lastUserTimestamp));
    }

    //This is used to get the users from the database using snapshot
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];

      //This is used to get the users from the database and filtering them based on timestamp only fetch the users signed up after the last user timestamp
      querySnapshot.forEach((doc) => {
        const { name, email, signupTime } = doc.data();
        users.push({ name, email, signupTime });
        if (
          !lastUserTimestamp ||
          signupTime.toMillis() > lastUserTimestamp.toMillis()
        ) {
          setLastUserTimestamp(signupTime);
        }
      });

      //This is used to update the users
      setUsers((existingUsers) => {
        const updatedUsers = [...existingUsers];
        users.forEach((user) => {
          const existingUserIndex = existingUsers.findIndex(
            (u) => u.email === user.email
          );
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

  if (users === undefined) {
    return <div>Loading...</div>;
  }


  //This is used to return the users table
  return (
    <div className="admin-content">
      <div className="admin-wrapper">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="users table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Signed-up At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(
                (
                  user //This is used to match the users with the table
                ) => (
                  <TableRow key={user.email}>
                    <TableCell component="th" scope="row">
                      {user.email}
                    </TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">
                      {user.signupTime?.toDate().toLocaleString()}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Users;
