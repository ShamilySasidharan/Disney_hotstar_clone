// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLA0yPiSOBXE3echpMrLizR7gWh-ykyjg",
  authDomain: "disneyhotstar-ca759.firebaseapp.com",
  projectId: "disneyhotstar-ca759",
  storageBucket: "disneyhotstar-ca759.firebasestorage.app",
  messagingSenderId: "380566835198",
  appId: "1:380566835198:web:2a99ec1a744a5d18babaaf",
  measurementId: "G-W7609T2TQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
