import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAFngJNqmdySz0jpPjYv52g93utvig4xIw",
  authDomain: "today-at-home.firebaseapp.com",
  projectId: "today-at-home",
  storageBucket: "today-at-home.appspot.com",
  messagingSenderId: "1087059135334",
  appId: "1:1087059135334:web:2f0c446aa2fad1841e16a7",
  measurementId: "G-0FXV0ZX60R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;