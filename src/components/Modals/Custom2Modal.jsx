// This modal is used to select a cold drink for the custom 2
import React, { useState } from "react";
import "../../styles/product-card.css";

import Button from "react-bootstrap/Button";// This modal is used to select a cold drink for the custom burger
import Modal from "react-bootstrap/Modal";

// This modal is used to select a cold drink for the custom burger
const Custom2Modal = (props) => {
  const [drink, setDrink] = useState("default"); //This is the state for the selected drink
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);// This is the state for the attempted submit

  // This function is used to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault(); //This is used to prevent the page from reloading
    setAttemptedSubmit(true); //This is used to check if the user has attempted to submit the form
    if (drink !== "default") {
      props.addToCart({ drink }); //Add the cold drink to the cart
      props.closeModal(); //Close the modal
    }
  };

  // This function is used to handle the change event
  return (
    <Modal
      show={props.showModal}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select a Cold Drink
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="drink">Cold Drink:</label>
            <select
              id="drink"
              style={{ color: "#F4A460" }}
              onChange={(e) => setDrink(e.target.value)}
            >
              {/* This select element is used to select a cold drink */}
              <option value="default">Select a cold drink</option>
              <option value="coke">Coke €1.50</option>
              <option value="coke zero">Coke zero €1.50</option>
              <option value="fanta orange">Fanta orange €1.50</option>
              <option value="fanta lime">Fanta lime €1.50</option>
              <option value="7up">7UP €1.50</option>
              {/* <option value="snapple">Snapple €1.50</option> */}
            </select>
          </div>
          {/* //This is used to display an error message if the user has not selected a cold drink */}
          {attemptedSubmit && drink === "default" && (
            <p style={{ color: "red" }}>Please select a drink!</p>
          )}
          <Modal.Footer className="modal-footer">
            {/* //This is used to disable the add button if the user has not selected a cold drink */}
            {attemptedSubmit === false || drink !== "default" ? (
              <Button
                type="submit"
                variant="danger"
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
              // this is used to disable the add button if the user has not selected a cold drink
            ) : (
              <Button
                variant="danger"
                disabled
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
              //This is used to disable the add button if the user has not selected a cold drink
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

export default Custom2Modal;
