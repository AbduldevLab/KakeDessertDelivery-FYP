import React, { useState, useEffect } from "react";
//This is used to import the react-router-dom components
import { useNavigate } from "react-router-dom";
import { menuproducts } from "../../assets/brand/menuproducts";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

function Inventory() {
  //This is used to navigate to the admin page
  const navigate = useNavigate();
  const classes = useStyles();
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
    }, 4000); // set the time in milliseconds after which the tooltip should disappear
  };

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
          <Tooltip
            title="Here you will see all the current available products in kake" // pass the tooltip text as a prop
            arrow
            open={tooltipOpen} // pass the state to the open prop
            onClose={handleTooltipClose} // pass the function to the onClose prop
            onClick={handleTooltipOpen} // pass the function to the onClick prop
          >
            {/* //This is used to display the coupon code */}
            <Typography variant="h6" className={classes.banner}>
              Inventory
            </Typography>
          </Tooltip>
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="inventory table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "5%" }}>Product</TableCell>
                  <TableCell style={{ width: "3%" }}>Price</TableCell>
                  <TableCell style={{ width: "3%" }}>Category</TableCell>
                  <TableCell style={{ width: "3%" }}>Stock</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menuproducts.map((menuproducts) => (
                  <TableRow key={menuproducts.id}>
                    <TableCell component="th" scope="row">
                      {menuproducts.title}
                    </TableCell>
                    <TableCell>€{menuproducts.price}</TableCell>
                    <TableCell>{menuproducts.category}</TableCell>
                    <TableCell>{menuproducts.stock || "N/A"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
