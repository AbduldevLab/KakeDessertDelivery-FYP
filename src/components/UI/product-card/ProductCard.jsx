import React, { useState} from "react";

import "../../../styles/product-card.css";
import ReactModal from "../../Modal/CustomModal";
import CloseModal from "../../Modal/ClosedModal";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [closeModalOpen, setCloseModalOpen] = useState(false);

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
  const handleClick = () => {
    const currentTime = new Date().getHours();
    const workHoursStart = 18;
    const workHoursEnd = 22;

    if (currentTime >= workHoursStart && currentTime < workHoursEnd) {
      setModalOpen(true);
    } else {
      setCloseModalOpen(true);
    }
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
          <button className="addTOCart__btn" onClick={handleClick}>
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
      {closeModalOpen && (
        <CloseModal
          showModal={closeModalOpen}
          closeModal={() => setCloseModalOpen(false)}
          message={
            <div style={{ textAlign: "center", color: "red" }}>
              Sorry, we are currently closed. Please come back between 18:00-22:00.
            </div>
          }
        />
      )}
    </div>
  );
};

export default ProductCard;



