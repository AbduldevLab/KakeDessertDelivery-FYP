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
            <Link to="/home"><img src={logo} alt="logo" /></Link>
              <h5>Your Kake</h5>
              <p>
              By clicking
                <span className="footer__title1"><Link to="/contact" > here</Link></span>
              , you can view our location on the map.
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
                <p>Closed</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p><span>Location:</span> Unit 6, Coolport Porters Road, Coolmine Industrial Estate, D15 K6XK</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone:</span> +353 87 287 5835
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email:</span> kakedessertdelivery@gmail.com
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            {/* <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div> */}
            <h5 className="footer__title">Faq's</h5>
            <p>Common questions </p>

            <h5 className="footer__title">Terms and Conditions</h5>
            <p>Read more </p>
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
                <a rel="external" href="https://www.facebook.com/kakedessertdelivery">
                  <i className="ri-facebook-line"></i>
                </a>{" "}
              </span>

              <span>
              <a rel="external" href="https://github.com/AbdulHaouit">
                  <i class="ri-github-line"></i>
                </a>
              </span> 

              <span>
                {" "}
                <a rel="external" href="https://instagram.com/kake_dessertdelivery?igshid=YmMyMTA2M2Y=">
                  <i className="ri-instagram-line"></i>
                </a>{" "}
              </span>

              <span>
                {" "}
                <a rel="external" href="https://www.linkedin.com/in/yusuf-shushan/">
                  <i class="ri-linkedin-line"></i>
                </a>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
