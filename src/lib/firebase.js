import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZWg9XgVUcA8MqMxAT4-57Uw0lWRv9eAQ",
  authDomain: "react--clone-17bb5.firebaseapp.com",
  projectId: "react--clone-17bb5",
  storageBucket: "react--clone-17bb5.appspot.com",
  messagingSenderId: "723497461847",
  appId: "1:723497461847:web:5cec29db50a144b0915b12",
  measurementId: "G-7TT3SQGC2Z",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
