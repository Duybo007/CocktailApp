// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmLZd48RUi-2sP5yTRnyOE9arK-GUP5s8",
  authDomain: "habana-acdfd.firebaseapp.com",
  projectId: "habana-acdfd",
  storageBucket: "habana-acdfd.appspot.com",
  messagingSenderId: "1059894270817",
  appId: "1:1059894270817:web:5c4380989061d60fa38320"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app);
export {db}