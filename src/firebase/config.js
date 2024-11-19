import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkl3OaGF5iyygdQJYiLtykPYXiq_9zXGU",
  authDomain: "smith-portfolio-47e91.firebaseapp.com",
  projectId: "smith-portfolio-47e91",
  storageBucket: "smith-portfolio-47e91.firebasestorage.app",
  messagingSenderId: "322558543962",
  appId: "1:322558543962:web:321f464440d2a2bed73063"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {app, db, auth}