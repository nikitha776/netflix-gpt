// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqcdUylxUFvaa5oj6NIxFOnzIEldSnOqg",
  authDomain: "netflixgpt-65dd7.firebaseapp.com",
  projectId: "netflixgpt-65dd7",
  storageBucket: "netflixgpt-65dd7.firebasestorage.app",
  messagingSenderId: "913042335645",
  appId: "1:913042335645:web:e8e9d5dacc45dd8461b174",
  measurementId: "G-992RQ7QCHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();