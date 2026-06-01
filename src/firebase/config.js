// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmEuaAsu-lusdnlFUj2hnekNkwWNSMZtQ",
  authDomain: "mi-ecommerce-react-a662c.firebaseapp.com",
  projectId: "mi-ecommerce-react-a662c",
  storageBucket: "mi-ecommerce-react-a662c.firebasestorage.app",
  messagingSenderId: "946533107265",
  appId: "1:946533107265:web:07423aa3e50e5c395b68c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };
