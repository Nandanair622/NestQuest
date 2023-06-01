// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPsSaNj0rN8QTlHLrchAW_2TnQY500B5c",
  authDomain: "nestquest-ec6a3.firebaseapp.com",
  projectId: "nestquest-ec6a3",
  storageBucket: "nestquest-ec6a3.appspot.com",
  messagingSenderId: "186793645255",
  appId: "1:186793645255:web:43df6129663402c2379ae2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()
