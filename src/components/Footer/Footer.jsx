import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/kake-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Your Kake</h5>
              <p>
                To find where we are based on Google maps , click here
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Wednesday - Sunday</span>
                <p>6:00pm - 10:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Tuesday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Unit 6, Coolport Porters Road, Coolmine Industrial Estate, D15 K6XK</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +353 87 287 5835</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: kakedessertdelivery@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, A.Zino All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/muhib160">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              {/* <span>
                <Link to="https://github.com/muhib160">
                  <i class="ri-github-line"></i>
                </Link>
              </span> */}

              <span>
                {" "}
                <Link to=" https://www.instagram.com/kake_dessertdelivery/">
                  <i class="ri-instagram-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
