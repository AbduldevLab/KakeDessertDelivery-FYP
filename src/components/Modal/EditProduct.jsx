import React, { useState } from "react";

import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

// import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

function EditProduct(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  

  return (
    <>
    <button  className="addTOCart__btn" onClick={handleShow}>
            Add to Cart
          </button>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addToCart}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;