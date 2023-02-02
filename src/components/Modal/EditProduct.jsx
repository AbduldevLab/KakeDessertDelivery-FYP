import React from "react";

import "../../styles/product-card.css";

import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


// import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../store/shopping-cart/cartSlice";


function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      backdrop={"static"}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Add to</Button>
      </Modal.Footer>
    </Modal>
  );
}

function EditProduct() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}
          <button className="addTOCart__btn" onClick={() => setModalShow(true)}>
            Add to Cart
          </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default EditProduct;