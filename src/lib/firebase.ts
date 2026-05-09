// Firebase Configuration — Shared across all Z3 landing pages
// Project: z3-school-landingpage-erp
// All landing pages connect to this same Firebase instance

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA730IHbXnH0fYQMnl5TwZlgbxF9K5d_rs",
  authDomain: "z3-school-landingpage-erp.firebaseapp.com",
  projectId: "z3-school-landingpage-erp",
  storageBucket: "z3-school-landingpage-erp.firebasestorage.app",
  messagingSenderId: "940638072157",
  appId: "1:940638072157:web:6d7b4188909bc80ca70cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
