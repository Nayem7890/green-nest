// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM8tYGJY8B_ddtCL9zcg21S6_n9KthmWk",
  authDomain: "green-nest-09.firebaseapp.com",
  projectId: "green-nest-09",
  storageBucket: "green-nest-09.firebasestorage.app",
  messagingSenderId: "969899692277",
  appId: "1:969899692277:web:fcce332a8de9add1b735bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);