// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBebHmR-oB999UlG2zFgDwcoFzE2sby1Xk",
  authDomain: "taxeaseai-e1615.firebaseapp.com",
  projectId: "taxeaseai-e1615",
  storageBucket: "taxeaseai-e1615.appspot.com",
  messagingSenderId: "393964188710",
  appId: "1:393964188710:web:962dd150470c4210a462e7",
  measurementId: "G-EQW5ZPXEW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword };
