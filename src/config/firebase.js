// This file is used to initialize firebase and export the auth object
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//This is the firebase config object. You can get this from your firebase console
const firebaseConfig = {
  apiKey: "AIzaSyAS3OsC4Pm-84UIn2RMqGBIq-Ygcnso2Fg",
  authDomain: "kake-project.firebaseapp.com",
  projectId: "kake-project",
  storageBucket: "kake-project.appspot.com",
  messagingSenderId: "671879726441",
  appId: "1:671879726441:web:9d2ead0ff9fc09450469f8",
  measurementId: "G-DTPQERSFGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Get the authentication object
const auth = getAuth(app);
// Get the firestore object
const db = getFirestore(app);

// Export the objects
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  db,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
};
