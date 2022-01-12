
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCwfmL33ZmncaOyE4Zj0SFlI1yow5POfE",
  authDomain: "note-taking-auth.firebaseapp.com",
  projectId: "note-taking-auth",
  storageBucket: "note-taking-auth.appspot.com",
  messagingSenderId: "480558721659",
  appId: "1:480558721659:web:a762606cd9499e416a10de",
  measurementId: "G-JW325RV5DY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);