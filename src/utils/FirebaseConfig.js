// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFtY-L-aLG5OVXU-TjnXMUqlA9pJyq3gI",
  authDomain: "netflixgpt-636c5.firebaseapp.com",
  projectId: "netflixgpt-636c5",
  storageBucket: "netflixgpt-636c5.firebasestorage.app",
  messagingSenderId: "364304225119",
  appId: "1:364304225119:web:84b52c0fa5acd109361cea",
  measurementId: "G-ZZ7TRDM8V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();