// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_rb7VtTkCD1eiHR6gdz_FYydx_Q75tGo",
  authDomain: "messaging-app-36634.firebaseapp.com",
  projectId: "messaging-app-36634",
  storageBucket: "messaging-app-36634.appspot.com",
  messagingSenderId: "886320995399",
  appId: "1:886320995399:web:554b7748bade4a20ffa562",
  measurementId: "G-RJ4JQXNYW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
