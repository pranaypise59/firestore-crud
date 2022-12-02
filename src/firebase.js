import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB77NHUBScoy6ySJmcYuagwRaK7DHbYIwk",
  authDomain: "firestore-webophilia.firebaseapp.com",
  projectId: "firestore-webophilia",
  storageBucket: "firestore-webophilia.appspot.com",
  messagingSenderId: "882959160379",
  appId: "1:882959160379:web:3b0e2b7d1056778126781e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);