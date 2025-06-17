// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjKb8WTDs2bWAbjgp5g_lX1E1N3Fzm0W4",
  authDomain: "ewout-online.firebaseapp.com",
  projectId: "ewout-online",
  storageBucket: "ewout-online.firebasestorage.app",
  messagingSenderId: "347053034910",
  appId: "1:347053034910:web:3338a2d271c30a5f11da8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);