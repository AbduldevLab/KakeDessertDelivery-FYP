// This component is used to display the product card on the home page
import React, { useState } from "react";

// This imports the css file for the product card
import "../../../styles/product-card.css";
import ReactModal from "../../Modal/CustomModal";
import CloseModal from "../../Modal/ClosedModal";
import ReactModal1 from "../../Modal/Custom1Modal";
import ReactModal2 from "../../Modal/Custom2Modal";

//This imports the react router dom
import { Link } from "react-router-dom";

//these imports are used to connect the redux store to the component
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice.jsx";

// This component is used to display the product card on the home page
const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();
//These are the states used to open the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [closeModalOpen, setCloseModalOpen] = useState(false);

  //This const is used to add the items contents to the cart
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
  //This const is used to open the specific modal
  const handleClick = () => {
    //These are the arrays used to check the title of the item
    const remainder = [
      "Smoothies",
      "Biscoff Shake",
      "Crisps",
      "Chocolate Bars",
      "American Candy",
    ];
    
    const hotDrinks = ["Hot Drinks"]; //This is used to check the title of the item
    const coldDrinks = ["Cold Drinks"]; //This is used to check the title of the item
    const desserts = [
      "Cheese Cake Tub",
      "Cookie Dough Tray",
      "Brownie Tray",
      "Croissant",
      "Red-velvet Slice",
      "Chocolate Slice",
    ];
    //These are the variables used to check the time and day
    const currentTime = new Date().getHours();
    const workHoursStart = 18;
    const workHoursEnd = 22;
    const currentDay = new Date().getDay();
    const monday = 1;
    const tuesday = 2;

    //These are the conditions used to open the modal
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
  //This is the return statement for the component
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
          <span className="product__price me-2">€{price}</span>
          <button className="addTOCart__btn" onClick={handleClick}>
            Add to Cart
            
          </button>
        </div>
      </div>
      {/* These are the modals used to open the modal */}
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
      {/* This is the modal used to close the modal */}
      {closeModalOpen && (
        <CloseModal
          showModal={closeModalOpen}
          closeModal={() => setCloseModalOpen(false)}
          message={
            <div className = "closed" style={{ textAlign: "center", color: "red" }}>
              Sorry, we are currently closed.<br /> Please come back between <br />{" "}
              (6:00 pm - 10:00 pm) from (Wed-Sun).
            </div>
          }
        />
      )}
    </div>
  );
};

export default ProductCard;
