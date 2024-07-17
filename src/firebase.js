// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase } from 'firebase/database';
// import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOZ6N4HC2_-zvu8EvyEXFPxjNDUWJu-Xc",
  authDomain: "zahwan-3def0.firebaseapp.com",
  databaseURL: "https://zahwan-3def0-default-rtdb.firebaseio.com",
  projectId: "zahwan-3def0",
  storageBucket: "zahwan-3def0.appspot.com",
  messagingSenderId: "103789393157",
  appId: "1:103789393157:web:cc4bab878819ee29adf36c",
  measurementId: "G-3F1QSY8T23"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
export const db = getDatabase(app);
// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app)
// const analytics = getAnalytics(app);