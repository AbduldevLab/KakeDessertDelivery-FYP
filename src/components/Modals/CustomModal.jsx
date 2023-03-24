//This is the modal that pops up when the user clicks on the "Customize" button on the product card. 
//This modal is used to select the toppings and sauces for the custom burger.
import React, { useState } from "react";
import "../../styles/product-card.css";

//This is used to import the react-bootstrap components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//This is the modal that pops up when the user clicks on the "Customize" button on the product card.
const CustomModal = (props) => {
  //This is the state for the selected toppings
  const [toppings, setToppings] = useState("default");
  //This is the state for the selected sauces
  const [sauces, setSauces] = useState("default1");
  //This is the state for the attempted submit
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  //This function is used to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (toppings !== "default" && sauces !== "default1") { //If the user has selected a topping and a sauce
      props.addToCart({ toppings, sauces }); //Add the topping and sauce to the cart
      props.closeModal();
    }
  };
  //This function is used to handle the change event
  return (
    <Modal
      show={props.showModal} //This is used to show the modal
      onHide={props.closeModal} //This is used to close the modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Toppings and Sauces
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/* This is the form that is used to select the toppings and sauces */}
        <form onSubmit={handleSubmit}> 
          <div className="form-group">
            <label htmlFor="toppings">Toppings:</label>
            <select
              id="toppings"
              style={{ color: "#F4A460" }}
              onChange={(e) => setToppings(e.target.value)}
            >
              {/* //This is the list of toppings that the user can select from */}
              <option data-testid="toppings" value="default">Select one topping</option>
              <option value="Kinder">Kinder</option>
              <option value="Caramel fredo">Caramel fredo</option>
              <option value="Milky bar">Milky bar</option>
              <option value="Crunchie">Crunchie</option>
              <option value="M&M">M&M</option>
              <option value="Flake">Flake</option>
              <option value="Maltesers">Maltesers</option>
              <option value="Mint aero">Mint aero</option>
              <option value="Biscoff bits">Biscoff bits</option>
              <option value="Oreo bits ">Oreo bits</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sauces">Sauces:</label>
            <select
              id="sauces"
              style={{ color: "#F4A460" }}
              onChange={(e) => setSauces(e.target.value)} //This is the list of sauces that the user can select from
            >
              {/* //This is the list of sauces that the user can select from */}
              <option data-testid="sauces" value="default1">Select one sauce</option>
              <option value="Milk chocolate">Milk chocolate</option>
              <option value="White chocolate">White chocolate</option>
              <option value="Kinder">Kinder</option>
              <option value="Biscoff">Biscoff</option>
              <option value="Caramel">Caramel</option>
            </select>
          </div>
          {attemptedSubmit && sauces === "default1" && ( //If the user has not selected a sauce or a topping, display an error message
            <p style={{ color: "red" }}>Please select a Sauce!</p>
          )}
          {attemptedSubmit && toppings === "default" && ( //If the user has not selected a sauce or a topping, display an error message
            <p style={{ color: "red" }}>Please select a Topping!</p>
          )}
          <Modal.Footer className="modal-footer">
            {attemptedSubmit === false || //If the user has selected a sauce and a topping, enable the "Add" button
            (sauces !== "default1" && toppings !== "default") ? ( //If the user has selected a sauce and a topping, enable the "Add" button
              <Button
                type="submit"
                data-testid="submit-button" // add this line
                variant="danger"
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
              //If the user has not selected a sauce or a topping, disable the "Add" button
            ) : (
              <Button
                variant="danger"
                disabled
                style={{ backgroundColor: "#CD853F" }}
              >
                Add
              </Button>
            )}
            {/* //This is the "Cancel" button */}
            <Button
              onClick={props.closeModal}
              data-testid="close-button"
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

export default CustomModal;
