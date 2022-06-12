const Rebase = require('re-base');
const firebase = require('firebase');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyCX37OgLQllOQLTDIbR6YuzXBN384nQfhs",
  authDomain: "website-admin-6ecfe.firebaseapp.com",
  databaseURL: "https://website-admin-6ecfe-default-rtdb.firebaseio.com",
  projectId: "website-admin-6ecfe",
  storageBucket: "website-admin-6ecfe.appspot.com",
  messagingSenderId: "312825115643",
  appId: "1:312825115643:web:75ca4e04d9d6919c68515e",
  measurementId: "G-VM351L5221"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const analytics = getAnalytics(app);

const config = Rebase.createClass(app.databaseURL());

export default config;