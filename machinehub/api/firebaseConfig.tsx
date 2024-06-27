// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const { FIREBASE_API, FIREBASE_MESSAGE_ID, FIREBASE_APP_ID } = process.env

export const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: "mhub-752b1.firebaseapp.com",
  projectId: "mhub-752b1",
  storageBucket: "mhub-752b1.appspot.com",
  messagingSenderId: FIREBASE_MESSAGE_ID,
  appId: FIREBASE_APP_ID,
  measurementId: "G-0VL6QH3TWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app