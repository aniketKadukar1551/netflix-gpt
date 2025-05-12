// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXqs0WesGlYVNzexVHm1IBb2seBAaTrNk",
  authDomain: "netflixgpt-d355b.firebaseapp.com",
  projectId: "netflixgpt-d355b",
  storageBucket: "netflixgpt-d355b.firebasestorage.app",
  messagingSenderId: "668843037445",
  appId: "1:668843037445:web:44e3f49d21d5c1b32fdd6c",
  measurementId: "G-GPE4EF7645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();