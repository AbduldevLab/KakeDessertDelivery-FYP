import React, { useState } from "react";
import "../../styles/product-card.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Custom2Modal = (props) => {
  const [drink, setDrink] = useState("default");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (drink !== "default") {
      props.addToCart({ drink });
      props.closeModal();
    }
  };

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
              <option value="default">Select a cold drink</option>
              <option value="coke">Coke €1.50</option>
              <option value="coke zero">Coke zero €1.50</option>
              <option value="fanta orange">Fanta orange €1.50</option>
              <option value="fanta lime">Fanta lime €1.50</option>
              <option value="7up">7UP €1.50</option>
              {/* <option value="snapple">Snapple €1.50</option> */}
            </select>
          </div>
          {attemptedSubmit && drink === "default" && (
            <p style={{ color: "red" }}>Please select a drink!</p>
          )}
          <Modal.Footer className="modal-footer">
            {attemptedSubmit === false || drink !== "default" ? (
              <Button
                type="submit"
                variant="danger"
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
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

export default Custom2Modal;
