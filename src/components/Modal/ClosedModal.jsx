import React from "react";
import "../../styles/product-card.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ClosedModal = ({ showModal, closeModal, message }) => {
  return (
    <Modal show={showModal} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Closed</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal} style={{ backgroundColor: "#CD853F" }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClosedModal;