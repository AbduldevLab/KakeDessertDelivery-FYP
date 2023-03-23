// This imports the react library

import React from "react";
// This imports the reactstrap components
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/kake-logo.png";
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "../../styles/footer.css";

// This imports the react router dom
import { Link } from "react-router-dom";

// This component is used to display the footer on the home page
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <Link to="/home" onClick={() => window.scrollTo(0, 0)} // This is used to scroll to the top of the page
              >
                <img src={logo} alt="logo" />
              </Link>
              <h5>Your Kake</h5>
              <p>
                By clicking
                <span className="footer__title1">
                  <Link
                    to="/contact"
                    onClick={() => 
                      document.getElementById("top0").scrollIntoView({ behavior: "smooth" })} // This is used to scroll to the top of the page
                  >
                    {" "}
                    here
                  </Link>
                </span>
                , you can view our location on the map
              </p>
            </div>
          </Col>
          {/*This is used to display the footer items*/}

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
                <p>
                  <span>Location:</span> Unit 6, Coolport Porters Road, Coolmine
                  Industrial Estate, D15 K6XK
                </p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>
                  <span>Phone:</span> +353 87 287 5835
                </p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>
                  <span>Email:</span> kakedessertdelivery@gmail.com
                </p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
              <p className="footer__title2">
                <span>Survey:</span> Click<a className="footer__title2" href="https://forms.gle/93RjTnssS2gieNQ16"> here, </a>to take our survey, your feedback is important to us!
              </p>
            </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p className="footer__title2">
              <Link
                to="/register"
                onClick={() => 
                  document.getElementById("top1").scrollIntoView({ behavior: "smooth" })}
              >
                Subscribe to our newsletter
              </Link>
            </p>

            <h5 className="footer__title">Faq's</h5>
            <p className="footer__title2">
              <Link
                to="/faqs"
                onClick={() => 
                  document.getElementById("top2").scrollIntoView({ behavior: "smooth" })}
              >
                Common questions
              </Link>
            </p>

            <h5 className="footer__title">Terms and Conditions</h5>
            <p className="footer__title2">
              <Link
                to="/t&c"
                onClick={() => 
                  document.getElementById("top3").scrollIntoView({ behavior: "smooth" })}
              >
                Read more
              </Link>
            </p>

            <h5 className="footer__title">Kake App</h5>
            <p className="footer__title2">
              <Link
                to="/app"
                onClick={() => 
                  document.getElementById("top4").scrollIntoView({ behavior: "smooth" })}
              >
                Add our app
              </Link>
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, A.Zino All Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
             <div className="social__links d-flex align-items-center gap-4 justify-content-end"> {/* This is used to display the social media links */}
              <p className="m-0">Follow us: </p>
              <span>
                {" "}
                <a
                  rel="external"
                  href="https://www.facebook.com/kakedessertdelivery"
                >
                   <i><FontAwesomeIcon icon={faFacebook} className="social__icon" /></i>
                </a>{" "}
              </span>

              <span>
              {" "}
                <a 
                rel="external" 
                href="https://www.tiktok.com/@kakedessertdelivery"
                >
                 <i><FontAwesomeIcon icon={faTiktok} className="social__icon" /></i>
                </a>{" "}
              </span>

              <span>
                {" "}
                <a
                  rel="external"
                  href="https://instagram.com/kake_dessertdelivery?igshid=YmMyMTA2M2Y="
                >
                  <i><FontAwesomeIcon icon={faInstagram} className="social__icon" /></i>
                </a>{" "}
              </span>

              <span>
                {" "}
                <a
                  rel="external"
                  href="https://wa.link/2pu340"
                >
                  <i><FontAwesomeIcon icon={faWhatsapp} className="social__icon" /></i>
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
