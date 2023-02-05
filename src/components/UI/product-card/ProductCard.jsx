import React, { useState } from "react";

import "../../../styles/product-card.css";
import ReactModal from "../../Modal/CustomModal";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const addToCart = (toppings, sauces) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        toppings,
        sauces,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/€{id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">€{price}</span>
          <button className="addTOCart__btn" onClick={() => {
           setModalOpen(true)}}>
            Add to Cart
          </button>
        </div>
      </div>
      {modalOpen && (
        <ReactModal
          showModal={modalOpen}
          closeModal={() => setModalOpen(false)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default ProductCard;




// import React from "react";

// import "../../../styles/product-card.css";
// import EditProduct from "../../Modal/EditProduct";

// import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";


// const ProductCard = (props) => {
//   const { id, title, image01, price } = props.item;
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         title,
//         image01,
//         price,
//       })
//     );
//   };
  

//   return (
//     <div className="product__item">
//       <div className="product__img">
//         <img src={image01} alt="product-img" className="w-50" />
//       </div>

//       <div className="product__content">
//         <h5>
//           <Link to={`/foods/€{id}`}>{title}</Link>
//         </h5>
//         <div className=" d-flex align-items-center justify-content-between ">
//           <span className="product__price">€{price}</span>
//           <EditProduct/>
//           {/* <button className="addTOCart__btn" onClick={addToCart}>
//             Add to Cart
//           </button>   */}
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default ProductCard;
//////////////////////////////////////////////////////