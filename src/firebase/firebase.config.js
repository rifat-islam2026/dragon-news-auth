// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwPHA99feulAewYsh1okfn0bzAa3GZDxA",
    authDomain: "dragon-news-auth-aa880.firebaseapp.com",
    projectId: "dragon-news-auth-aa880",
    storageBucket: "dragon-news-auth-aa880.appspot.com",
    messagingSenderId: "435836662336",
    appId: "1:435836662336:web:003058626a317c3e6ee5a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;