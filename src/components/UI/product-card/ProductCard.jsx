import React, { useState } from "react";

import "../../../styles/product-card.css";
import ReactModal from "../../Modal/CustomModal";
import CloseModal from "../../Modal/ClosedModal";
import ReactModal1 from "../../Modal/Custom1Modal";
import ReactModal2 from "../../Modal/Custom2Modal";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [closeModalOpen, setCloseModalOpen] = useState(false);

  const addToCart = (toppings, sauces, drink) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        selection: toppings,
        sauces,
        drink,
      })
    );
  };
  const handleClick = () => {
    const remainder = [
      "Smoothies",
      "Biscoff Shake",
      "Crisps",
      "Chocolate Bars",
      "American Candy",
    ];
    const hotDrinks = ["Hot Drinks"];
    const coldDrinks = ["Cold Drinks"];
    const desserts = [
      "Cheese Cake Tub",
      "Cookie Dough Tray",
      "Brownie Tray",
      "Croissant",
      "Red-velvet Slice",
      "Chocolate Slice",
    ];
    const currentTime = new Date().getHours();
    const workHoursStart = 18;
    const workHoursEnd = 22;
    const currentDay = new Date().getDay();
    const monday = 1;
    const tuesday = 2;

    if (
      coldDrinks.includes(title) &&
      currentTime >= workHoursStart &&
      currentTime < workHoursEnd &&
      currentDay !== monday &&
      currentDay !== tuesday
    ) {
      setModal2Open(true);
    } else if (
      hotDrinks.includes(title) &&
      currentTime >= workHoursStart &&
      currentTime < workHoursEnd &&
      currentDay !== monday &&
      currentDay !== tuesday
    ) {
      setModal1Open(true);
    } else if (
      desserts.includes(title) &&
      currentTime >= workHoursStart &&
      currentTime < workHoursEnd &&
      currentDay !== monday &&
      currentDay !== tuesday
    ) {
      setModalOpen(true);
    } else if (
      remainder.includes(title) &&
      currentTime >= workHoursStart &&
      currentTime < workHoursEnd &&
      currentDay !== monday &&
      currentDay !== tuesday
    ) {
      addToCart(null, null);
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
      {modal1Open && (
        <ReactModal1
          showModal={modal1Open}
          closeModal={() => setModal1Open(false)}
          addToCart={addToCart}
        />
      )}
      {modal2Open && (
        <ReactModal2
          showModal={modal2Open}
          closeModal={() => setModal2Open(false)}
          addToCart={addToCart}
        />
      )}
      {closeModalOpen && (
        <CloseModal
          showModal={closeModalOpen}
          closeModal={() => setCloseModalOpen(false)}
          message={
            <div style={{ textAlign: "center", color: "red" }}>
              Sorry, we are currently closed. Please come back between <br />{" "}
              (6:00 pm - 10:00 pm) from (Wed-Sun).
            </div>
          }
        />
      )}
    </div>
  );
};

export default ProductCard;
