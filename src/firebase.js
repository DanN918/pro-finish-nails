import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDeOo1uq7VT_6NrTzCiiSN68hXo4F1mABQ",
    authDomain: "pro-finish-nails.firebaseapp.com",
    databaseURL: "https://pro-finish-nails.firebaseio.com",
    projectId: "pro-finish-nails",
    storageBucket: "pro-finish-nails.appspot.com",
    messagingSenderId: "824644073229",
    appId: "1:824644073229:web:8bafaa5137594458a1e244",
    measurementId: "G-63V76MEZ5G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;