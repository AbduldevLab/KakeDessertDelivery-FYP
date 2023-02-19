// import React, { useRef } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const signupNameRef = useRef();
//   const signupPasswordRef = useRef();
//   const signupEmailRef = useRef();

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Helmet title="Signup">
//       <CommonSection title="Signup" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     required
//                     ref={signupNameRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={signupEmailRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={signupPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Sign Up
//                 </button>
//               </form>
//               <Link to="/login">Already have an account? Login</Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Register;
import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import "../styles/login.css";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const auth = getAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User registered successfully:", userCredential.user);
        // Add any further actions to be taken after successful registration
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        // Add any further actions to be taken after failed registration
      });
  };

  const googleLoginHandler = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User logged in successfully:", result.user);
        // Add any further actions to be taken after successful login
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
        // Add any further actions to be taken after failed login
      });
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <div className="d-flex justify-content-center align-items-center mb-3">
              <button className="addTOCart__btn" onClick={googleLoginHandler}>
                Sign Up with Google
              </button>
              </div>
              <Link to="/login" className="link">
                Already have an account? Login
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;