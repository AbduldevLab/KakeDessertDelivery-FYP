import React, { useRef, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/kake-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);
  const mapRef = useRef(null);
  const registerRef = useRef(null);
  const faqsRef = useRef(null);
  const tcRef = useRef(null);

  const handleMapClick = () => {
    window.scrollTo(0, mapRef.current.offsetTop);
  };

  const handleSubscribeClick = () => {
    window.scrollTo(0, registerRef.current.offsetTop);
  };

  const handleFaqsClick = () => {
    window.scrollTo(0, faqsRef.current.offsetTop);
  };

  const handleReadMoreClick = () => {
    window.scrollTo(0, tcRef.current.offsetTop);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        footerRef.current.classList.add("footer__shrink");
      } else {
        footerRef.current.classList.remove("footer__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="logo" />
              </Link>
              <h5>Your Kake</h5>
              <p>
                By clicking
                <span className="footer__title1" ref={mapRef}>
                  <Link
                    to="/contact"
                    onClick={handleMapClick}
                  >
                    {" "}
                    here
                  </Link>
                </span>
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
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title" ref={registerRef}>Newsletter</h5>
            <p className="footer__title2">
              <Link
                to="/register"
                onClick={handleSubscribeClick}
              >
                Subscribe to our newsletter
              </Link>
            </p>

            <h5 className="footer__title" ref={faqsRef}>Faq's</h5>
            <p className="footer__title2">
              <Link
                to="/faqs"
                onClick={handleFaqsClick}
              >
                Common questions
              </Link>
            </p>

            <h5 className="footer__title" ref={tcRef}>Terms and Conditions</h5>
            <p className="footer__title2">
              <Link
                to="/t&c"
                onClick={handleReadMoreClick}
              >
                Read more
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
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow us: </p>
              <span>
                {" "}
                <a
                  rel="external"
                  href="https://www.facebook.com/kakedessertdelivery"
                >
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
                <a
                  rel="external"
                  href="https://instagram.com/kake_dessertdelivery?igshid=YmMyMTA2M2Y="
                >
                  <i className="ri-instagram-line"></i>
                </a>{" "}
              </span>

              <span>
                {" "}
                <a
                  rel="external"
                  href="https://www.linkedin.com/in/yusuf-shushan/"
                >
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
