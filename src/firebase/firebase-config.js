// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDME1f39SrRT0y6H2g0KZrEkQgSfdgKQsU",
  authDomain: "crud-c7c37.firebaseapp.com",
  projectId: "crud-c7c37",
  storageBucket: "crud-c7c37.appspot.com",
  messagingSenderId: "992467910790",
  appId: "1:992467910790:web:620bcbce1d58d2c0f65107",
  databaseUrl: 'https://crud-c7c37-default-rtdb.asia-southeast1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db }