// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHHlR1VcfvSPfKgL-ZB0dsjoMH4kdYKE4",
  authDomain: "react-proyecto-6e474.firebaseapp.com",
  projectId: "react-proyecto-6e474",
  storageBucket: "react-proyecto-6e474.firebasestorage.app",
  messagingSenderId: "615441142721",
  appId: "1:615441142721:web:f66a4833f136b0ee73d540",
  //measurementId: "G-18X0TBGGRS"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp );
//const analytics = getAnalytics(app);