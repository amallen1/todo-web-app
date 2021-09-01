// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"; //need this

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt4jhKx6_MeLcFYHT6eWxSFR7c2FoRcKY",
  authDomain: "react-todo-app-7cf6a.firebaseapp.com",
  projectId: "react-todo-app-7cf6a",
  storageBucket: "react-todo-app-7cf6a.appspot.com",
  messagingSenderId: "192473135017",
  appId: "1:192473135017:web:17cf005c333a411ad6b6b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//gets the database
const db = getFirestore(app);

export { db };
