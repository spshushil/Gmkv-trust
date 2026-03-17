// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBbcmWJAs9WPn0ddieTgenKK_Wje8dz3ZA",
  authDomain: "trust-members-id.firebaseapp.com",
  projectId: "trust-members-id",
  storageBucket: "trust-members-id.firebasestorage.app",
  messagingSenderId: "355966205972",
  appId: "1:355966205972:web:3fbbf7b21a662799162701",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firestore DB
export const db = getFirestore(app);