//This modal is used to select a hot drink for the custom1 product
import React, { useState } from "react";
import "../../styles/product-card.css";

import Button from "react-bootstrap/Button"; //import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"; //import Modal from "react-bootstrap/Modal";

//This modal is used to select a hot drink for the custom1 product
const Custom1Modal = (props) => {
  const [drink, setDrink] = useState("default");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false); //This state is used to check if the user has attempted to submit the form

  //This function is used to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (drink !== "default") { //If the user has selected a hot drink, add it to the cart and close the modal
      props.addToCart({ drink }); //Add the hot drink to the cart
      props.closeModal();
    }
  };

  //This function is used to handle the change event
  return (
    //This modal is used to select a hot drink for the custom1 product
    <Modal
      show={props.showModal}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* This modal is used to select a hot drink for the custom1 product */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select a Hot Drink
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="drink">Hot Drink:</label>
            <select
              id="drink"
              style={{ color: "#F4A460" }}
              onChange={(e) => setDrink(e.target.value)}
            >
              {/* This select element is used to select a hot drink */}
              <option value="default">Select a hot drink</option>
              <option value="Espresso">Espresso €2.00</option>
              <option value="Cappuccino">Cappuccino €3.00</option>
              <option value="Flat White">Flat White €3.00</option>
              <option value="Latte">Latte €3.00</option>
              <option value="Macchiata">Macchiata €2.50</option>
              <option value="Hot Chocolate">Hot Chocolate €3.00</option>
              <option value="Mint Aero Hot Choc">
                Mint Aero Hot Choc €3.50
              </option>
              <option value="Crunchie Hot Choc">Crunchie Hot Choc €3.50</option>
              <option value="Kinder Hot Choc">Kinder Hot Choc €3.50</option>
            </select>
          </div>
          {/* If the user has attempted to submit the form and has not selected a hot drink, display an error message */}
          {attemptedSubmit && drink === "default" && (
            <p style={{ color: "red" }}>Please select an option!</p>
          )}
          <Modal.Footer className="modal-footer">
            {/* If the user has attempted to submit the form and has selected a hot drink, enable the add button, otherwise disable it */}
            {attemptedSubmit === false || drink !== "default" ? (
              <Button
                type="submit"
                variant="danger"
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
              //If the user has attempted to submit the form and has not selected a hot drink, disable the add button
            ) : (
              <Button
                variant="danger"
                disabled
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
            )}
            <Button
              onClick={props.closeModal}
              style={{ backgroundColor: "#CD853F" }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Custom1Modal;
