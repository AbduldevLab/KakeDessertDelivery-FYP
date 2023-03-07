import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { auth } from '../../config/firebase.js';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { email } = user;
        setUsers([{ email }]);
      }
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <div className="admin-content">
      <div className="admin-wrapper">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Display Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.email}>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
              <TableCell align="right">{user.displayName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}

export default Users;
