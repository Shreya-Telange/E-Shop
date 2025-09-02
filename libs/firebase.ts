// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP-dMV3y72hftsnm1Oi2UfTvxfwMQs3v0",
  authDomain: "e-shop-vid-ed68f.firebaseapp.com",
  projectId: "e-shop-vid-ed68f",
  storageBucket: "e-shop-vid-ed68f.firebasestorage.app",
  messagingSenderId: "1006525732592",
  appId: "1:1006525732592:web:309eef0f53d87f1a099435"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp