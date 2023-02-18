// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS3OsC4Pm-84UIn2RMqGBIq-Ygcnso2Fg",
  authDomain: "kake-project.firebaseapp.com",
  projectId: "kake-project",
  storageBucket: "kake-project.appspot.com",
  messagingSenderId: "671879726441",
  appId: "1:671879726441:web:9d2ead0ff9fc09450469f8",
  measurementId: "G-DTPQERSFGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);