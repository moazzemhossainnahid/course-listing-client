// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlFMLPOKY2sfs9TXLxsQKiKRgMlR9u2ls",
  authDomain: "course-listing-online.firebaseapp.com",
  projectId: "course-listing-online",
  storageBucket: "course-listing-online.appspot.com",
  messagingSenderId: "246194636910",
  appId: "1:246194636910:web:bce6f87beae99a56f3fe7f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 