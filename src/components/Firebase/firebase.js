// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "trendy-ecommerce-627ae.firebaseapp.com",
  projectId: "trendy-ecommerce-627ae",
  storageBucket: "trendy-ecommerce-627ae.appspot.com",
  messagingSenderId: "591808735178",
  appId: "1:591808735178:web:647ca7248778d2e705d133",
  measurementId: "G-W9Q4D0T0Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
// Initialize Firestore 
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);



