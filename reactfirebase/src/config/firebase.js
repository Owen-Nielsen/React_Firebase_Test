// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJ3Uc3zRW__wU6vlzrRwKA0IFPRNmnCws",
  authDomain: "reactfirebasetest-5ed7e.firebaseapp.com",
  projectId: "reactfirebasetest-5ed7e",
  storageBucket: "reactfirebasetest-5ed7e.appspot.com",
  messagingSenderId: "350036756477",
  appId: "1:350036756477:web:bb4045633b7d7583513b94",
  measurementId: "G-7W0NREPCSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);