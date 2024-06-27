// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FIREBASE_API = process.env.REACT_APP_FIREBASE_API;

export const firebaseConfig = {
  apiKey: "AIzaSyDrqnALkx0YyJP661E2xMKXR72WL37LK5c",
  authDomain: "mhub-752b1.firebaseapp.com",
  projectId: "mhub-752b1",
  storageBucket: "mhub-752b1.appspot.com",
  messagingSenderId: "1:900873241304:web:931deb336375b8ce90cdad",
  appId: "900873241304",
  measurementId: "G-0VL6QH3TWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;