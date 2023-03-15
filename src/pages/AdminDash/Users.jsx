import React, { useState, useEffect } from "react"; //This is used to import the react-router-dom components
import { makeStyles } from "@material-ui/core/styles"; //This is used to import the material-ui components
//This is used to import the material-ui components
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core"; //This is the table component from material-ui
import { db } from "../../config/firebase.js"; //This is used to import the firebase database
//This is used to import the firebase firestore components
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
  //This is used to style the coupon code banner
  couponBanner: {
    backgroundColor: "#CD853F",
    color: "#000",
    textAlign: "center",
    padding: "8px",
    fontWeight: "bold",
    marginBottom: "16px",
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
    }, 3000); // set the time in milliseconds after which the tooltip should disappear
  };
  
  //This is used to get the users from the database
  useEffect(() => {//This is used to get the users from the database
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
      q = query(q, startAfter(lastUserTimestamp));//This is used to get the users from the database signed up after the last user timestamp
    }

    //This is used to get the users from the database using snapshot
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];

      //This is used to get the users from the database and filtering them based on timestamp only fetch the users signed up after the last user timestamp
      querySnapshot.forEach((doc) => {
        const { name, email, signupTime } = doc.data(); //This is used to get the user data
        users.push({ name, email, signupTime }); //This is used to push the user data to the users array
        if (
          !lastUserTimestamp ||
          signupTime.toMillis() > lastUserTimestamp.toMillis() //This is used to check if the user timestamp is greater than the last user timestamp
        ) {
          setLastUserTimestamp(signupTime);//This is used to set the last user timestamp
        }
      });

      //This is used to update the users
      setUsers((existingUsers) => {
        const updatedUsers = [...existingUsers]; 
        users.forEach((user) => { //This is used to update the users if they already exist
          const existingUserIndex = existingUsers.findIndex(
            (u) => u.email === user.email //This is used to check if the user already exists
          );
          if (existingUserIndex !== -1) { //This is used to update the user if they already exist
            updatedUsers[existingUserIndex] = user; 
          } else {
            updatedUsers.push(user); //This is used to add the user if they do not exist
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
      <Tooltip
          title="Send email coupon code KAKE10 for 10% discount on all products! to the users below"
          arrow
          open={tooltipOpen} // pass the state to the open prop
          onClose={handleTooltipClose} // pass the function to the onClose prop
          onClick={handleTooltipOpen} // pass the function to the onClick prop
        >
          {/* //This is used to display the coupon code */}
          <Typography variant="h6" className={classes.couponBanner} >
            Current Coupon Code: KAKE10
          </Typography>
        </Tooltip>
        <TableContainer component={Paper}> {/**This is used to display the table */}
          <Table className={classes.table} aria-label="users table">
            <TableHead>
              <TableRow>
              <TableCell style={{ width: "10%" }} >
                  Name</TableCell>
                  <TableCell style={{ width: "10%" }} align="left">
                  Email</TableCell>
                <TableCell style={{ width: "15%" }} align="left">
                  Signed-up At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(
                (
                  user //This is used to match the users with the table
                ) => (
                  <TableRow key={user.name}> {/**This is used to display the users in the table */}
                    <TableCell component="th" scope="row">
                      {user.name} {/**This is used to display the user name */}
                    </TableCell>
                    <TableCell align="left">{user.email}</TableCell> {/**This is used to display the user email */}
                    <TableCell align="left">
                      {user.signupTime?.toDate().toLocaleString()} {/**This is used to display the user signup time */}
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
