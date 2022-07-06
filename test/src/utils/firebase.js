import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv7Lo5xrVRs3uNyy3SpzSm-mzPk--Q_hU",
  authDomain: "aliwen.firebaseapp.com",
  projectId: "aliwen",
  storageBucket: "aliwen.appspot.com",
  messagingSenderId: "1025431342339",
  appId: "1:1025431342339:web:86376a6ffdd468846b2d36",
  measurementId: "G-CX739C20YY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};