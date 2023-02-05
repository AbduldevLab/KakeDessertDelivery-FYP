
import React, { useState } from "react";
import "../../styles/product-card.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
  const [toppings, setToppings] = useState([]);
  const [sauces, setSauces] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToCart(toppings, sauces);
    props.closeModal();
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
          Select Toppings and Sauces
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="toppings">Toppings:</label>
            <select
              id="toppings"
              // onChange={(e) => setToppings(e.target.value ? e.target.value.split(",") : [])}
              onChange={(e) => setToppings(e.target.value)}
            >
            <option value="">Select a topping</option>
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
              // onChange={(e) => setSauces(e.target.value ? e.target.value.split(",") : [])}
              onChange={(e) => setSauces(e.target.value)}
            >
             <option value="">Select a sauce</option>
             <option value="Milk chocolate">Milk chocolate</option>
             <option value="White chocolate">White chocolate</option>
             <option value="Milk chocolate">Kinder</option>
             <option value="White chocolate">Biscoff</option>
             <option value="Milk chocolate">Caramel</option>
             </select>  
          </div>
          <Modal.Footer className="modal-footer">
          <Button type="submit" style={{ backgroundColor: "#CD853F" }}>Add to Cart</Button>
          <Button onClick={props.closeModal} style={{ backgroundColor: "#CD853F" }}>Cancel</Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
  
};

export default CustomModal;







// import React from "react";

// import "../../styles/product-card.css";

// import {Button} from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";


// // import { Link } from "react-router-dom";

// // import { useDispatch } from "react-redux";
// // import { cartActions } from "../../store/shopping-cart/cartSlice";


// function MyVerticallyCenteredModal(props) {

//   return (
//     <Modal
//       {...props}
//       backdrop={"static"}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//         Title
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Add to cart</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function EditProduct() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       {/* <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button> */}
//           <button className="addTOCart__btn" onClick={() => setModalShow(true)}>
//             Add to Cart
//           </button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// export default EditProduct;
/////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////
