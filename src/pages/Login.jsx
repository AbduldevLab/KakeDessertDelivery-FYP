import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithGoogle } from "../config/firebase.js";

import "../styles/login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleEmailAndPasswordLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
      <Container>
  <Row>
    <Col lg="6" md="6" sm="12" className="m-auto text-center">
      <form className="form mb-5" onSubmit={handleEmailAndPasswordLogin}>
        <div className="form__group">
          <input
            type="email"
            placeholder="Email"
            required
            ref={emailRef}
          />
        </div>
        <div className="form__group">
          <input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
        </div>
        <button type="submit" className="addTOCart__btn">
          Login with Email/Password
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <button
          type="button"
          className="addTOCart__btn"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
      </div>
            <Link to="/register" className="link">
              Don't have an account? Create an account
            </Link>
    </Col>
  </Row>
</Container>

      </section>
    </Helmet>
  );
};

export default Login;
