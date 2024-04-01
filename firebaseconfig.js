// Import the functions you need from the SDKs you need
// firebaseConfig.js
const firebase = require("firebase/app");
require("firebase/analytics");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "messaging-app-36634.firebaseapp.com",
  projectId: "messaging-app-36634",
  storageBucket: "messaging-app-36634.appspot.com",
  messagingSenderId: "886320995399",
  appId: "1:886320995399:web:554b7748bade4a20ffa562",
  measurementId: "G-RJ4JQXNYW2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

module.exports = { app, analytics };
