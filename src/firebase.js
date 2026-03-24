// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3gA45e3JrZeCvdg7NwAYZzLocTpHh2Sc",
  authDomain: "suppo-e2908.firebaseapp.com",
  projectId: "suppo-e2908",
  storageBucket: "suppo-e2908.firebasestorage.app",
  messagingSenderId: "411604702419",
  appId: "1:411604702419:web:04d30a49c0479ce134f026",
  measurementId: "G-2YQ0X5CZHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);