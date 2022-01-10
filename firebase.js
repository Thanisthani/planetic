// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJpOh_7qBQ-RW3eRFGbEYjlQ8F5PixZqQ",
  authDomain: "plannetic-sample.firebaseapp.com",
  projectId: "plannetic-sample",
  storageBucket: "plannetic-sample.appspot.com",
  messagingSenderId: "410288536012",
  appId: "1:410288536012:web:3eb2e3feaa27ff7a6b8569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export  {auth}