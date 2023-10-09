// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7e3f5.firebaseapp.com",
  projectId: "mern-estate-7e3f5",
  storageBucket: "mern-estate-7e3f5.appspot.com",
  messagingSenderId: "1050705975836",
  appId: "1:1050705975836:web:48f92d29505833e94e9dd9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
