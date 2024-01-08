// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkRrfLY3nWCmat18JqXLxjORQq0pr_dUA",
  authDomain: "portfolio-7f1f4.firebaseapp.com",
  projectId: "portfolio-7f1f4",
  storageBucket: "portfolio-7f1f4.appspot.com",
  messagingSenderId: "643260636626",
  appId: "1:643260636626:web:2dc518bf74b8da6eff3c0b",
  measurementId: "G-LC7W0LTBR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);