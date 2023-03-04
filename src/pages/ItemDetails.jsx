// Description: This is the item details page
import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.jsx";// Helmet is used to change the title of the page
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";// Reactstrap is used for the layout of the page

import trailor from "../assets/images/hero.jpg";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";// Link is used to link to other pages

import Category from "../components/UI/category/Category.jsx";// Category is used to display the category of the item

import "../styles/home.css";
import "../styles/product-details.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/brand/products.jsx";// products is used to display the products

import foodCategoryImg01 from "../assets/images/desserts.png";
import foodCategoryImg02 from "../assets/images/drinks.png";
import foodCategoryImg03 from "../assets/images/snacks.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";// ProductCard is used to display the product card

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";// TestimonialSlider is used to display the testimonial slider

// This is the data for the testimonials
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "We deliver around the Blanchardstown area D15 and also parts of Finglas & Cabra.",
  },

  {
    title: "Fast Replies",
    imgUrl: featureImg02,
    desc: "Quick responses from us on all our social media platforms. Live chat coming soon..",
  },
  {
    title: "Collection",
    imgUrl: featureImg03,
    desc: "Easy Click & Collect.",
  },
];

// This is the data for the testimonials
const Home = () => {
  const [category, setCategory] = useState("ALL");// This is the state for the category
  const [allProducts, setAllProducts] = useState(products);// This is the state for the products

  const [hotDrink, sethotDrink] = useState([]);// This is the state for the hot drinks

  // This is the function for the category
  useEffect(() => {
    const filteredDrink = products.filter((item) => item.category === "Drinks");// This is the filter for the drinks
    const sliceCup = filteredDrink.slice(0, 4);// This is the slice for the drinks
    sethotDrink(sliceCup);// This is the set for the drinks
  }, []);

  // This is the function for the category
  useEffect(() => {
    if (category === "ALL") {// This is the filter for the all
      setAllProducts(products);
    }

    if (category === "DESSERT") {// This is the filter for the desserts
      const filteredProducts = products.filter(
        (item) => item.category === "Desserts"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "DRINK") {// This is the filter for the drinks
      const filteredProducts = products.filter(
        (item) => item.category === "Drinks"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "SNACK") {// This is the filter for the snacks
      const filteredProducts = products.filter(
        (item) => item.category === "Snacks"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);// This is the dependency for the category

// This is the return for the home page
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            {/* // This is the hero section */}
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">
                  An easy way to place an order right now!
                </h5>
                <h1 className="mb-4 hero__title">
                  <span>Craving?</span> Just wait <br /> kake at
                  <span> your door</span>
                </h1>

                <p>
                  Visit us and try some of our freshly made desserts. Specially
                  made for you from our wide selection of topics, of your
                  choice!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-6">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    {/* // This is the link to the menu page */}
                    <Link to="/menu">
                      Order Now <i class="ri-arrow-right-s-line"></i>{" "}
                    </Link>
                  </button>
                </div>

                {/* // This is the service section */}
                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                      {/* // This is the icon for the delivery */}
                    </span>{" "}
                    Delivery available
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                      {/* // This is the icon for the in person payments */}
                    </span>{" "}
                    In-Person Payments Only
                  </p>
                </div>
              </div>
            </Col>
            {/* // This is the image section */}
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={trailor} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* // This is the feature section */}
      <section className="pt-0">
        <Category />
      </section>

    {/* // This is the feature section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">
                Just sit back and <span>leave</span>
              </h2>
              <h2 className="feature__title">
                <span>the rest</span> to us
              </h2>
              <p className="mb-1 mt-4 feature__text">
                You simply order from us and then you should be good to go. We
                offer delivery and collection.
              </p>
              <p className="feature__text">
                Simply get in touch with us on one of our social media sites
                down below if you have any questions or concerns..{" "}
              </p>
            </Col>
            {/* // This is the map for the feature section */}
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  {/* // This is the image for the feature section */}
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  {/* // This is the title for the feature section */}
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* // This is the popular section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Our Popular Choices</h2>
            </Col>
{/* // This is the category section */}
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-3">
                {/* // This is the button for all the food */}
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                {/* // This is the button for the desserts */}
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DESSERT" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DESSERT")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Desserts
                </button>
                  {/* // This is the button for the drinks */}
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DRINK" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DRINK")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Beverages
                </button>
                  {/* // This is the button for the snacks */}
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "SNACK" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("SNACK")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Snacks
                </button>
              </div>
            </Col>
                  {/* // This is the map for the popular section */}
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* // This is the why choose us section */}
      <section className="why__choose-us">
        <Container>
          <Row>
            {/* // This is the image section */}
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
{/* // This is the text section */}
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>kake?</span>
                </h2>
                <p className="tasty__treat-desc">
                  We provide a wide range of services, including custom cakes,
                  special orders, and wedding cakes. We use only fresh
                  ingredients and make everything homemade from scratch.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      desserts
                    </p>
                    <p className="choose__us-desc">
                      For our desserts, we only use the best ingredients. There
                      are about 20+ different handcrafted desserts available.
                      Check our Instagram to request a special order.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      We are engaged across all of our social media channels.
                      Expect a response to emails within 24 hours at the very
                      least. The website's live chat feature will be available
                      soon.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Delivery and
                      collection{" "}
                    </p>
                    <p className="choose__us-desc">
                      We provide both delivery and collection; for more
                      information about both services, see the business hours
                      shown below.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
{/* // This is the hot/cold drinks section */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot/Cold Drinks</h2>
            </Col>
{/* // This is the map for the hot/cold drinks section */}
            {hotDrink.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
{/* // This is the testimonial section */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Slide show</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>Special</span> orders look like
                </h2>
                <p className="testimonial__desc">
                  To stay updated on our offers, various raffles,
                  <br />
                  and door-to-door giveaways, <br />
                  make sure to follow our Instagram!
                </p>

                <TestimonialSlider />
              </div>
            </Col>
{/* // This is the image section */}
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
